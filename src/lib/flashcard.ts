type CardState = "face-up" | "face-down";

export type Card = {
    type: 'card';
    front: string;
    back: string;
    isFacingUp: CardState;
    [key: string]: string;
};

export type Collections = Card[];
