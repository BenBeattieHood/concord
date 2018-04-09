import * as ArrayM from './ArrayUtils';

interface KeyValuePair<K, V> {
    key: K
    value: V
}
export interface CitationRef {
    collection: KeyValuePair<CollectionKey, Collection>
    book: KeyValuePair<BookKey, Book>
    translation: string,
    lineRef: string
}
export interface Citation {
    ref: CitationRef,
    text: string
}

export interface Collection { title: string }
export interface Book { title: string, altAbbrs: string[], altTitles: string[], order?: number }
export interface BookRefData {[key:string]: Book}

const bibleBooks:BookRefData = 
{
    "Acts": { title: "The Acts", altAbbrs: [], altTitles: [ "Acts of the Apostles" ], order: 44},
    "Bel & Dr": { title: "Bel and the Dragon", altAbbrs: [], altTitles: [ "Daniel 14 (when considered canonical)" ] },
    "1 Chr": { title: "1 Chronicles", altAbbrs: [ "I Chr", "1 Chron", "I Chron" ], altTitles: [ "the First book of Chronicles" ], order: 13},
    "2 Chr": { title: "2 Chronicles", altAbbrs: [ "II Chr", "2 Chron", "II Chron" ], altTitles: [ "the Second book of Chronicles" ], order: 14},
    "Col": { title: "Colossians", altAbbrs: [ "Coloss" ], altTitles: [ "the Epistle of Paul the Apostle to the Colossians" ], order: 51},
    "1 Cor": { title: "1 Corinthians", altAbbrs: [], altTitles: [ "the First epistle of Paul the Apostle to the Corinthians" ], order: 46},
    "2 Cor": { title: "2 Corinthians", altAbbrs: [], altTitles: [ "the Second epistle of Paul the Apostle to the Corinthians" ], order: 47},
    "Dan": { title: "Daniel", altAbbrs: [], altTitles: [], order: 27},
    "Deut": { title: "Deuteronomy", altAbbrs: [], altTitles: [ "the Fifth book of Moses" ], order: 5},
    "Eccl": { title: "Ecclesiastes", altAbbrs: [ "Ecc", "Eccles" ], altTitles: [ "the Preacher" ], order: 21},
    "Ecclus": { title: "Ecclesiasticus", altAbbrs: [], altTitles: [ "the Wisdom of Jesus son of Sirach, Ben Sira, Sirach" ] },
    "Eph": { title: "Ephesians", altAbbrs: [ "Ephes" ], altTitles: [ "the Epistle of Paul the Apostle to the Ephesians" ], order: 49},
    "1 Esd": { title: "1 Esdras", altAbbrs: [ "I Esd" ], altTitles: [] },
    "2 Esd": { title: "2 Esdras", altAbbrs: [ "II Esd" ], altTitles: [] },
    "3 Esd": { title: "3 Esdras", altAbbrs: [ "III Esd" ], altTitles: [] },
    "4 Esd": { title: "4 Esdras", altAbbrs: [ "IV Esd" ], altTitles: [] },
    "Ex": { title: "Exodus", altAbbrs: [ "Exod" ], altTitles: [ "the Second book of Moses" ], order: 2},
    "Ezek": { title: "Ezekiel", altAbbrs: [], altTitles: [ "the Book of the Prophet Ezekiel" ], order: 26},
    "Gal": { title: "Galatians", altAbbrs: [], altTitles: [ "the Epistle of Paul the Apostle to the Galatians" ], order: 48},
    "Gen": { title: "Genesis", altAbbrs: [], altTitles: [ "the First book of Moses" ], order: 1},
    "Hab": { title: "Habakkuk", altAbbrs: [], altTitles: [], order: 35},
    "Hag": { title: "Haggai", altAbbrs: [], altTitles: [], order: 37},
    "Heb": { title: "Hebrews", altAbbrs: [ "Hebr" ], altTitles: [ "the Epistle of Paul the Apostle to the Hebrews" ], order: 58},
    "Hos": { title: "Hosea", altAbbrs: [], altTitles: [], order: 28},
    "Isa": { title: "Isaiah", altAbbrs: [], altTitles: [ "the Book of the Prophet Isaiah" ], order: 23},
    "Jam": { title: "James", altAbbrs: [ "Jas" ], altTitles: [ "the General epistle of James" ], order: 59},
    "Jer": { title: "Jeremiah", altAbbrs: [], altTitles: [ "the Book of the Prophet Jeremiah" ], order: 24},
    "Josh": { title: "Joshua", altAbbrs: [], altTitles: [], order: 6},
    "Jude": { title: "Jude", altAbbrs: [], altTitles: [], order: 65},
    "Jud": { title: "Judges", altAbbrs: [ "Judg" ], altTitles: [], order: 7},
    "Judi": { title: "Judith", altAbbrs: [], altTitles: [] },
    "1 Kin": { title: "1 Kings", altAbbrs: [ "I Kin", "1 Kgs", "I Kgs" ], altTitles: [ "the First book of the Kings", "the Third book of the Kings (when 1 & 2 Sam. are named 1 & 2 Kgs" ], order: 11},
    "2 Kin": { title: "2 Kings", altAbbrs: [ "II Kin", "2 Kgs", "II Kgs" ], altTitles: [ "the Second book of the Kings", "the Fourth book of the Kings (when 1 & 2 Sam. are named 1 & 2 Kgs" ], order: 12},
    "Lam": { title: "Lamentations", altAbbrs: [ "Lament" ], altTitles: [ "the Lamentations of Jeremiah" ], order: 25},
    "Lev": { title: "Leviticus", altAbbrs: [], altTitles: [ "the Third book of Moses" ], order: 3},
    "1 Macc": { title: "1 Maccabees", altAbbrs: [ "I Macc" ], altTitles: [] },
    "2 Macc": { title: "2 Maccabees", altAbbrs: [ "II Macc" ], altTitles: [] },
    "Mal": { title: "Malachi", altAbbrs: [], altTitles: [], order: 39},
    "Matt": { title: "Matthew", altAbbrs: [], altTitles: [ "the Gospel of St Matthew" ], order: 40},
    "Mic": { title: "Micah", altAbbrs: [], altTitles: [], order: 33},
    "Nah": { title: "Nahum", altAbbrs: [], altTitles: [], order: 34},
    "Neh": { title: "Nehemiah", altAbbrs: [], altTitles: [], order: 16},
    "Num": { title: "Numbers", altAbbrs: [], altTitles: [ "the Fourth book of Moses" ], order: 4},
    "Obad": { title: "Obadiah", altAbbrs: [], altTitles: [], order: 31},
    "1 Pet": { title: "1 Peter", altAbbrs: [ "I Pet" ], altTitles: [ "the First epistle general of Peter" ], order: 60},
    "2 Pet": { title: "2 Peter", altAbbrs: [ "II Pet" ], altTitles: [ "the Second epistle general of Peter" ], order: 61},
    "Philem": { title: "Philemon", altAbbrs: [], altTitles: [ "the Epistle of Paul to Philemon" ], order: 57},
    "Phil": { title: "Philippians", altAbbrs: [ "Philipp" ], altTitles: [ "the Epistle of Paul the Apostle to the Philippians" ], order: 50},
    "Pr. of Man": { title: "Prayer of Manasseh", altAbbrs: [], altTitles: [] },
    "Prov": { title: "Proverbs", altAbbrs: [ "Pro" ], altTitles: [], order: 20},
    "Ps": { title: "Psalms", altAbbrs: [ "Pss" ], altTitles: [], order: 19},
    "Rev": { title: "Revelation", altAbbrs: [], altTitles: [ "the Revelation of St John the Divine" ], order: 66},
    "Rom": { title: "Romans", altAbbrs: [], altTitles: [ "the Epistle of Paul the Apostle to the Romans" ], order: 45},
    "S. of III Ch": { title: "Song of the Three Holy Children", altAbbrs: [], altTitles: [] },
    "1 Sam": { title: "1 Samuel", altAbbrs: [ "I Sam" ], altTitles: [ "the First book of Samuel", "the First book of Kings" ], order: 9},
    "2 Sam": { title: "2 Samuel", altAbbrs: [ "II Sam" ], altTitles: [ "the Second book of Samuel", "the Second book of Kings" ], order: 10},
    "Sol": { title: "Song of Solomon", altAbbrs: [ "S. of Sol", "Song", "Song of Sol", "Song Sol", "Cant" ], altTitles: ["Song of Solomon", "Canticles", "Canticle of Canticles", "Song of Songs" ], order: 22},
    "Sus": { title: "Susanna", altAbbrs: [], altTitles: [ "Daniel 13 (when considered canonical)" ] },
    "1 Thess": { title: "1 Thessalonians", altAbbrs: [ "I Thess" ], altTitles: [ "the First epistle of Paul the Apostle to the Thessalonians" ], order: 52},
    "2 Thess": { title: "2 Thessalonians", altAbbrs: [ "II Thess" ], altTitles: [ "the Second epistle of Paul the Apostle to the Thessalonians" ], order: 53},
    "1 Tim": { title: "1 Timothy", altAbbrs: [ "I Tim" ], altTitles: [ "the First epistle of Paul the Apostle to the Timothy" ], order: 54},
    "2 Tim": { title: "2 Timothy", altAbbrs: [ "II Tim" ], altTitles: [ "the Second epistle of Paul the Apostle to the Timothy" ], order: 55},
    "Tit": { title: "Titus", altAbbrs: [], altTitles: [ "the Epistle of Paul to Titus" ], order: 56},
    "Wisd": { title: "Wisdom of Solomon", altAbbrs: [], altTitles: [ "Wisdom" ] },
    "Zech": { title: "Zechariah", altAbbrs: [], altTitles: [], order: 38},
    "Zeph": { title: "Zephaniah", altAbbrs: [], altTitles: [], order: 36},
}
type BibleBookKey = keyof typeof bibleBooks
    
const peelBooks:BookRefData = {
    "Peel:YOD": { title: "Mary Baker Eddy: Years of Discovery", altAbbrs: [], altTitles: [], order: 1 },
    "Peel:YOT": { title: "Mary Baker Eddy: Years of Trial", altAbbrs: [], altTitles: [], order: 2 },
    "Peel:YOA": { title: "Mary Baker Eddy: Years of Authority", altAbbrs: [], altTitles: [], order: 3 },
}
type PeelBookKey = keyof typeof peelBooks

const proseWorkBooks:BookRefData = {
    "Mis": { title: "Miscellaneous Writings", altAbbrs: [], altTitles: [], order: 1 },
    "Ret": { title: "Retrospection & Introspection", altAbbrs: [], altTitles: [], order: 2 },
    "Un": { title: "Unity of Good", altAbbrs: [], altTitles: [], order: 3 },
    "Pul": { title: "Pulpit & Press", altAbbrs: [], altTitles: [], order: 4 },
    "Rud": { title: "Rudimental Divine Science", altAbbrs: [], altTitles: [], order: 5 },
    "No": { title: "No & Yes", altAbbrs: [], altTitles: [], order: 6 },
    "Pan": { title: "Christian Science vs Pantheism", altAbbrs: [], altTitles: [ "Christian Science versus Pantheism" ], order: 7 },
    "’00": { title: "Message 1900", altAbbrs: [], altTitles: [ "Message To The Mother Church, 1900" ], order: 8 },
    "’01": { title: "Message 1901", altAbbrs: [], altTitles: [ "Message To The Mother Church, 1901" ], order: 9 },
    "’02": { title: "Message 1902", altAbbrs: [], altTitles: [ "Message To The Mother Church, 1902" ], order: 10 },
    "Hea": { title: "Christian Healing", altAbbrs: [], altTitles: [], order: 11 },
    "Peo": { title: "The People's Idea Of God", altAbbrs: [], altTitles: [], order: 12 },
    "My": { title: "Miscellany", altAbbrs: [], altTitles: [ "The First Church of Christ, Scientist, and Miscellany" ], order: 13 },
    "Po": { title: "Poems", altAbbrs: [], altTitles: [], order: 14 },
}
type ProseWorksBookKey = keyof typeof proseWorkBooks

const bioBooks:BookRefData = {
    "WKMBE": { title: "We Knew Mary Baker Eddy", altAbbrs: [], altTitles: [] },
    "MBEChrH": { title: "Mary Baker Eddy: Christian Healer", altAbbrs: [], altTitles: [] }
}
type BioBookKey = keyof typeof bioBooks

const jshBooks:BookRefData = {
    "Jou": { title: "The Journal", altAbbrs: [], altTitles: [ "The Christian Science Journal" ] },
    "Sen": { title: "The Sentinel", altAbbrs: [], altTitles: [ "The Christian Science Sentinel" ] },
    "Her": { title: "The Herald", altAbbrs: [], altTitles: [ "The Christian Science Herald" ] },
}
type JshBookKey = keyof typeof jshBooks

const uncollectedBooks:BookRefData = {
    "S&H": { title: "Science and Health", altAbbrs: [ "S and H" ], altTitles: [ "Science and Health with Key to the Scriptures" ] },
    "Man": { title: "Manual Of The Mother Church", altAbbrs: [], altTitles: [] },
    "Chr": { title: "Christ & Christmas", altAbbrs: [], altTitles: [] },
    "Hy": { title: "The Hymnal", altAbbrs: [], altTitles: [ "The Christian Science Hymnal" ] },
}

const books = {

    ...uncollectedBooks,

    ...proseWorkBooks,

    ...peelBooks,

    ...bioBooks,

    ...jshBooks,

    ...bibleBooks,
    
};
export type BookKey = keyof typeof books

export const paywalledBooks = [
    ...Object.keys(peelBooks)
].map(s => s as BookKey)

interface CitationRefFinder {
    (s:string):{position: number, citationRef: CitationRef, debugData: {citationAndLineRef:string, bookRef:string}}[]
}
function* getCitationRefFinders(args:{
    collectionKey: CollectionKey, 
    defaultTranslation: string, 
    altTranslations: string[], 
    bookRefData:BookRefData
}): IterableIterator<{getCitationRefs:CitationRefFinder, book:Book}> {
    const availableTranslationsSet = new Set([args.defaultTranslation, ...args.altTranslations].map(x => x.toUpperCase()));
    const availableTranslations = Array.from(availableTranslationsSet);
    const collection = { key: args.collectionKey, value: collections[args.collectionKey] };
    for (const key of Object.keys(args.bookRefData)) {
        const book = args.bookRefData[key];

        const identifiers = [key, book.title, ...book.altAbbrs]
        const identifierRegExpStr = identifiers.map(identifier => {
            const bookNumberMatches = identifier.match(/^[1-9]+? /g);
            const regExpPrefix = 
                bookNumberMatches
                ? `[^0-9I]`
                : `[^a-zA-Z]`;

            return `(^|${regExpPrefix}|([^0-9]${availableTranslations.join(`)|([^0-9]`)}))(${identifier})`;
        }).join(`)|(`)

        const citationMatchRegExpStr = `((${identifierRegExpStr}))\\s*([0-9;\\-\\s:]*)`
        const globalRegExp = new RegExp(citationMatchRegExpStr, "ig")
        const regExp = new RegExp(citationMatchRegExpStr, "i");
        
        const getCitationRefs:CitationRefFinder = s => {
            const globalRegExpMatches = s.match(globalRegExp);
            if (globalRegExpMatches) {
                return globalRegExpMatches.map(citationAndLineRef => {
                    const regExpParts = citationAndLineRef.match(regExp)!;
                    const regExpMatches = regExpParts.filter(x => x);   // strip 'undefined's
                    const translations = regExpMatches.filter(x => availableTranslationsSet.has(x.toUpperCase())); // find any possible translations
                    const debugData = { citationAndLineRef, bookRef: regExpMatches[regExpMatches.length - 2] };
                    const lineRef = regExpParts[regExpParts.length - 1]; 
                    return {
                        debugData,
                        position: regExpParts.index!,
                        citationRef: {
                            collection,
                            book: { key: key as BookKey, value: book },
                            translation: translations && translations.length === 1 ? translations[0] : args.defaultTranslation,
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
const bibleCitationRefFinders = getCitationRefFinders({
    collectionKey: "Bible", 
    defaultTranslation: "KJV",
    altTranslations: [ "AMP", "CEV", "MSG", "YLT" ],
    bookRefData: bibleBooks
});
const proseWorkCitationRefFinders = getCitationRefFinders({
    collectionKey: "PW", 
    defaultTranslation: "ENG",
    altTranslations: [ "FR" ],
    bookRefData: proseWorkBooks
});
const jshBookCitationRefFinders = getCitationRefFinders({
    collectionKey: "JSH", 
    defaultTranslation: "ENG",
    altTranslations: [ ],
    bookRefData: jshBooks
});
const uncollectedCitationRefFinders = getCitationRefFinders({
    collectionKey: "Uncollected", 
    defaultTranslation: "ENG",
    altTranslations: [ ],
    bookRefData: { ...uncollectedBooks, ...jshBooks }
});


const collections:{ [key:string]: Collection } = {
    "Bible": { 
        title: "The Bible", 
        defaultTranslation: "KJV",
        altTranslations: [ "AMP", "CEV", "MSG", "YLT" ],
        bookRefData: bibleBooks
    },
    "JSH": { 
        title: "JSH Online",
        defaultTranslation: "ENG",
        altTranslations: [ ],
        bookRefData: jshBooks
    },
    "Hymnal": { title: "The Hymnal" },
    "Man": { title: "Manual Of The Mother Church" },
    "PW": { 
        title: "Prose Works", 
        defaultTranslation: "ENG",
        altTranslations: [ "FR" ],
        bookRefData: proseWorkBooks
    },
    "MBE Bios": { title: "Mary Baker Eddy Biographies" },
    "Uncollected": { 
        title: "",
        defaultTranslation: "ENG",
        altTranslations: [ ],
        bookRefData: uncollectedBooks
    }
}
export type CollectionKey = keyof typeof collections
const UncollectedCollectionKey:CollectionKey = "Uncollected"


const bookCitationRefFinders = [
    ...Array.from(bibleCitationRefFinders),
    ...Array.from(proseWorkCitationRefFinders),
    ...Array.from(jshBookCitationRefFinders),
    ...Array.from(uncollectedCitationRefFinders)
]
export type GetCitationRefsResult = { position: number, citationRef: CitationRef }[]
export const getCitationRefs = (s: string):GetCitationRefsResult => 
    ArrayM.flatten(Array.from(ArrayM.choose(bookCitationRefFinders, x => x.getCitationRefs(s))));