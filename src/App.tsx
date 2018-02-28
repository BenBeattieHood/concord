import * as React from 'react';
import { Search } from './controls/search/Search';
import { BookBrowser } from './controls/book-browser/BookBrowser';
import { CitationList } from './controls/citation-list/CitationList';

namespace Styles {
    export const page:React.CSSProperties = {
        height: "100vh",
        width: "100vw",
        scroll: "auto",
        display: "flex"
    }
    export const searchContainer:React.CSSProperties = {
        width: "100%"
    }
    export const mainContainer:React.CSSProperties = {
        flex: 1
    }
    export const citationListContainer:React.CSSProperties = {
        flex: 1
    }
}

export class App extends React.Component {
    render() {
        return (
            <div style={Styles.page}>
                <div style={Styles.searchContainer}>
                    <Search
                        />
                </div>
                <div style={Styles.mainContainer}>
                    <BookBrowser
                        />
                </div>
                <div style={Styles.citationListContainer}>
                    <CitationList
                        />
                </div>
            </div>
        );
    }
}

export default App;