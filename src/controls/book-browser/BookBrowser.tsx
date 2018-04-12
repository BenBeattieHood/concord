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
import { Citation, CitationRefGroup, Collection, CollectionKey, Book, BookKey, collections, UncollectedCollectionKey, collectionsWithBooksAndTranslations } from '../../utils/CitationUtils';
import * as ArrayM from '../../utils/ArrayUtils';

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
    citationRef: CitationRefGroup
    onChangeCitationRef: (citationRef:CitationRefGroup)=>void
}

const getChapter = (lineRef:string):number => 1

const onChangeCitationRef = (
    props: {
        citationRef: CitationRefGroup
        onChangeCitationRef: (citationRef:CitationRefGroup)=>void
    }, 
    citationRef: Partial<CitationRefGroup>
):void => 
{
    const collection = citationRef.collection || props.citationRef.collection;
    let book = citationRef.book || props.citationRef.book;
    if (collection.value.bookGroups.map(bookGroup => Object.keys(bookGroup).map(key => bookGroup[])))
}

const BookBrowserToolbar:React.StatelessComponent<BookBrowserToolbarProps> = (props) => {
    const bookGroups = collections[props.citationRef.collection.key].bookGroups;

    const translations =
        ArrayM.uniq(ArrayM.flatten(bookGroups.map(bookGroup => 
            [ bookGroup.defaultTranslation, ...bookGroup.altTranslations ]
        ))).sort();

    const books =
        ArrayM.uniq(ArrayM.flatten(bookGroups.map(bookGroup => {
            const bookGroupKeys = Object.keys(bookGroup.bookRefData);
            return bookGroupKeys
                .map((bookKey, index) => {
                    const book = bookGroup.bookRefData[bookKey];
                    return {
                        order: (book.order ? (book.order + bookGroupKeys.length) : index),
                        bookKey,
                        book
                    }
                })  
        }))
        .sort(x => x.order)
        .map(x => ({ bookKey: x.bookKey, book: x.book })));
    
    const booksAndTranslations = collectionsWithBooksAndTranslations[props.citationRef.collection.key];

    const booksForTheCurrentTranslation = booksAndTranslations.booksToTranslations[props.citationRef.translation];
    const translationsForTheCurrentBook = booksAndTranslations.booksToTranslations[props.citationRef.book.key];

    const chapter = getChapter(props.citationRef.lineRef);
    const chapters = getChapters({collection: props.citationRef.collection, translation: props.citationRef.translation, book: props.citationRef.book});
    const getMenuItemSelectedStyle = (isSelected: boolean): React.CSSProperties | undefined =>
        isSelected
        ? { opacity: 0.8 }
        : undefined;

    return (
        <Toolbar>
            <ToolbarGroup firstChild={true}>
                <DropDownMenu value={props.citationRef.collection.key} onChange={(e, i, value) => 
                    onChangeCitationRef(props, {
                        collection: value
                    })}>
                    {Object.keys(collections).map(collectionKey => 
                        <MenuItem value={collectionKey} primaryText={collections[collectionKey].title} />
                    )}
                </DropDownMenu>
                {translations.length === 1 ? null :
                    <DropDownMenu value={props.citationRef.translation} onChange={(e, i, value) => 
                        onChangeCitationRef(props, {
                            translation: value
                        })}>
                        {translations.map(translation => 
                            <MenuItem value={translation} primaryText={translation} style={getMenuItemSelectedStyle(translationsForTheCurrentBook[translation] !== undefined)} />
                        )}
                    </DropDownMenu>
                }
                {props.citationRef.collection.key === UncollectedCollectionKey ? null :
                    <DropDownMenu value={props.citationRef.book} onChange={(e, i, value) => 
                        onChangeCitationRef(props, {
                            book: value, 
                        })}>
                        {books.map((value, index) => 
                            <MenuItem value={value} primaryText={value.book.title} style={getMenuItemSelectedStyle(booksForTheCurrentTranslation[value.bookKey] !== undefined)} />
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