export const GetCitations = (args:{book:string, chapter:number, fromVerse:number, toVerse:number}):Promise<string> => 
    fetch(`https://bibles.org/v2/chapters/eng-KJVA:1Cor.2/verses.js?start=5&end=6`)
    .then(x => x.json)
    .then((x:string) => JSON.parse<{asd:string}>(x))
    .then(response => {
        return ""
    });
    //http://bibles.org/pages/api/documentation/verses