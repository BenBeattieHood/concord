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

const collections = {
    "Bible": { title: "The Bible" },
    "S&H": { title: "Science & Health" },
    "JSH": { title: "JSH Online" },
    "Hymnal": { title: "The Hymnal" },
    "Man": { title: "Manual Of The Mother Church" },
    "PW": { title: "Prose Works" },
    "MBE Bios": { title: "Mary Baker Eddy Biographies" },
}
type CollectionKey = keyof typeof collections
    

const bibleBooks:BookRefData = 
{
    "Acts": { title: "The Acts", altAbbrs: [], altTitles: [ "Acts of the Apostles" ] },
    "Bel & Dr": { title: "Bel and the Dragon", altAbbrs: [], altTitles: [ "Daniel 14 (when considered canonical)" ] },
    "1 Chr": { title: "1 Chronicles", altAbbrs: [ "I Chr", "1 Chron", "I Chron" ], altTitles: [ "the First book of Chronicles" ] },
    "2 Chr": { title: "2 Chronicles", altAbbrs: [ "II Chr", "2 Chron", "II Chron" ], altTitles: [ "the Second book of Chronicles" ] },
    "Col": { title: "Colossians", altAbbrs: [ "Coloss" ], altTitles: [ "the Epistle of Paul the Apostle to the Colossians" ] },
    "1 Cor": { title: "1 Corinthians", altAbbrs: [], altTitles: [ "the First epistle of Paul the Apostle to the Corinthians" ] },
    "2 Cor": { title: "2 Corinthians", altAbbrs: [], altTitles: [ "the Second epistle of Paul the Apostle to the Corinthians" ] },
    "Dan": { title: "Daniel", altAbbrs: [], altTitles: [] },
    "Deut": { title: "Deuteronomy", altAbbrs: [], altTitles: [ "the Fifth book of Moses" ] },
    "Eccl": { title: "Ecclesiastes", altAbbrs: [ "Ecc", "Eccles" ], altTitles: [ "the Preacher" ] },
    "Ecclus": { title: "Ecclesiasticus", altAbbrs: [], altTitles: [ "the Wisdom of Jesus son of Sirach, Ben Sira, Sirach" ] },
    "Eph": { title: "Ephesians", altAbbrs: [ "Ephes" ], altTitles: [ "the Epistle of Paul the Apostle to the Ephesians" ] },
    "Esd": { title: "Esdras", altAbbrs: [], altTitles: [] },
    "1 Esd": { title: "1 Esdras", altAbbrs: [ "I Esd" ], altTitles: [] },
    "2 Esd": { title: "2 Esdras", altAbbrs: [ "II Esd" ], altTitles: [] },
    "3 Esd": { title: "3 Esdras", altAbbrs: [ "III Esd" ], altTitles: [] },
    "4 Esd": { title: "4 Esdras", altAbbrs: [ "IV Esd" ], altTitles: [] },
    "Exod": { title: "Exodus", altAbbrs: [], altTitles: [ "the Second book of Moses" ] },
    "Ezek": { title: "Ezekiel", altAbbrs: [], altTitles: [ "the Book of the Prophet Ezekiel" ] },
    "Gal": { title: "Galatians", altAbbrs: [], altTitles: [ "the Epistle of Paul the Apostle to the Galatians" ] },
    "Gen": { title: "Genesis", altAbbrs: [], altTitles: [ "the First book of Moses" ] },
    "Hab": { title: "Habakkuk", altAbbrs: [], altTitles: [] },
    "Hag": { title: "Haggai", altAbbrs: [], altTitles: [] },
    "Heb": { title: "Hebrews", altAbbrs: [ "Hebr" ], altTitles: [ "the Epistle of Paul the Apostle to the Hebrews" ] },
    "Hos": { title: "Hosea", altAbbrs: [], altTitles: [] },
    "Isa": { title: "Isaiah", altAbbrs: [], altTitles: [ "the Book of the Prophet Isaiah" ] },
    "Jam": { title: "James", altAbbrs: [ "Jas" ], altTitles: [ "the General epistle of James" ] },
    "Jer": { title: "Jeremiah", altAbbrs: [], altTitles: [ "the Book of the Prophet Jeremiah" ] },
    "Josh": { title: "Joshua", altAbbrs: [], altTitles: [] },
    "Jude": { title: "Jude", altAbbrs: [], altTitles: [] },
    "Jud": { title: "Judges", altAbbrs: [ "Judg" ], altTitles: [] },
    "Judi": { title: "Judith", altAbbrs: [], altTitles: [] },
    "1 Kin": { title: "1 Kings", altAbbrs: [ "I Kin", "1 Kgs", "I Kgs" ], altTitles: [ "the First book of the Kings", "the Third book of the Kings (when 1 & 2 Sam. are named 1 & 2 Kgs" ] },
    "2 Kin": { title: "2 Kings", altAbbrs: [ "II Kin", "2 Kgs", "II Kgs" ], altTitles: [ "the Second book of the Kings", "the Fourth book of the Kings (when 1 & 2 Sam. are named 1 & 2 Kgs" ] },
    "Lam": { title: "Lamentations", altAbbrs: [ "Lament" ], altTitles: [ "the Lamentations of Jeremiah" ] },
    "Lev": { title: "Leviticus", altAbbrs: [], altTitles: [ "the Third book of Moses" ] },
    "1 Macc": { title: "1 Maccabees", altAbbrs: [ "I Macc" ], altTitles: [] },
    "2 Macc": { title: "2 Maccabees", altAbbrs: [ "II Macc" ], altTitles: [] },
    "Mal": { title: "Malachi", altAbbrs: [], altTitles: [] },
    "Matt": { title: "Matthew", altAbbrs: [], altTitles: [ "the Gospel of St Matthew" ] },
    "Mic": { title: "Micah", altAbbrs: [], altTitles: [] },
    "Nah": { title: "Nahum", altAbbrs: [], altTitles: [] },
    "Neh": { title: "Nehemiah", altAbbrs: [], altTitles: [] },
    "Num": { title: "Numbers", altAbbrs: [], altTitles: [ "the Fourth book of Moses" ] },
    "Obad": { title: "Obadiah", altAbbrs: [], altTitles: [] },
    "1 Pet": { title: "1 Peter", altAbbrs: [ "I Pet" ], altTitles: [ "the First epistle general of Peter" ] },
    "2 Pet": { title: "2 Peter", altAbbrs: [ "II Pet" ], altTitles: [ "the Second epistle general of Peter" ] },
    "Philem": { title: "Philemon", altAbbrs: [], altTitles: [ "the Epistle of Paul to Philemon" ] },
    "Phil": { title: "Philippians", altAbbrs: [ "Philipp" ], altTitles: [ "the Epistle of Paul the Apostle to the Philippians" ] },
    "Pr. of Man": { title: "Prayer of Manasseh", altAbbrs: [], altTitles: [] },
    "Prov": { title: "Proverbs", altAbbrs: [ "Pro" ], altTitles: [] },
    "Ps": { title: "Psalms", altAbbrs: [ "Pss" ], altTitles: [] },
    "Rev": { title: "Revelation", altAbbrs: [], altTitles: [ "the Revelation of St John the Divine" ] },
    "Rom": { title: "Romans", altAbbrs: [], altTitles: [ "the Epistle of Paul the Apostle to the Romans" ] },
    "S. of III Ch": { title: "Song of the Three Holy Children", altAbbrs: [], altTitles: [] },
    "Sam": { title: "Samuel", altAbbrs: [], altTitles: [] },
    "1 Sam": { title: "1 Samuel", altAbbrs: [ "I Sam" ], altTitles: [ "the First book of Samuel", "the First book of Kings" ] },
    "2 Sam": { title: "2 Samuel", altAbbrs: [ "II Sam" ], altTitles: [ "the Second book of Samuel", "the Second book of Kings" ] },
    "Sol": { title: "Song of Solomon", altAbbrs: [ "S. of Sol", "Song", "Song of Sol", "Song Sol", "Cant" ], altTitles: ["Song of Solomon", "Canticles", "Canticle of Canticles", "Song of Songs" ] },
    "Sus": { title: "Susanna", altAbbrs: [], altTitles: [ "Daniel 13 (when considered canonical)" ] },
    "1 Thess": { title: "1 Thessalonians", altAbbrs: [ "I Thess" ], altTitles: [ "the First epistle of Paul the Apostle to the Thessalonians" ] },
    "2 Thess": { title: "2 Thessalonians", altAbbrs: [ "II Thess" ], altTitles: [ "the Second epistle of Paul the Apostle to the Thessalonians" ] },
    "1 Tim": { title: "1 Timothy", altAbbrs: [ "I Tim" ], altTitles: [ "the First epistle of Paul the Apostle to the Timothy" ] },
    "2 Tim": { title: "2 Timothy", altAbbrs: [ "II Tim" ], altTitles: [ "the Second epistle of Paul the Apostle to the Timothy" ] },
    "Tit": { title: "Titus", altAbbrs: [], altTitles: [ "the Epistle of Paul to Titus" ] },
    "Wisd": { title: "Wisdom of Solomon", altAbbrs: [], altTitles: [ "Wisdom" ] },
    "Zech": { title: "Zechariah", altAbbrs: [], altTitles: [] },
    "Zeph": { title: "Zephaniah", altAbbrs: [], altTitles: [] },
}
type BibleBookKey = keyof typeof bibleBooks
    
const peelBooks = {
    "Peel:YOD": { title: "Mary Baker Eddy: Years of Discovery", altAbbrs: [], altTitles: [] },
    "Peel:YOT": { title: "Mary Baker Eddy: Years of Trial", altAbbrs: [], altTitles: [] },
    "Peel:YOA": { title: "Mary Baker Eddy: Years of Authority", altAbbrs: [], altTitles: [] },
}
type PeelBookKey = keyof typeof peelBooks

const proseWorkBooks = {
    "Mis": { title: "Miscellaneous Writings", altAbbrs: [], altTitles: [] },
    "Ret": { title: "Retrospection & Introspection", altAbbrs: [], altTitles: [] },
    "Un": { title: "Unity of Good", altAbbrs: [], altTitles: [] },
    "Pul": { title: "Pulpit & Press", altAbbrs: [], altTitles: [] },
    "Rud": { title: "Rudimental Divine Science", altAbbrs: [], altTitles: [] },
    "No": { title: "No & Yes", altAbbrs: [], altTitles: [] },
    "Pan": { title: "Christian Science vs Pantheism", altAbbrs: [], altTitles: [ "Christian Science versus Pantheism" ] },
    "’00": { title: "Message 1900", altAbbrs: [], altTitles: [ "Message To The Mother Church, 1900" ] },
    "’01": { title: "Message 1901", altAbbrs: [], altTitles: [ "Message To The Mother Church, 1901" ] },
    "’02": { title: "Message 1902", altAbbrs: [], altTitles: [ "Message To The Mother Church, 1902" ] },
    "Hea": { title: "Christian Healing", altAbbrs: [], altTitles: [] },
    "Peo": { title: "The People's Idea Of God", altAbbrs: [], altTitles: [] },
    "My": { title: "Miscellany", altAbbrs: [], altTitles: [ "The First Church of Christ, Scientist, and Miscellany" ] },
    "Po": { title: "Poems", altAbbrs: [], altTitles: [] },
}
type ProseWorksBookKey = keyof typeof proseWorkBooks

const books = {
    "S&H": { title: "Science and Health", altAbbrs: [ "S and H" ], altTitles: [ "Science and Health with Key to the Scriptures" ] },
    "Man": { title: "Manual Of The Mother Church" },
    "Jou": { title: "The Journal", altAbbrs: [], altTitles: [ "The Christian Science Journal" ] },
    "Sen": { title: "The Sentinel", altAbbrs: [], altTitles: [ "The Christian Science Sentinel" ] },
    "Her": { title: "The Herald", altAbbrs: [], altTitles: [ "The Christian Science Herald" ] },
    "Chr": { title: "Christ & Christmas", altAbbrs: [], altTitles: [] },
    "Hy": { title: "The Hymnal", altAbbrs: [], altTitles: [ "The Christian Science Hymnal" ] },

    ...proseWorkBooks,

    ...peelBooks,

    ...bibleBooks,
    
    "WKMBE": { title: "We Knew Mary Baker Eddy", altAbbrs: [], altTitles: [] },
};
type BookKey = keyof typeof books

const paywalledBooks = [
    ...Object.keys(peelBooks)
].map(s => s as BookKey)



function* choose<A, B>(values:A[], f:(value:A)=>(B|undefined)):IterableIterator<B> {
    for (const value of values) {
        const result = f(value);
        if (result !== undefined) {
            yield result;
        }
    }
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
                            book: { key: key as BookKey, value: book },
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
const bibleBookRegexes = getCitationRefRegExps(bibleBooks);

export const getCitationRefs = (input:string, short:boolean):CitationRef[] => {
    const citations = input.match(/([0-9]*[ \t]*((Gen(esis)?)|(Ex(odus)?)|(Lev(iticus)?)|(Num(bers)?)|(Deu(t(eronomy)?)?)|(Josh(ua)?)|(Jud(ges)?)|(Ruth)|(Sam(uel)?)|(Kings)|(Is(aiah)?)|(Jer(emiah)?)|(Ez(ekiel)?)|(Ps(alms)?)|(Pro(verbs)?)|(Job)|(Sol(omon)?)|(Lam(entations)?)|(Eccl(esiastes)?)|(Es(ther)?)|(Dan(iel)?)|(Ez(ra)?)|(Neh(emiah)?)|(Chr(on(icles)?)?)|(Matt(hew)?)|(Mar(k)?)|Lu(ke)?|(Jo(hn)?)|(Act(s)?)|(Ro(mans)?)|(Cor(inthians)?)|(Gal(atians)?)|(Eph(esians)?)|(Phil(ippians)?)|(Col(ossians)?)|(Thess(alonians)?)|(Tim(othy)?)|(Tit(us)?)|(Phil(emon)?)|(Heb(rews)?)|(Jam(es)?)|(Pet(er)?)|(Jud(e)?)|(Rev(elation)?)|(S&?H)|(Sci(ence (and|&) Health)))[ \t]*([0-9\:\- \t,;]*))\b/gi);
    return citations == null ? [] : Array.from(choose(citations, citation => normalizeCitationRef(citation.trim(), short)));
}

export const normalizeCitationRef = (s:string, short:boolean):CitationRef | undefined => {
    const [ book ] = s.match(/([0-9]*[ \t]*((Gen(esis)?)|(Ex(odus)?)|(Lev(iticus)?)|(Num(bers)?)|(Deu(t(eronomy)?)?)|(Josh(ua)?)|(Jud(ges)?)|(Ruth)|(Sam(uel)?)|(Kings)|(Is(aiah)?)|(Jer(emiah)?)|(Ez(ekiel)?)|(Ps(alms)?)|(Pro(verbs)?)|(Job)|(Sol(omon)?)|(Lam(entations)?)|(Eccl(esiastes)?)|(Es(ther)?)|(Dan(iel)?)|(Ez(ra)?)|(Neh(emiah)?)|(Chr(on(icles)?)?)|(Matt(hew)?)|(Mar(k)?)|Lu(ke)?|(Jo(hn)?)|(Act(s)?)|(Ro(mans)?)|(Cor(inthians)?)|(Gal(atians)?)|(Eph(esians)?)|(Phil(ippians)?)|(Col(ossians)?)|(Thess(alonians)?)|(Tim(othy)?)|(Tit(us)?)|(Phil(emon)?)|(Heb(rews)?)|(Jam(es)?)|(Pet(er)?)|(Jud(e)?)|(Rev(elation)?)|(S&?H)|(Sci(ence (and|&) Health))))/gi) || [ undefined ];
    if (book) {
        const citationWithoutBook = s.substr(s.indexOf(book)).replace(book, "");
        const [ lineRef ] = citationWithoutBook.match(/\b([0-9\:\- \t,;]*)\b/gi) || [ undefined ];
        if (lineRef) {
            const bibleBooks =
            (
                short
                ? ["Gen", "Ex", "Lev", "Num", "Deu", "Josh", "Jud", "Ruth", "Sam", "Kin", "Is", "Jer", "Ez", "Ps", "Pro", "Job", "Sol", "Lam", "Eccl", "Es", "Dan", "Ez", "Neh", "Chr", "Matt", "Mar", "Lu", "Jo", "Act", "Ro", "Cor", "Gal", "Eph", "Phil", "Col", "Thess", "Tim", "Tit", "Phil", "Heb", "Jam", "Pet", "Jud", "Rev"]
                : ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth", "Samuel", "Kings", "Isaiah", "Jeremiah", "Ezekiel", "Psalms", "Proverbs", "Job", "Solomon", "Lamentations", "Ecclesiastes", "Esther", "Daniel", "Ezra", "Nehemiah", "Chronicles", "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", "Thessalonians", "Timothy", "Titus", "Philemon", "Hebrews", "James", "Peter", "Jude", "Revelation"]
            );

            const normalizedBook = 
                [["Gen", "Ex", "Lev", "Num", "Deu", "Josh", "Jud", "Ruth", "Sam", "Kin", "Is", "Jer", "Ez", "Ps", "Pro", "Job", "Sol", "Lam", "Eccl", "Es", "Dan", "Ez", "Neh", "Chr", "Matt", "Mar", "Lu", "Jo", "Act", "Ro", "Cor", "Gal", "Eph", "Phil", "Col", "Thess", "Tim", "Tit", "Phil", "Heb", "Jam", "Pet", "Jud", "Rev", "SH", "S&H", "Sci"].findIndex(value => book.toLowerCase().includes(value.toLowerCase()))]


            return {collection: (normalizedBook == "S&H" || normalizedBook === "Science and Health") ? "Science and Health" : "Bible", book: normalizedBook, lineRef: lineRef.replace(/[\t ]/g, "")};
        }
    }
    return undefined;
}
