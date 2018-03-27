import * as React from 'react';
import * as MaterialUiStyles from 'material-ui/styles';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Toggle from 'material-ui/Toggle';
import { Citation, CitationRef } from '../../utils/CitationUtils';

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

export class BookBrowser extends React.Component {
    render() {
        return (
            <div style={Styles.control}>
                
            </div>
        );
    }
}

interface BookBrowserToolbarProps {
    citationRef: CitationRef
    onChangeCitationRef: (citationRef:CitationRef)=>void
}

const getTranslations = (args:{collection : "Bible" | "Science and Health" | "JSH Online"}) : string[] | undefined => {
    switch (args.collection) {
        case "Bible": return [];
        case "Science and Health": return undefined;
        case "JSH Online": return undefined;

        default:
            const _:never = args.collection;
    }
}

const getBooks = (args:{collection : "Bible" | "Science and Health" | "JSH Online", translation: string}) : string[] | undefined => {
    switch (args.collection) {
        case "Bible": return [];
        case "Science and Health": return undefined;
        case "JSH Online": return ["Journal", "Sentinel", "Herald"];

        default:
            const _:never = args.collection;
    }
}

const getChapters = (args:{collection : "Bible" | "Science and Health" | "JSH Online", translation: string, book: string}) : number[] | undefined => {
    const createChapterArray = (max:number) => [...Array(max)].map((_, index) => index);
    switch (args.collection) {
        case "Bible": return [];
        case "Science and Health": return createChapterArray(12);
        case "JSH Online": return [1,2,3];

        default:
            const _:never = args.collection;
    }
}

const getChapter = (lineRef:string):number => 1

const BookBrowserToolbar:React.StatelessComponent<BookBrowserToolbarProps> = (props) => {
    const translations = getTranslations({collection:props.citationRef.collection});
    const books = getBooks({collection: props.citationRef.collection, translation: props.citationRef.translation});
    const chapter = getChapter(props.citationRef.lineRef);
    const chapters = getChapters({collection: props.citationRef.collection, translation: props.citationRef.translation, book: props.citationRef.book});
    return (
        <Toolbar>
            <ToolbarGroup firstChild={true}>
                <DropDownMenu value={props.citationRef.collection} onChange={(e, i, value) => props.onChangeCitationRef({collection:value, translation: props.citationRef.translation, book:props.citationRef.book, lineRef:props.citationRef.lineRef})}>
                    {["Bible", "Science and Health", "JSH Online"].map((value, index) => 
                        <MenuItem value={value} primaryText={value} />
                    )}
                </DropDownMenu>
                {translations == null ? null :
                    <DropDownMenu value={props.citationRef.translation} onChange={(e, i, value) => props.onChangeCitationRef({collection:props.citationRef.collection, translation: value, book:props.citationRef.book, lineRef:props.citationRef.lineRef})}>
                        {translations.map((value, index) => 
                            <MenuItem value={value} primaryText={value} />
                        )}
                    </DropDownMenu>
                }
                {books == null ? null :
                    <DropDownMenu value={props.citationRef.book} onChange={(e, i, value) => props.onChangeCitationRef({collection:props.citationRef.collection, translation: props.citationRef.translation, book:value, lineRef:props.citationRef.lineRef})}>
                        {books.map((value, index) => 
                            <MenuItem value={value} primaryText={value} />
                        )}
                    </DropDownMenu>
                }
                <DropDownMenu value={chapter} onChange={(e, i, value) => props.onChangeCitationRef({collection:props.citationRef.collection, translation: props.citationRef.translation, book:props.citationRef.book, lineRef:`${value}:1`})}>
                    {chapters == null ? null : chapters.map((value, index) => 
                        <MenuItem value={value} primaryText={value} />
                    )}
                </DropDownMenu>
            </ToolbarGroup>
            <ToolbarGroup>
                <Toggle
                    label="Study Buddy"
                    />
            </ToolbarGroup>
        </Toolbar>
    );
}