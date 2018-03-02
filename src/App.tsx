import * as React from 'react';
import { Search } from './controls/search/Search';
import { BookBrowser } from './controls/book-browser/BookBrowser';
import { NotesEditor } from './controls/notes/NotesEditor';

namespace Styles {
    export const page:React.CSSProperties = {
        height: "100vh",
        width: "100vw",
        scroll: "auto",
        display: "flex",
        flexDirection: "column"
    }
    export const searchContainer:React.CSSProperties = {
    }
    export const workspaceContainer:React.CSSProperties = {
        display: "flex",
        flexWrap: "wrap",
        flex: 1
    }
    export const mainContainer:React.CSSProperties = {
        flex: 1
    }
    export const noteListContainer:React.CSSProperties = {
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
                <div style={Styles.workspaceContainer}>
                    <div style={Styles.mainContainer}>
                        <BookBrowser
                            />
                    </div>
                    <div style={Styles.noteListContainer}>
                        <NotesEditor
                            onSelectionChanged=(selection)
                            />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;