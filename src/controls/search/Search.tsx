import * as React from 'react';
import * as MaterialUiStyles from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';

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
        display: "none",
        width: "100%",
        maxHeight: "calc(100vh - 10px - 10px)",
        overflowY: "auto"
    }
}

export class Search extends React.Component {
    render() {
        return (
            <div style={Styles.control}>
                <TextField
                    hintText="Search"
                    style={Styles.searchTextBox}
                    />
                <IconButton 
                    iconClassName="material-icons" 
                    >
                    search
                </IconButton>
                <div style={Styles.searchResults}>
                </div>
            </div>
        );
    }
}