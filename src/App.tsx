import * as React from 'react';
import { Search } from './controls/search/Search';
import { BookBrowser } from './controls/book-browser/BookBrowser';
import { NotesEditor } from './controls/notes/NotesEditor';
import { StudyBuddy } from './controls/study-buddy/StudyBuddy';

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

interface State {
    searchResultsVisible: boolean,
    selectedNotesText: string
}

export class App extends React.Component<{}, State> {
    constructor(props:{}){
        super(props);
        this.state = {
            searchResultsVisible: false,
            selectedNotesText: ""
        };
    }
    render() {
        return (
            <div style={Styles.page}>
                <div style={Styles.searchContainer}>
                    <Search
                        resultsVisible={this.state.searchResultsVisible}
                        onResultsVisibityChanged={value => {this.setState({searchResultsVisible:value})}}
                        />
                </div>
                <div style={Styles.workspaceContainer}>
                    <div style={Styles.mainContainer}>
                        <BookBrowser
                            />
                        {this.state.selectedNotesText && 
                            <StudyBuddy
                                subject={this.state.selectedNotesText}
                                />
                        }
                    </div>
                    <div style={Styles.noteListContainer}>
                        <NotesEditor
                            onSelectionChanged={selectedNotesText => this.setState({selectedNotesText})}
                            />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;