export const getCitations = (input:string, short:boolean):string[] => {
    const citations = input.match(/([0-9]*[ \t]*((Gen(esis)?)|(Ex(odus)?)|(Lev(iticus)?)|(Num(bers)?)|(Deu(t(eronomy)?)?)|(Josh(ua)?)|(Jud(ges)?)|(Ruth)|(Sam(uel)?)|(Kings)|(Is(aiah)?)|(Jer(emiah)?)|(Ez(ekiel)?)|(Ps(alms)?)|(Pro(verbs)?)|(Job)|(Sol(omon)?)|(Lam(entations)?)|(Eccl(esiastes)?)|(Es(ther)?)|(Dan(iel)?)|(Ez(ra)?)|(Neh(emiah)?)|(Chr(on(icles)?)?)|(Matt(hew)?)|(Mar(k)?)|Lu(ke)?|(Jo(hn)?)|(Act(s)?)|(Ro(mans)?)|(Cor(inthians)?)|(Gal(atians)?)|(Eph(esians)?)|(Phil(ippians)?)|(Col(ossians)?)|(Thess(alonians)?)|(Tim(othy)?)|(Tit(us)?)|(Phil(emon)?)|(Heb(rews)?)|(Jam(es)?)|(Pet(er)?)|(Jud(e)?)|(Rev(elation)?))[ \t]*([0-9\:\- \t]*))\b/gi);
    return citations == null ? [] : citations.map(citation => normalizeCitation(citation.trim(), short) || "").filter(x => x !== "");
}

export const normalizeCitation = (citation:string, short:boolean):string | undefined => {
    const [ book ] = citation.match(/([0-9]*[ \t]*((Gen(esis)?)|(Ex(odus)?)|(Lev(iticus)?)|(Num(bers)?)|(Deu(t(eronomy)?)?)|(Josh(ua)?)|(Jud(ges)?)|(Ruth)|(Sam(uel)?)|(Kings)|(Is(aiah)?)|(Jer(emiah)?)|(Ez(ekiel)?)|(Ps(alms)?)|(Pro(verbs)?)|(Job)|(Sol(omon)?)|(Lam(entations)?)|(Eccl(esiastes)?)|(Es(ther)?)|(Dan(iel)?)|(Ez(ra)?)|(Neh(emiah)?)|(Chr(on(icles)?)?)|(Matt(hew)?)|(Mar(k)?)|Lu(ke)?|(Jo(hn)?)|(Act(s)?)|(Ro(mans)?)|(Cor(inthians)?)|(Gal(atians)?)|(Eph(esians)?)|(Phil(ippians)?)|(Col(ossians)?)|(Thess(alonians)?)|(Tim(othy)?)|(Tit(us)?)|(Phil(emon)?)|(Heb(rews)?)|(Jam(es)?)|(Pet(er)?)|(Jud(e)?)|(Rev(elation)?)))/gi) || [ undefined ];
    if (book) {
        const citationWithoutBook = citation.substr(citation.indexOf(book)).replace(book, "");
        const [ lineRef ] = citationWithoutBook.match(/\b([0-9\:\- \t]*)\b/gi) || [ undefined ];
        if (lineRef) {
            const normalizedBook = 
                (
                    short
                    ? ["Gen", "Ex", "Lev", "Num", "Deu", "Josh", "Jud", "Ruth", "Sam", "Kin", "Is", "Jer", "Ez", "Ps", "Pro", "Job", "Sol", "Lam", "Eccl", "Es", "Dan", "Ez", "Neh", "Chr", "Matt", "Mar", "Lu", "Jo", "Act", "Ro", "Cor", "Gal", "Eph", "Phil", "Col", "Thess", "Tim", "Tit", "Phil", "Heb", "Jam", "Pet", "Jud", "Rev"]
                    : ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth", "Samuel", "Kings", "Isaiah", "Jeremiah", "Ezekiel", "Psalms", "Proverbs", "Job", "Solomon", "Lamentations", "Ecclesiastes", "Esther", "Daniel", "Ezra", "Nehemiah", "Chronicles", "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", "Thessalonians", "Timothy", "Titus", "Philemon", "Hebrews", "James", "Peter", "Jude", "Revelation"]
                )
                [["Gen", "Ex", "Lev", "Num", "Deu", "Josh", "Jud", "Ruth", "Sam", "Kin", "Is", "Jer", "Ez", "Ps", "Pro", "Job", "Sol", "Lam", "Eccl", "Es", "Dan", "Ez", "Neh", "Chr", "Matt", "Mar", "Lu", "Jo", "Act", "Ro", "Cor", "Gal", "Eph", "Phil", "Col", "Thess", "Tim", "Tit", "Phil", "Heb", "Jam", "Pet", "Jud", "Rev"].findIndex(value => book.toLowerCase().includes(value.toLowerCase()))]

            return `${normalizedBook} ${lineRef.trim()}`;
        }
    }
    return undefined;
}
