export interface Citation {
    ref: CitationRef,
    text: string
}

const collections = {
    "Bible": { title: "The Bible" },
    "S&H": { title: "Science & Health" },
    "JSH": { title: "JSH Online" },
    "Hymnal": { title: "The Hymnal" },
    "Man": { title: "Manual Of The Mother Church" },
    "PW": { title: "Prose Works" },
    "MBE Bios": { title: "Mary Baker Eddy Biographies" },
}
type CollectionAbbrv = keyof typeof collections
    
type ProseWorksBookAbbrv =
    "Mis"
    | "Ret"
    | "Un"
    | "Pul"
    | "Rud"
    | "No"
    | "Pan"
    | "’00"
    | "’01"
    | "’02"
    | "Hea"
    | "Peo"
    | "My"
    | "Po"

const bibleBooks = {
    "Gen": { title: "Genesis" },
    "Ex": { title: "Exodus" },
    "Lev": { title: "Leviticus" },
    "Num": { title: "Numbers" },
    "Deu": { title: "Deuteronomy" },
    "Josh": { title: "Joshua" },
    "Jud": { title: "Judges" },
    "Ruth": { title: "Ruth" },
    "Sam": { title: "Samuel" },
    "Kin": { title: "Kings" },
    "Is": { title: "Isaiah" },
    "Jer": { title: "Jeremiah" },
    "Ez": { title: "Ezekiel" },
    "Ps": { title: "Psalms" },
    "Pro": { title: "Proverbs" },
    "Job": { title: "Job" },
    "Sol": { title: "Solomon" },
    "Lam": { title: "Lamentations" },
    "Eccl": { title: "Ecclesiastes" },
    "Es": { title: "Esther" },
    "Dan": { title: "Daniel" },
    "Ezra": { title: "Ezra" },
    "Neh": { title: "Nehemiah" },
    "Chr": { title: "Chronicles" },
    "Matt": { title: "Matthew" },
    "Mar": { title: "Mark" },
    "Lu": { title: "Luke" },
    "Jo": { title: "John" },
    "Act": { title: "Acts" },
    "Ro": { title: "Romans" },
    "Cor": { title: "Corinthians" },
    "Gal": { title: "Galatians" },
    "Eph": { title: "Ephesians" },
    "Phil": { title: "Philippians" },
    "Col": { title: "Colossians" },
    "Thess": { title: "Thessalonians" },
    "Tim": { title: "Timothy" },
    "Tit": { title: "Titus" },
    "Phile": { title: "Philemon" },
    "Heb": { title: "Hebrews" },
    "Jam": { title: "James" },
    "Pet": { title: "Peter" },
    "Jude": { title: "Jude" },
    "Rev": { title: "Revelation" },
}
type BibleBookAbbrv = keyof typeof bibleBooks
    
type BookAbbrv =
    BibleBookAbbrv
    | ProseWorksBookAbbrv
    | "S&H"
    | "Man"
    | "Jou"
    | "Sen"
    | "Her"
    | "Hy"

const peelBooks = {
    "Peel:YOD": { title: "Mary Baker Eddy: Years of Discovery" },
    "Peel:YOT": { title: "Mary Baker Eddy: Years of Trial" },
    "Peel:YOA": { title: "Mary Baker Eddy: Years of Authority" },
}

function keys<T>(x:T):{keyof T}[]

type PeelBookAbbrv = keyof typeof peelBooks

const PaywalledBooks:BookAbbrv[] = [
    ...Object.keys(peelBooks)
]
const asd = PaywalledBooks

const proseWorkBooks = {
    "Mis": { title: "Miscellaneous Writings" },
    "Ret": { title: "Retrospection & Introspection" },
    "Un": { title: "Unity of Good" },
    "Pul": { title: "Pulpit & Press" },
    "Rud": { title: "Rudimental Divine Science" },
    "No": { title: "No & Yes" },
    "Pan": { title: "Christian Science versus Pantheism" },
    "’00": { title: "Message To The Mother Church, 1900" },
    "’01": { title: "Message To The Mother Church, 1901" },
    "’02": { title: "Message To The Mother Church, 1902" },
    "Hea": { title: "Christian Healing" },
    "Peo": { title: "The People's Idea Of God" },
    "My": { title: "Miscellany" },
    "Po": { title: "Poems" }
}
const books = {
    "S&H": { title: "Science & Health" },
    "Man": { title: "Manual Of The Mother Church" },
    "Jou": { title: "The Journal" },
    "Sen": { title: "The Sentinel" },
    "Her": { title: "The Herald" },
    "Hy": { title: "The Hymnal" },

    ...proseWorkBooks,

    ...bibleBooks,
    
    "WKMBE": { title: "We Knew Mary Baker Eddy" },
};
type BookAbbrv = keyof typeof books

export interface CitationRef {
    collection: CollectionAbbrv
    translation: string
    book: BookAbbrv
    lineRef: string
}

function* choose<A, B>(values:A[], f:(value:A)=>(B|undefined)):IterableIterator<B> {
    for (const value of values) {
        const result = f(value);
        if (result !== undefined) {
            yield result;
        }
    }
}

interface BookRefData {[key:string]: string[]}
const bibleBooks:BookRefData = 
{
    "Genesis": [ ],
    "Exodus": [ "Ex" ],
    "Leviticus": [ ],
    "Numbers": [ ],
    "Deuteronomy": [ "Deut" ],
    "Joshua": [ "Josh" ],
    "Judges": [ "Judg" ],
    "Ruth": [ "Ruth" ],
    "Samuel": [ ],
    "Kings": [ ],
    "Isaiah": [ "Is" ],
    "Jeremiah": [ ],
    "Ezekiel": [ "Ez" ],
    "Psalms": [ "Ps" ],
    "Proverbs": [ ],
    "Job": [ ],
    "Song of Solomon": [ "Sol" ],
    "Lamentations": [ ],
    "Ecclesiastes": [ "Eccl" ],
    "Esther": [ "Es" ],
    "Daniel": [ ],
    "Ezra": [ "Ez" ],
    "Nehemiah": [ ],
    "Chronicles": [ ],
    "Matthew": [ "Matt" ],
    "Mark": [ ],
    "Luke": [ "Lu" ],
    "John": [ "Jo" ],
    "The Acts": [ "Act", "Acts" ],
    "Romans": [ "Rom", "Ro" ],
    "Corinthians": [ ],
    "Galatians": [ ],
    "Ephesians": [ ],
    "Philippians": [],
    "Colossians": [ ],
    "Thessalonians": [ ],
    "Timothy": [ ],
    "Titus": [ ],
    "Philemon": [ "Phil" ],
    "Hebrews": [ ],
    "James": [ ],
    "Peter": [ ],
    "Jude": [ ],
    "Revelation": [ ]
}
const getCitationRefRegExps = (bookRefData:BookRefData): {regEx:RegExp, book:BookAbbrv}[] => {
    for (const asd of Object.keys(bookRefData)) {

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
