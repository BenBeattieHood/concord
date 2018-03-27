import * as React from 'react';
import { Editor, EditorState, DraftEditorCommand, DraftHandleValue, ContentState, SelectionState, ContentBlock, RichUtils, getDefaultKeyBinding } from 'draft-js';
import {Toolbar, ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';


type SyntheticKeyboardEvent = React.KeyboardEvent<{}>;
type EditorCommand = DraftEditorCommand | string

namespace Styles {
    export const control:React.CSSProperties = {
        paddingTop: 10,
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 10,
        flex: 1,
        height: 'calc(100% - 20px)'
    }
    export const editor:React.CSSProperties = {
        flex: 1
    }
}

interface Props {
    onSelectionChanged: (selection: string)=>void
}

interface State {
    textSelections: string[],
    editorState: EditorState
}

const ToolbarButton:React.StatelessComponent<{icon:string, onClick:()=>void}> = props => 
    <IconButton 
        iconClassName="material-icons" 
        onClick={e => props.onClick()}
        >
        {props.icon}
    </IconButton>

export class NotesEditor extends React.Component<Props, State> {
    constructor(props:Props) {
        super(props);
        this.state = { editorState: EditorState.createEmpty(), textSelections: [] };
    }

    onChange = (editorState:EditorState) => {
        this.setState({editorState});
    }

    toggleInlineStyle = (inlineStyle:string) => 
    this.onChange(RichUtils.toggleInlineStyle(
        this.state.editorState,
        inlineStyle
    ))

    toggleBlockType = (blockType:string) => 
    this.onChange(RichUtils.toggleBlockType(
        this.state.editorState,
        blockType
    ))
    
    handleKeyCommand = (command: EditorCommand, editorState: EditorState): DraftHandleValue => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return "handled";
        }
        return "not-handled";
    }

    mapKeyToEditorCommand = (e: SyntheticKeyboardEvent): EditorCommand | null => {
        const newEditorState = (():EditorState | null => {
            switch (e.keyCode) {
                case 9: // tab
                    return RichUtils.onTab(
                        e,
                        this.state.editorState,
                        4, /* maxDepth */
                        );

                case 86: // B
                    if (e.ctrlKey) {
                        return RichUtils.toggleInlineStyle(
                            this.state.editorState,
                            'bold'
                        );
                    }
            }
            return null;
        })();

        if (newEditorState) {
            if (newEditorState !== this.state.editorState) {
                this.onChange(newEditorState);
            }
            e.preventDefault();
            return null;
        }
        else if (e.ctrlKey) {
            console.log(`key:${e.keyCode} : ${e.shiftKey}`)
        }

        return getDefaultKeyBinding(e);
    }

    render() {
        return (
            <div style={Styles.control}>
                <Toolbar>
                    <ToolbarGroup>
                        <ToolbarButton
                            icon="format_bold"
                            onClick={() => this.toggleInlineStyle('BOLD')}
                            />
                        <ToolbarSeparator/>
                        <ToolbarButton
                            icon="format_list_numbered"
                            onClick={() => this.toggleBlockType('ordered-list-item')}
                            />
                        <ToolbarButton
                            icon="format_list_bulleted"
                            onClick={() => this.toggleBlockType('unordered-list-item')}
                            />
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <ToolbarButton
                            icon="print"
                            onClick={() => alert('open print popup')}
                            />
                        <ToolbarButton
                            icon="share"
                            onClick={() => alert('open share popup')}
                            />
                    </ToolbarGroup>
                </Toolbar>
                <Editor
                    editorState={this.state.editorState}
                    onChange={this.onEditorChange}
                    spellCheck={true}
                    handleKeyCommand={this.handleKeyCommand}
                    keyBindingFn={this.mapKeyToEditorCommand}
                    onTab={this.mapKeyToEditorCommand}
                    />
            </div>
        );
    }

    onEditorChange = (editorState:EditorState) => {
        const prevTextSelections = this.state.textSelections;
        const nextTextSelections = getTextSelections({
            contentState: editorState.getCurrentContent(),
            selection: editorState.getSelection()
        });

        if (
            prevTextSelections.length !== nextTextSelections.length
            || !prevTextSelections.every((value, index) => value == nextTextSelections[index])
        )
        {
            this.props.onSelectionChanged(nextTextSelections.join('\n'));
        }

        this.setState({
            editorState,
            textSelections: nextTextSelections
        });
    };
}

// see https://github.com/facebook/draft-js/issues/442#issuecomment-223816158
const getTextSelections = (args:{contentState: ContentState, selection: SelectionState}):string[] => {
    const startKey = args.selection.getStartKey();
    const endKey = args.selection.getEndKey();
    const blocks = args.contentState.getBlockMap();

    let lastWasEnd = false;
    const selectedBlock = blocks
        .skipUntil((block: ContentBlock) => block.getKey() === startKey)
        .takeUntil((block: ContentBlock) => {
            const result = lastWasEnd;

            if (block.getKey() === endKey) {
                lastWasEnd = true;
            }

            return result;
        });

    return selectedBlock
        .map((block: ContentBlock) => {
            const key = block.getKey();
            const text = block.getText();

            const start = 
                (key === startKey)
                ? args.selection.getStartOffset()
                : 0;

            const end = 
                (key === endKey)
                ? args.selection.getEndOffset()
                : text.length;

            return text.slice(start, end);
        })
        .toArray();
}