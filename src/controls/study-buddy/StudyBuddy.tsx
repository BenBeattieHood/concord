import * as React from 'react';
// import * as MaterialUiStyles from 'material-ui/styles';
// import IconButton from 'material-ui/IconButton';
// import TextField from 'material-ui/TextField';

import * as CitationUtils from '../../utils/CitationUtils';

namespace Styles {
    export const control:React.CSSProperties = {
        paddingTop: 10,
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 10,
        display: "flex",
    }
    export const header:React.CSSProperties = {}
    export const temop:React.CSSProperties = {}
}


interface Props {
    subject: string
}

const NonCitationView:React.StatelessComponent<{sentances:string[]}> = props => 
    <div style={Styles.control}>
        <div style={Styles.header}>
            "God is Love"
        </div>
        <div style={Styles.temop}>
            <div style={Styles.temop}>
                "Love" as a synonym for God - 63 results
            </div>
            <div style={Styles.temop}>
                347 Articles on JSH Online
            </div>
        </div>
    </div>

const CitationView:React.StatelessComponent<{citations:string[]}> = props => 
    <div style={Styles.control}>
        {props.citations.map((citation, index) => 
            <div style={Styles.header}>
                {citation}
            </div>
        )}
    </div>

export const StudyBuddy:React.StatelessComponent<Props> = props => {
    const citations = CitationUtils.bookCitationRefFinders..getCitationRefs(props.subject, false);
    console.log(citations);
    if (citations.length) {
        return <CitationView citations={citations} />
    }
    else {
        const sentances = props.subject.replace(/\.|\r/gi, "\n").split("\n").filter(x => x && x.trim().length)
        return <NonCitationView sentances={sentances} />
    }
}