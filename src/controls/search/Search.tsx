import * as React from 'react';
import * as MaterialUiStyles from 'material-ui/styles';

const muiTheme = MaterialUiStyles.getMuiTheme();
namespace Styles {
    export const control:React.CSSProperties = {
        paddingTop: 10,
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 10,
        display: "flex",
        backgroundColor: muiTheme.appBar!.color
    }
}

export class Search extends React.Component {
    render() {
        return (
            <div style={Styles.control}/>
        );
    }
}