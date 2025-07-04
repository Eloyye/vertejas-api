import type { Card } from "./flashcard.ts";
import { uniformSample } from "./utils/random.ts";

type DeckObject = Card | Deck;

export type Deck = { type: "deck"; contents: DeckObject[] };

// the default behavior is that when you draw a deck, you have to get all the cards from the subdecks
function draw(deck: Deck): Card | null {
  const sampledObject = uniformSample<DeckObject>(deck.contents);
  if (sampledObject === null) {
    return null;
  }
  switch (sampledObject.type) {
    case "deck":
      return draw(sampledObject);
    case "card":
      return sampledObject;
  }
}
