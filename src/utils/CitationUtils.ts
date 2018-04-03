export interface Citation {
    ref: CitationRef,
    text: string
}

type CollectionAbbrv =
    "Bible"
    | "S&H"
    | "JSH"
    | "Hymnal"
    | "Man"
    | "PW"

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

type BibleBookAbbrv =
    "Gen"
    | "Ex"
    | "Lev"
    | "Num"
    | "Deu"
    | "Josh"
    | "Jud"
    | "Ruth"
    | "Sam"
    | "Kin"
    | "Is"
    | "Jer"
    | "Ez"
    | "Ps"
    | "Pro"
    | "Job"
    | "Sol"
    | "Lam"
    | "Eccl"
    | "Es"
    | "Dan"
    | "Ez"
    | "Neh"
    | "Chr"
    | "Matt"
    | "Mar"
    | "Lu"
    | "Jo"
    | "Act"
    | "Ro"
    | "Cor"
    | "Gal"
    | "Eph"
    | "Phil"
    | "Col"
    | "Thess"
    | "Tim"
    | "Tit"
    | "Phil"
    | "Heb"
    | "Jam"
    | "Pet"
    | "Jud"
    | "Rev"
    
type BookAbbrv =
    BibleBookAbbrv
    | ProseWorksBookAbbrv
    | "S&H"
    | "Man"
    | "Jou"
    | "Sen"
    | "Her"
    | "Hy"

export const getCollectionName = (collection:CollectionAbbrv):string => {
    switch (collection) {
        case "Bible": return "The Bible";
        case "S&H": return "Science & Health";
        case "JSH": return "JSH Online";
        case "Hymnal": return "The Hymnal";
        case "Man": return "Manual Of The Mother Church";
        case "PW": return "Prose Works";
    }
}

export const getBookName = (book: BookAbbrv):string => {
    switch (book) {
        case "S&H": return "Science & Health";
        case "Man": return "Manual Of The Mother Church";
        case "Jou": return "The Journal";
        case "Sen": return "The Sentinel";
        case "Her": return "The Herald";
        case "Hy": return "The Hymnal";

        case "Mis": return "Miscellaneous Writings";
        case "Ret": return "Retrospection & Introspection";
        case "Un": return "Unity of Good";
        case "Pul": return "Pulpit & Press";
        case "Rud": return "Rudimental Divine Science";
        case "No": return "No & Yes";
        case "Pan": return "Christian Science versus Pantheism";
        case "’00": return "Message To The Mother Church, 1900";
        case "’01": return "Message To The Mother Church, 1901";
        case "’02": return "Message To The Mother Church, 1902";
        case "Hea": return "Christian Healing";
        case "Peo": return "The People's Idea Of God";
        case "My": return "Miscellany";
        case "Po": return "Poems";

        case "Gen": return "Genesis";
        case "Ex": return "Exodus";
        case "Lev": return "Leviticus";
        case "Num": return "Numbers";
        case "Deu": return "Deuteronomy";
        case "Josh": return "Joshua";
        case "Jud": return "Judges";
        case "Ruth": return "Ruth";
        case "Sam": return "Samuel";
        case "Kin": return "Kings";
        case "Is": return "Isaiah";
        case "Jer": return "Jeremiah";
        case "Ez": return "Ezekiel";
        case "Ps": return "Psalms";
        case "Pro": return "Proverbs";
        case "Job": return "Job";
        case "Sol": return "Solomon";
        case "Lam": return "Lamentations";
        case "Eccl": return "Ecclesiastes";
        case "Es": return "Esther";
        case "Dan": return "Daniel";
        case "Ez": return "Ezra";
        case "Neh": return "Nehemiah";
        case "Chr": return "Chronicles";
        case "Matt": return "Matthew";
        case "Mar": return "Mark";
        case "Lu": return "Luke";
        case "Jo": return "John";
        case "Act": return "Acts";
        case "Ro": return "Romans";
        case "Cor": return "Corinthians";
        case "Gal": return "Galatians";
        case "Eph": return "Ephesians";
        case "Phil": return "Philippians";
        case "Col": return "Colossians";
        case "Thess": return "Thessalonians";
        case "Tim": return "Timothy";
        case "Tit": return "Titus";
        case "Phil": return "Philemon";
        case "Heb": return "Hebrews";
        case "Jam": return "James";
        case "Pet": return "Peter";
        case "Jud": return "Jude";
        case "Rev": return "Revelation";
    }
}

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
