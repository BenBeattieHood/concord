import { ScienceAndHealthChapters } from "../resources/sh"

export const getChapters = () => {
    return ScienceAndHealthChapters.map((chapter, id) => ({ id, title: chapter.header }));
}

export const getParagraphs = (id:number) => {
    return ScienceAndHealthChapters[id].paras;
}