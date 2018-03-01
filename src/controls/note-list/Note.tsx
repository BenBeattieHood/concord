import * as React from 'react';
import * as MaterialUiStyles from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';

namespace Styles {
    export const control:React.CSSProperties = {
        paddingTop: 10,
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 10,
        display: "flex",
    }
    export const dragHandle:React.CSSProperties = {
        backgroundImage: "radial-gradient(black 40%, transparent 40%)",
        backgroundSize: "4px 4px",
        backgroundPosition: "0 100%",
        backgroundRepeat: "repeat-x",
        cursor: "move"
    }
    export const childrenContainer:React.CSSProperties = {

    }
}

export interface NoteData {
    isExpanded: boolean,
    text: string
    children: NoteData[]
}

interface Props {
    note: NoteData,
    onChange: (prevPath:NoteData[], nextPath:NoteData[])=>void
}

interface ReactDelegate<Props> {
    (props:Props):React.ReactElement<Props>
}

export const Note:ReactDelegate<Props> = props => {
    return (
        <div style={Styles.control}>
            <IconButton
                iconClassName="material-icons"
                tooltip={props.note.isExpanded ? "Collapse" : "Expand"}
                >
                {props.note.isExpanded ? "expand-less" : "expand-more"}
            </IconButton>
            <span style={Styles.dragHandle}
                />
            <TextField
                hintText="Message Field"
                floatingLabelText="MultiLine and FloatingLabel"
                multiLine={true}
                rows={1}
                value={props.note.text}
                onChange={}
                />
            <div style={Styles.childrenContainer}>
                {props.note.children.map((childNote, index) =>
                    <Note
                        key={index}
                        note={childNote}
                        onChange={props.onChange}
                        />
                )}
            </div>
        </div>
    );
}