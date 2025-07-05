import { expect, test, describe } from "bun:test";
import { sampleUniformlyFromAllCards } from "../../src/lib/deck";
import type { Card } from "../../src/lib/flashcard";
import type { Deck } from "../../src/lib/deck";

describe("sampleUniformlyFromAllCards", () => {
  test("should sample from deck with only cards", () => {
    const card1: Card = {
      type: "card",
      front: "test1",
      back: "test1",
      partOfSpeech: "noun",
      isFacingUp: "face-up",
    };
    const card2: Card = {
      type: "card",
      front: "test2",
      back: "test2",
      partOfSpeech: "verb",
      isFacingUp: "face-up",
    };
    const deck: Deck = {
      type: "deck",
      contents: [card1, card2],
    };
    const result = sampleUniformlyFromAllCards(deck);
    expect(result).not.toBeNull();
    expect([card1, card2]).toContain(result);
  });

  test("should sample from nested decks with cards", () => {
    const card1: Card = {
      type: "card",
      front: "test1",
      back: "test1",
      partOfSpeech: "noun",
      isFacingUp: "face-up",
    };
    const card2: Card = {
      type: "card",
      front: "test2",
      back: "test2",
      partOfSpeech: "verb",
      isFacingUp: "face-up",
    };
    const deck1: Deck = {
      type: "deck",
      contents: [card1],
    };
    const deck2: Deck = {
      type: "deck",
      contents: [card2],
    };
    const nestedDeck: Deck = {
      type: "deck",
      contents: [deck1, deck2],
    };
    const result = sampleUniformlyFromAllCards(nestedDeck);
    expect(result).not.toBeNull();
    expect([card1, card2]).toContain(result);
  });
  test("should return null if deck is empty", () => {
    const deck: Deck = {
      type: "deck",
      contents: [],
    };
    const result = sampleUniformlyFromAllCards(deck);
    expect(result).toBeNull();
  });
});
