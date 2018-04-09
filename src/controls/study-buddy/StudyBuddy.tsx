import * as React from 'react';
// import * as MaterialUiStyles from 'material-ui/styles';
// import IconButton from 'material-ui/IconButton';
// import TextField from 'material-ui/TextField';
import * as ArrayM from '../../utils/ArrayUtils';

import { getCitationRefs, Collection, CollectionKey, Book, BookKey, CitationRef, Citation, GetCitationRefsResult } from '../../utils/CitationUtils';

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

const CitationView:React.StatelessComponent<{booksAndCitationRefs:GetCitationRefsResult}> = props => 
    <div style={Styles.control}>
        {props.booksAndCitationRefs.map((bookAndCitationRefs, bookIndex) => 
            <div key={bookIndex}>
                <div style={Styles.header}>
                    {bookAndCitationRefs.book}
                </div>
                <div>
                    {bookAndCitationRefs.citationRefs.map((citationRef, index) => 
                        <div style={Styles.result}>
                            {citationRef.citationRef.}
                        </div>
                    )}
                </div>
            </div>
        )}
    </div>

export const StudyBuddy:React.StatelessComponent<Props> = props => {
    const booksAndCitationRefs = getCitationRefs(props.subject);
    if (booksAndCitationRefs.length) {
        return <CitationView booksAndCitationRefs={booksAndCitationRefs} />
    }
    else {
        const sentances = props.subject.replace(/\.|\r/gi, "\n").split("\n").filter(x => x && x.trim().length)
        return <NonCitationView sentances={sentances} />
    }
}