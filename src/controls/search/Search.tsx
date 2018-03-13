import * as React from 'react';
import * as MaterialUiStyles from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';

//const muiTheme = MaterialUiStyles.getMuiTheme();
namespace Styles {
    export const control:React.CSSProperties = {
        paddingTop: 10,
        paddingLeft: 50,
        paddingRight: 38,
        paddingBottom: 10,
        display: "flex",
        backgroundColor: MaterialUiStyles.colors.grey200 //muiTheme.appBar!.color
    }
    export const searchTextBox:React.CSSProperties = {
        flex: 1
    }
    export const searchResults:React.CSSProperties = {
        position: "absolute",
        left: 0,
        right: 0,
        padding: "0 5px",
        maxHeight: "calc(100vh - 10px - 10px)",
        overflowY: "auto",
        bottom: 0
    }
}

interface Props {
    resultsVisible: boolean,
    onResultsVisibityChanged: (value:boolean) => void; 
}

interface State {
    searchTempText: string
}

const combineStyles = (styles:(React.CSSProperties | undefined)[]):React.CSSProperties | undefined =>
    styles.reduce(
        (prev, next) => next ? ({
            ...prev,
            ...next
        }) : prev
    )

export class Search extends React.Component<Props, State> {

    constructor(props:Props) {
        super(props);
        this.state = {
            searchTempText: ""
        }
    }
    
    onSearchKeyPress = (key: string, value: string) => {
        this.setState({searchTempText: value});
        this.props.onResultsVisibityChanged(!!value);
    }

    render() {
        return (
            <div style={Styles.control}>
                <Paper zDepth={this.props.resultsVisible ? 3 : 0} style={{paddingLeft: 5, position:'relative', display: 'flex', flex: 1}}>
                    <TextField
                        hintText="Search"
                        style={Styles.searchTextBox}
                        onKeyPress={(e: React.KeyboardEvent<TextField>) => this.onSearchKeyPress(e.key, e.target["value"])}
                        value={this.state.searchTempText}
                        />
                    <IconButton 
                        iconClassName="material-icons" 
                        onClick={e => this.props.onResultsVisibityChanged(true)}
                        >
                        search
                    </IconButton>
                    <div style={combineStyles([Styles.searchResults, this.props.resultsVisible ? undefined : {display: 'none'}])}>
                        Results
                    </div>
                </Paper>
            </div>
        );
    }
}