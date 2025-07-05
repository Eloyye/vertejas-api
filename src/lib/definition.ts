import type { PartsOfSpeech } from "./vocab.ts";

export type DictionaryWord = {
  word_id: number;
  word: string;
  definition: string;
  furigana: string;
  romaji: string;
  examples: string[];
  partOfSpeech: PartsOfSpeech;
};
