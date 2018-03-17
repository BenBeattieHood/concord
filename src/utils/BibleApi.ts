import { Citation } from './CitationUtils';

function fetchJson<TResult>(args:{uri:string, method?:string, headers?:[string,string][], body?:string}) {
    return (
        fetch(args.uri, {
            method: args.method || "get",
            headers: args.headers,
            body: args.body
        })
        .then(x => x.json())
        .then((x:string) => JSON.parse(x) as TResult)
    );
}

function fetchBibleOrgJson<TResult>(args:{uri:string, method?:string}) {
    return fetchJson<BibleOrgApiResponse<TResult>>({
        uri: args.uri,
        method: args.method,
        headers: [
            ["Authorization", `Basic ${btoa(`#${BibleOrgApiKey}:X`)}`]
        ]
    })
    .then(response => response.response)
}

interface BibleResourceLocation {
    id: string//eng-KJVA:1Cor.2.6, 
    name: string//1 Corinthians 2:6, 
    path: string///verses/eng-KJVA:1Cor.2.6
}
interface BibleOrgApiVerse {
    auditid: number//0, 
    copyright: string//<p>King James Version 1611, spelling, punctuation and text formatting modernized by ABS in 1962; typesetting \u00a9 2010 American Bible Society.</p>, 
    crossreferences: any[], 
    footnotes: any[], 
    id: string//eng-KJVA:1Cor.2.5, 
    label: string//, 
    lastverse: number//5, 
    next: {
        verse: BibleResourceLocation
    }, 
    osis_end: string//eng-KJVA:1Cor.2.5, 
    parent: {
        chapter: BibleResourceLocation
    }, 
    previous: {
        verse: BibleResourceLocation
    }, 
    reference: string//1 Corinthians 2:5, 
    text: string//<p class=\p\><sup id=\1Cor.2.5\ class=\v\>5</sup>that your faith should not stand in the wisdom of men, but in the power of God.</p>, 
    verse: number//5
}

const parseVerseText = (s:string):Citation => {
    const el = document.createElement("div");
    el.innerHTML = s;
    const node = el.firstChild!;
    
    const ref = (node.firstChild! as Element).getAttribute("id");
    if (!ref) {
        throw new Error("Cannot load ref node");
    }
    
    const text = node.lastChild! as any as string;
    if (!text) {
        throw new Error("Cannot load text node");
    }

    return {
        ref,
        text
    };
}

interface BibleOrgApiResponse<T> {
    response: T
}

interface BibleOrgApiMetaData {
    fums: string//"<script>\nvar _BAPI=_BAPI||{};\nif(typeof(_BAPI.t)==='undefined'){\ndocument.write('\\x3Cscript src=\"'+document.location.protocol+'//d2ue49q0mum86x.cloudfront.net/include/fums.c.js\"\\x3E\\x3C/script\\x3E');}\ndocument.write(\"\\x3Cscript\\x3E_BAPI.t('51b22336729250.73475680');\\x3C/script\\x3E\");\n</script><noscript><img src=\"https://d3a2okcloueqyx.cloudfront.net/nf1?t=51b22336729250.73475680\" height=\"1\" width=\"1\" border=\"0\" alt=\"\" style=\"height: 0; width: 0;\" /></noscript>", 
    fums_js: string//"var _BAPI=_BAPI||{};if(typeof(_BAPI.t)!='undefined'){ _BAPI.t('51b22336729250.73475680'); }", 
    fums_js_include: string//"d2ue49q0mum86x.cloudfront.net/include/fums.c.js", 
    fums_noscript: string//"<img src=\"https://d3a2okcloueqyx.cloudfront.net/nf1?t=51b22336729250.73475680\" height=\"1\" width=\"1\" border=\"0\" alt=\"\" style=\"height: 0; width: 0;\" />", 
    fums_tid: string//"51b22336729250.73475680"
}

interface GetVersesApiResponse {
    meta: BibleOrgApiMetaData,
    verses: BibleOrgApiVerse[]
}

interface BibleOrgApiTranslation {
    lang: string//eng-US,
    copyright: string//<p>Contemporary English Version\u00ae \u00a9 1995 American Bible Society.  All rights reserved.</p>\n<p>Bible text from the Contemporary English Version (CEV) is not to be reproduced in copies or otherwise by any means except as permitted in writing by American Bible Society, 1865 Broadway, New York, NY 10023 (<a href=\http://www.americanbible.org/\>www.americanbible.org</a>).</p>,
    info: string//<h1>About this Title</h1> <p>Uncompromising simplicity marked the American Bible Society's translation of the Contemporary English Version Bible that was first published in 1995. The text is easily read by grade schoolers, second language readers, and those who prefer the more contemporized form. The CEV is not a paraphrase. It is an accurate and faithful translation of the original manuscripts.</p> <h2>Copyright Information</h2> <p>Scriptures marked as \(CEV)\ are taken from the Contemporary English Version Copyright © 1995 by American Bible Society. Used by permission.</p> <p>The text of the Contemporary English Version (CEV) appearing on or deriving from this or any other web page is for personal use only. The CEV text may be quoted in any form (written, visual, electronic or audio) up to & inclusive of five hundred (500) verses without written permission, providing the verses quoted do not amount to fifty percent (50%) of a complete book of the Bible nor do the verses account for twenty-five percent (25%) or more of the total text of the work in which they are quoted.</p> <p>This permission is contingent upon an appropriate copyright acknowledgement. Any use of the CEV shall be governed by above policy and shall be solely restricted to noncommercial, personal study purposes.</p> <p>For any other use, please address your inquiries to the American Bible Society, 1865 Broadway, New York, NY 10023, Attn Permissions Dept;</p> <p>CEV Home: string//http: string//<a href=\http://www.americanbible.org/\>www.americanbible.org</a> </p>,
    lang_name: string//English (US),
    abbreviation: string//CEV,
    lang_name_eng: string//English,
    contact_url: string//http://www.americanbible.org/,
    lang_code: string//ISO 639-3,
    id: string//eng-CEV,
    name: string//Contemporary English Version (US Version),
    updated_at : string//2013-06-26T12:29:12-05:00
}

interface GetVersionsApiResponse {
    versions: BibleOrgApiTranslation[],
    meta: BibleOrgApiMetaData
}

interface BibleOrgApiChapter {
    chapter: string,
    id: string,
    osis_end: string
}

interface BibleOrgApiBook {
    name: string//Exodus,
    chapters?: BibleOrgApiChapter[]
    parent: {
        version: BibleResourceLocation
    },
    version_id: string//369,
    next: {
        book: BibleResourceLocation
    },
    book_group_id: string//0,
    osis_end: string//eng-KJVA:Exod.40.38,
    abbr: string//Exod,
    testament: string//OT,
    ord: string//2,
    copyright: string//<p>King James Version 1611, spelling, punctuation and text formatting modernized by ABS in 1962; typesetting \u00a9 2010 American Bible Society.</p>,
    id: string//eng-KJVA:Exod,
    previous: {
        book: BibleResourceLocation
    }
}

interface GetBooksApiResponse {
    books: BibleOrgApiBook[],
    meta: BibleOrgApiMetaData
}

const BibleOrgApiKey = "ZELb181vSFy4DQZZTW39SucIbvh9gTnYLJeG6Zxb";

export interface Translation {
    id: string,
    name: string
}

export const GetTranslations = ():Promise<Translation[]> =>
    fetchBibleOrgJson<GetVersionsApiResponse>({uri:`https://bibles.org/v2/versions.js`})
    .then(response => response.versions.map(translation => ({
        id: translation.id,
        name: translation.name
    })))

export interface Book {
    id: string,
    name: string
    chapters?: number[]
}

export const GetBooks = (args:{translationId: string, includeChapters: boolean}):Promise<Book[]> =>
    fetchBibleOrgJson<GetBooksApiResponse>({uri:`https://bibles.org/v2/versions/${args.translationId}/books.js${args.includeChapters ? `?include_chapters=true` : ""}`})
    .then(response => response.books.map(book => ({
        id: book.abbr,
        name: book.name,
        chapters: book.chapters && book.chapters.map(chapter => parseInt(chapter.chapter))
    })))

export const GetCitations = (args:{translationId: string, bookId:string, chapter:number, fromVerse:number, toVerse:number}):Promise<Citation[]> => 
    fetchBibleOrgJson<GetVersesApiResponse>({uri:`https://bibles.org/v2/chapters/${args.translationId}:${args.bookId}.${args.chapter}/verses.js?start=${args.fromVerse}&end=${args.toVerse}`})
    .then(response => 
        response.verses.map(verse => parseVerseText(verse.text))
    );
    //http://bibles.org/pages/api/documentation/verses


