import * as React from 'react';
import * as MaterialUiStyles from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';

import * as CitationUtils from '../../utils/CitationUtils';

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


interface Props {
    subject: string
}

const NonCitationView:React.StatelessComponent<{sentances:string[]}> = props => 
    <div style={Styles.control}>
        <div style={Styles.header}>
            "God is Love"
        </div>
        <div style={}>
            <div style={}>
                "Love" as a synonym for God - 63 results
            </div>

        </div>
    </div>

const CitationView:React.StatelessComponent<{citations:string[]}> = props => 
    <div style={Styles.control}>
        
    </div>

export const StudyBuddy:React.StatelessComponent<Props> = props => {
    const citations = CitationUtils.getCitations(props.subject, false);
    if (citations.length) {
        return <CitationView citations={citations} />
    }
    else {
        const sentances = props.subject.replace(/\.|\r/gi, "\n").split("\n").filter(x => x && x.trim().length)
        return <NonCitationView sentances={sentances} />
    }
}