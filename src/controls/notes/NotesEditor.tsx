import * as React from 'react';
import { Editor, EditorState, ContentState, SelectionState, ContentBlock } from 'draft-js';

namespace Styles {
    export const control:React.CSSProperties = {
        paddingTop: 10,
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 10,
        display: "flex",
        flex: 1
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

export class NotesEditor extends React.Component<Props, State> {
    constructor(props:Props) {
        super(props);
        this.state = { editorState: EditorState.createEmpty(), textSelections: [] };
    }

    render() {
        return (
            <div style={Styles.control}>
                <Editor
                    editorState={this.state.editorState}
                    onChange={this.onEditorChange}
                    spellCheck={true}
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