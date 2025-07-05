import type { Card } from "./flashcard.ts";
import { uniformSample } from "./utils/random.ts";

type DeckObject = Card | Deck;

export type Deck = { type: "deck"; contents: DeckObject[] };

export function sampleUniformlyFromAllCards(deck: Deck): Card | null {
  const decks = deckNodesToAllCards(deck.contents);
  return uniformSample(decks);
}

function deckNodesToAllCards(deckObjects: DeckObject[]): Card[] {
  const resCards = [] as Card[];
  for (const deckObject of deckObjects) {
    resCards.push(...toCardContents(deckObject));
  }
  return resCards;
}

function toCardContents(deckObjects: DeckObject): Card[] {
  switch (deckObjects.type) {
    case "deck":
      const resCards = [] as Card[];
      for (const deck of deckObjects.contents) {
        const cards = toCardContents(deck);
        if (cards.length === 0) {
          continue;
        }
        resCards.push(...cards);
      }
      return resCards;
    case "card":
      return [deckObjects];
    default:
      throw new Error(`Invalid deck object type`);
  }
}
