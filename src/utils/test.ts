type CollectionKey = string
type BookKey = string

interface KeyValuePair<K, V> {
    key: K
    value: V
}
export interface CitationRef {
    collection: KeyValuePair<CollectionKey, Collection>
    book: KeyValuePair<BookKey, Book>
    lineRef: string
}
export interface Citation {
    ref: CitationRef,
    text: string
}

interface Collection { title: string }
interface Book { title: string, altAbbrs: string[], altTitles: string[], translation: string }
interface BookRefData {[key:string]: Book}

const bibleBooks:BookRefData = 
{
    "1 Acts": { title: "The Acts", altAbbrs: [], altTitles: [ "Acts of the Apostles" ] },
    "Bel & Dr": { title: "Bel and the Dragon", altAbbrs: [], altTitles: [ "Daniel 14 (when considered canonical)" ] },
    "1 Chr": { title: "1 Chronicles", altAbbrs: [ "I Chr", "1 Chron", "I Chron" ], altTitles: [ "the First book of Chronicles" ] },   
}

interface CitationRefFinder {
    (s:string):{position: number, citationRef: CitationRef, debugData: {citationAndLineRef:string, bookRef:string}}[]
}
function* getCitationRefFinders(collection: KeyValuePair<CollectionKey, Collection>, bookRefData:BookRefData): IterableIterator<{getCitationRefs:CitationRefFinder, book:BookAbbrv}> {
    for (const key of Object.keys(bookRefData)) {
        const book = bookRefData[key];

        const identifiers = [key, book.title, ...book.altAbbrs]
        const identifierRegExpStr = identifiers.map(identifier => {
            const bookNumberMatches = identifier.match(/^[1-9]+? /g);
            const regExpPrefix = 
                bookNumberMatches
                ? `[^0-9I]`
                : `[^a-zA-Z]`;

            return `(^|${regExpPrefix})(${identifier})`;
        }).join(`)|(`)

        const citationMatchRegExpStr = `((${identifierRegExpStr}))\\s*([0-9;\\-\\s:]*)`
        const globalRegExp = new RegExp(citationMatchRegExpStr, "ig")
        const regExp = new RegExp(citationMatchRegExpStr, "i");
        
        const getCitationRefs:CitationRefFinder = s => {
            const globalRegExpMatches = s.match(globalRegExp);
            if (globalRegExpMatches) {
                return globalRegExpMatches.map(citationAndLineRef => {
                    const regExpParts = citationAndLineRef.match(regExp)!;
                    const regExpMatches = regExpParts.filter(x => x);
                    const debugData = { citationAndLineRef, bookRef: regExpMatches[regExpMatches.length - 2] };
                    const lineRef = regExpParts[regExpParts.length - 1]; 
                    return {
                        debugData,
                        position: regExpParts.index!,
                        citationRef: {
                            collection,
                            book: { key, value: book },
                            lineRef
                        }
                    }
                });
            }
            return [];
        }

        yield { getCitationRefs, book };
    }
}

const asd = Array.from(getCitationRefFinders({key: "Bible", value: { title: "The Bible" }}, bibleBooks))

console.log(asd.map(x => x.getCitationRefs("asdfd1 acts 15:14; 13-14d1 acts 12:14; 13-14").map(y => y.citationRef)))