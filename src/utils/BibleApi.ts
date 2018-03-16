function fetchJson<TResult>(uri:string) {
    return (
        fetch(uri)
        .then(x => x.json())
        .then((x:string) => JSON.parse(x) as TResult)
    );
}

interface GetVersesResponse {
    response: {
        meta: {

        },
        verses: {
            
        }
    }
}

export const GetCitations = (args:{book:string, chapter:number, fromVerse:number, toVerse:number}):Promise<string> => 
    fetchJson<GetVersesResponse>(`https://bibles.org/v2/chapters/eng-KJVA:1Cor.2/verses.js?start=5&end=6`)
    .then(response => {
        
    });
    //http://bibles.org/pages/api/documentation/verses
