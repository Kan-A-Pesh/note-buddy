import { generateSlug, RandomWordOptions } from "random-word-slugs";

const nameOptions: RandomWordOptions<2> = {
    format: "title",
    categories: {
        noun: ["media", "technology", "time", "thing"],
        adjective: ["color", "quantity", "shapes", "size", "sounds", "time"],
    },
    partsOfSpeech: ["adjective", "noun"],
};

export const projectNameGenerator = () => {
    return generateSlug(2, nameOptions);
};
