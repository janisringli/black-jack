// import PlayingCard from "./components/playingCard";
import spades from "./assets/suits/spades.svg";
import diamonds from "./assets/suits/diamonds.svg";
import hearts from "./assets/suits/hearts.svg";
import clubs from "./assets/suits/clubs.svg";

import { useState } from "react";
import "./App.css";

function App() {
  const [test, setTest] = useState(0);
  const [cardCount, setCardCount] = useState(4);

  let cards = [
    //8 full decks of cards
    {
      cardId: 1,
      title: "A",
      value: 11,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 2,
      title: "2",
      value: 2,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 3,
      title: "3",
      value: 3,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 4,
      title: "4",
      value: 4,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 5,
      title: "5",
      value: 5,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 6,
      title: "6",
      value: 6,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 7,
      title: "7",
      value: 7,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 8,
      title: "8",
      value: 8,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 9,
      title: "9",
      value: 9,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 10,
      title: "10",
      value: 10,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 11,
      title: "J",
      value: 10,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 12,
      title: "Q",
      value: 10,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 13,
      title: "K",
      value: 10,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 14,
      title: "A",
      value: 11,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 15,
      title: "2",
      value: 2,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 16,
      title: "3",
      value: 3,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 17,
      title: "4",
      value: 4,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 18,
      title: "5",
      value: 5,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 19,
      title: "6",
      value: 6,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 20,
      title: "7",
      value: 7,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 21,
      title: "8",
      value: 8,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 22,
      title: "9",
      value: 9,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 23,
      title: "10",
      value: 10,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 24,
      title: "J",
      value: 10,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 25,
      title: "Q",
      value: 10,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 26,
      title: "K",
      value: 10,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 27,
      title: "A",
      value: 11,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 28,
      title: "2",
      value: 2,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 29,
      title: "3",
      value: 3,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 30,
      title: "4",
      value: 4,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 31,
      title: "5",
      value: 5,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 32,
      title: "6",
      value: 6,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 33,
      title: "7",
      value: 7,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 34,
      title: "8",
      value: 8,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 35,
      title: "9",
      value: 9,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 36,
      title: "10",
      value: 10,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 37,
      title: "J",
      value: 10,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 38,
      title: "Q",
      value: 10,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 39,
      title: "K",
      value: 10,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 40,
      title: "A",
      value: 11,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 41,
      title: "2",
      value: 2,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 42,
      title: "3",
      value: 3,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 43,
      title: "4",
      value: 4,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 44,
      title: "5",
      value: 5,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 45,
      title: "6",
      value: 6,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 46,
      title: "7",
      value: 7,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 47,
      title: "8",
      value: 8,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 48,
      title: "9",
      value: 9,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 49,
      title: "10",
      value: 10,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 50,
      title: "J",
      value: 10,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 51,
      title: "Q",
      value: 10,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 52,
      title: "K",
      value: 10,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 53,
      title: "A",
      value: 11,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 54,
      title: "2",
      value: 2,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 55,
      title: "3",
      value: 3,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 56,
      title: "4",
      value: 4,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 57,
      title: "5",
      value: 5,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 58,
      title: "6",
      value: 6,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 59,
      title: "7",
      value: 7,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 60,
      title: "8",
      value: 8,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 61,
      title: "9",
      value: 9,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 62,
      title: "10",
      value: 10,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 63,
      title: "J",
      value: 10,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 64,
      title: "Q",
      value: 10,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 65,
      title: "K",
      value: 10,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 66,
      title: "A",
      value: 11,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 67,
      title: "2",
      value: 2,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 68,
      title: "3",
      value: 3,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 69,
      title: "4",
      value: 4,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 70,
      title: "5",
      value: 5,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 71,
      title: "6",
      value: 6,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 72,
      title: "7",
      value: 7,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 73,
      title: "8",
      value: 8,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 74,
      title: "9",
      value: 9,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 75,
      title: "10",
      value: 10,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 76,
      title: "J",
      value: 10,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 77,
      title: "Q",
      value: 10,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 78,
      title: "K",
      value: 10,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 79,
      title: "A",
      value: 11,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 80,
      title: "2",
      value: 2,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 81,
      title: "3",
      value: 3,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 82,
      title: "4",
      value: 4,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 83,
      title: "5",
      value: 5,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 84,
      title: "6",
      value: 6,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 85,
      title: "7",
      value: 7,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 86,
      title: "8",
      value: 8,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 87,
      title: "9",
      value: 9,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 88,
      title: "10",
      value: 10,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 89,
      title: "J",
      value: 10,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 90,
      title: "Q",
      value: 10,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 91,
      title: "K",
      value: 10,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 92,
      title: "A",
      value: 11,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 93,
      title: "2",
      value: 2,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 94,
      title: "3",
      value: 3,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 95,
      title: "4",
      value: 4,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 96,
      title: "5",
      value: 5,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 97,
      title: "6",
      value: 6,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 98,
      title: "7",
      value: 7,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 99,
      title: "8",
      value: 8,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 100,
      title: "9",
      value: 9,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 101,
      title: "10",
      value: 10,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 102,
      title: "J",
      value: 10,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 103,
      title: "Q",
      value: 10,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 104,
      title: "K",
      value: 10,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 105,
      title: "A",
      value: 11,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 106,
      title: "2",
      value: 2,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 107,
      title: "3",
      value: 3,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 108,
      title: "4",
      value: 4,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 109,
      title: "5",
      value: 5,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 110,
      title: "6",
      value: 6,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 111,
      title: "7",
      value: 7,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 112,
      title: "8",
      value: 8,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 113,
      title: "9",
      value: 9,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 114,
      title: "10",
      value: 10,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 115,
      title: "J",
      value: 10,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 116,
      title: "Q",
      value: 10,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 117,
      title: "K",
      value: 10,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 118,
      title: "A",
      value: 11,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 119,
      title: "2",
      value: 2,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 120,
      title: "3",
      value: 3,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 121,
      title: "4",
      value: 4,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 122,
      title: "5",
      value: 5,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 123,
      title: "6",
      value: 6,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 124,
      title: "7",
      value: 7,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 125,
      title: "8",
      value: 8,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 126,
      title: "9",
      value: 9,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 127,
      title: "10",
      value: 10,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 128,
      title: "J",
      value: 10,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 129,
      title: "Q",
      value: 10,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 130,
      title: "K",
      value: 10,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 131,
      title: "A",
      value: 11,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 132,
      title: "2",
      value: 2,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 133,
      title: "3",
      value: 3,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 134,
      title: "4",
      value: 4,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 135,
      title: "5",
      value: 5,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 136,
      title: "6",
      value: 6,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 137,
      title: "7",
      value: 7,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 138,
      title: "8",
      value: 8,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 139,
      title: "9",
      value: 9,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 140,
      title: "10",
      value: 10,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 141,
      title: "J",
      value: 10,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 142,
      title: "Q",
      value: 10,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 143,
      title: "K",
      value: 10,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 144,
      title: "A",
      value: 11,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 145,
      title: "2",
      value: 2,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 146,
      title: "3",
      value: 3,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 147,
      title: "4",
      value: 4,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 148,
      title: "5",
      value: 5,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 149,
      title: "6",
      value: 6,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 150,
      title: "7",
      value: 7,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 151,
      title: "8",
      value: 8,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 152,
      title: "9",
      value: 9,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 153,
      title: "10",
      value: 10,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 154,
      title: "J",
      value: 10,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 155,
      title: "Q",
      value: 10,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 156,
      title: "K",
      value: 10,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 157,
      title: "A",
      value: 11,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 158,
      title: "2",
      value: 2,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 159,
      title: "3",
      value: 3,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 160,
      title: "4",
      value: 4,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 161,
      title: "5",
      value: 5,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 162,
      title: "6",
      value: 6,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 163,
      title: "7",
      value: 7,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 164,
      title: "8",
      value: 8,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 165,
      title: "9",
      value: 9,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 166,
      title: "10",
      value: 10,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 167,
      title: "J",
      value: 10,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 168,
      title: "Q",
      value: 10,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 169,
      title: "K",
      value: 10,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 170,
      title: "A",
      value: 11,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 171,
      title: "2",
      value: 2,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 172,
      title: "3",
      value: 3,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 173,
      title: "4",
      value: 4,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 174,
      title: "5",
      value: 5,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 175,
      title: "6",
      value: 6,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 176,
      title: "7",
      value: 7,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 177,
      title: "8",
      value: 8,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 178,
      title: "9",
      value: 9,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 179,
      title: "10",
      value: 10,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 180,
      title: "J",
      value: 10,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 181,
      title: "Q",
      value: 10,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 182,
      title: "K",
      value: 10,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 183,
      title: "A",
      value: 11,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 184,
      title: "2",
      value: 2,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 185,
      title: "3",
      value: 3,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 186,
      title: "4",
      value: 4,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 187,
      title: "5",
      value: 5,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 188,
      title: "6",
      value: 6,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 189,
      title: "7",
      value: 7,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 190,
      title: "8",
      value: 8,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 191,
      title: "9",
      value: 9,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 192,
      title: "10",
      value: 10,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 193,
      title: "J",
      value: 10,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 194,
      title: "Q",
      value: 10,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 195,
      title: "K",
      value: 10,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 196,
      title: "A",
      value: 11,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 197,
      title: "2",
      value: 2,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 198,
      title: "3",
      value: 3,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 199,
      title: "4",
      value: 4,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 200,
      title: "5",
      value: 5,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 201,
      title: "6",
      value: 6,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 202,
      title: "7",
      value: 7,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 203,
      title: "8",
      value: 8,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 204,
      title: "9",
      value: 9,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 205,
      title: "10",
      value: 10,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 206,
      title: "J",
      value: 10,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 207,
      title: "Q",
      value: 10,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 208,
      title: "K",
      value: 10,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 209,
      title: "A",
      value: 11,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 210,
      title: "2",
      value: 2,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 211,
      title: "3",
      value: 3,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 212,
      title: "4",
      value: 4,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 213,
      title: "5",
      value: 5,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 214,
      title: "6",
      value: 6,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 215,
      title: "7",
      value: 7,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 216,
      title: "8",
      value: 8,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 217,
      title: "9",
      value: 9,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 218,
      title: "10",
      value: 10,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 219,
      title: "J",
      value: 10,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 220,
      title: "Q",
      value: 10,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 221,
      title: "K",
      value: 10,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 222,
      title: "A",
      value: 11,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 223,
      title: "2",
      value: 2,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 224,
      title: "3",
      value: 3,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 225,
      title: "4",
      value: 4,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 226,
      title: "5",
      value: 5,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 227,
      title: "6",
      value: 6,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 228,
      title: "7",
      value: 7,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 229,
      title: "8",
      value: 8,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 230,
      title: "9",
      value: 9,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 231,
      title: "10",
      value: 10,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 232,
      title: "J",
      value: 10,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 233,
      title: "Q",
      value: 10,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 234,
      title: "K",
      value: 10,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 235,
      title: "A",
      value: 11,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 236,
      title: "2",
      value: 2,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 237,
      title: "3",
      value: 3,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 238,
      title: "4",
      value: 4,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 239,
      title: "5",
      value: 5,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 240,
      title: "6",
      value: 6,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 241,
      title: "7",
      value: 7,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 242,
      title: "8",
      value: 8,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 243,
      title: "9",
      value: 9,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 244,
      title: "10",
      value: 10,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 245,
      title: "J",
      value: 10,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 246,
      title: "Q",
      value: 10,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 247,
      title: "K",
      value: 10,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 248,
      title: "A",
      value: 11,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 249,
      title: "2",
      value: 2,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 250,
      title: "3",
      value: 3,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 251,
      title: "4",
      value: 4,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 252,
      title: "5",
      value: 5,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 253,
      title: "6",
      value: 6,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 254,
      title: "7",
      value: 7,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 255,
      title: "8",
      value: 8,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 256,
      title: "9",
      value: 9,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 257,
      title: "10",
      value: 10,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 258,
      title: "J",
      value: 10,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 259,
      title: "Q",
      value: 10,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 260,
      title: "K",
      value: 10,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 261,
      title: "A",
      value: 11,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 262,
      title: "2",
      value: 2,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 263,
      title: "3",
      value: 3,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 264,
      title: "4",
      value: 4,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 265,
      title: "5",
      value: 5,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 266,
      title: "6",
      value: 6,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 267,
      title: "7",
      value: 7,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 268,
      title: "8",
      value: 8,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 269,
      title: "9",
      value: 9,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 270,
      title: "10",
      value: 10,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 271,
      title: "J",
      value: 10,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 272,
      title: "Q",
      value: 10,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 273,
      title: "K",
      value: 10,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 274,
      title: "A",
      value: 11,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 275,
      title: "2",
      value: 2,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 276,
      title: "3",
      value: 3,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 277,
      title: "4",
      value: 4,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 278,
      title: "5",
      value: 5,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 279,
      title: "6",
      value: 6,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 280,
      title: "7",
      value: 7,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 281,
      title: "8",
      value: 8,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 282,
      title: "9",
      value: 9,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 283,
      title: "10",
      value: 10,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 284,
      title: "J",
      value: 10,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 285,
      title: "Q",
      value: 10,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 286,
      title: "K",
      value: 10,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 287,
      title: "A",
      value: 11,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 288,
      title: "2",
      value: 2,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 289,
      title: "3",
      value: 3,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 290,
      title: "4",
      value: 4,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 291,
      title: "5",
      value: 5,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 292,
      title: "6",
      value: 6,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 293,
      title: "7",
      value: 7,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 294,
      title: "8",
      value: 8,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 295,
      title: "9",
      value: 9,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 296,
      title: "10",
      value: 10,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 297,
      title: "J",
      value: 10,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 298,
      title: "Q",
      value: 10,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 299,
      title: "K",
      value: 10,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 300,
      title: "A",
      value: 11,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 301,
      title: "2",
      value: 2,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 302,
      title: "3",
      value: 3,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 303,
      title: "4",
      value: 4,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 304,
      title: "5",
      value: 5,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 305,
      title: "6",
      value: 6,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 306,
      title: "7",
      value: 7,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 307,
      title: "8",
      value: 8,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 308,
      title: "9",
      value: 9,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 309,
      title: "10",
      value: 10,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 310,
      title: "J",
      value: 10,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 311,
      title: "Q",
      value: 10,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 312,
      title: "K",
      value: 10,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 313,
      title: "A",
      value: 11,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 314,
      title: "2",
      value: 2,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 315,
      title: "3",
      value: 3,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 316,
      title: "4",
      value: 4,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 317,
      title: "5",
      value: 5,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 318,
      title: "6",
      value: 6,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 319,
      title: "7",
      value: 7,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 320,
      title: "8",
      value: 8,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 321,
      title: "9",
      value: 9,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 322,
      title: "10",
      value: 10,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 323,
      title: "J",
      value: 10,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 324,
      title: "Q",
      value: 10,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 325,
      title: "K",
      value: 10,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 326,
      title: "A",
      value: 11,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 327,
      title: "2",
      value: 2,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 328,
      title: "3",
      value: 3,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 329,
      title: "4",
      value: 4,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 330,
      title: "5",
      value: 5,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 331,
      title: "6",
      value: 6,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 332,
      title: "7",
      value: 7,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 333,
      title: "8",
      value: 8,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 334,
      title: "9",
      value: 9,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 335,
      title: "10",
      value: 10,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 336,
      title: "J",
      value: 10,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 337,
      title: "Q",
      value: 10,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 338,
      title: "K",
      value: 10,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 339,
      title: "A",
      value: 11,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 340,
      title: "2",
      value: 2,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 341,
      title: "3",
      value: 3,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 342,
      title: "4",
      value: 4,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 343,
      title: "5",
      value: 5,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 344,
      title: "6",
      value: 6,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 345,
      title: "7",
      value: 7,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 346,
      title: "8",
      value: 8,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 347,
      title: "9",
      value: 9,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 348,
      title: "10",
      value: 10,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 349,
      title: "J",
      value: 10,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 350,
      title: "Q",
      value: 10,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 351,
      title: "K",
      value: 10,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 352,
      title: "A",
      value: 11,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 353,
      title: "2",
      value: 2,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 354,
      title: "3",
      value: 3,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 355,
      title: "4",
      value: 4,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 356,
      title: "5",
      value: 5,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 357,
      title: "6",
      value: 6,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 358,
      title: "7",
      value: 7,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 359,
      title: "8",
      value: 8,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 360,
      title: "9",
      value: 9,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 361,
      title: "10",
      value: 10,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 362,
      title: "J",
      value: 10,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 363,
      title: "Q",
      value: 10,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 364,
      title: "K",
      value: 10,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 365,
      title: "A",
      value: 11,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 366,
      title: "2",
      value: 2,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 367,
      title: "3",
      value: 3,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 368,
      title: "4",
      value: 4,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 369,
      title: "5",
      value: 5,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 370,
      title: "6",
      value: 6,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 371,
      title: "7",
      value: 7,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 372,
      title: "8",
      value: 8,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 373,
      title: "9",
      value: 9,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 374,
      title: "10",
      value: 10,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 375,
      title: "J",
      value: 10,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 376,
      title: "Q",
      value: 10,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 377,
      title: "K",
      value: 10,
      suit: "Hearts",
      icon: hearts,
    },
    {
      cardId: 378,
      title: "A",
      value: 11,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 379,
      title: "2",
      value: 2,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 380,
      title: "3",
      value: 3,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 381,
      title: "4",
      value: 4,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 382,
      title: "5",
      value: 5,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 383,
      title: "6",
      value: 6,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 384,
      title: "7",
      value: 7,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 385,
      title: "8",
      value: 8,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 386,
      title: "9",
      value: 9,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 387,
      title: "10",
      value: 10,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 388,
      title: "J",
      value: 10,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 389,
      title: "Q",
      value: 10,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 390,
      title: "K",
      value: 10,
      suit: "Diamonds",
      icon: diamonds,
    },
    {
      cardId: 391,
      title: "A",
      value: 11,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 392,
      title: "2",
      value: 2,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 393,
      title: "3",
      value: 3,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 394,
      title: "4",
      value: 4,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 395,
      title: "5",
      value: 5,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 396,
      title: "6",
      value: 6,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 397,
      title: "7",
      value: 7,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 398,
      title: "8",
      value: 8,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 399,
      title: "9",
      value: 9,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 400,
      title: "10",
      value: 10,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 401,
      title: "J",
      value: 10,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 402,
      title: "Q",
      value: 10,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 403,
      title: "K",
      value: 10,
      suit: "Clubs",
      icon: clubs,
    },
    {
      cardId: 404,
      title: "A",
      value: 11,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 405,
      title: "2",
      value: 2,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 406,
      title: "3",
      value: 3,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 407,
      title: "4",
      value: 4,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 408,
      title: "5",
      value: 5,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 409,
      title: "6",
      value: 6,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 410,
      title: "7",
      value: 7,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 411,
      title: "8",
      value: 8,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 412,
      title: "9",
      value: 9,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 413,
      title: "10",
      value: 10,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 414,
      title: "J",
      value: 10,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 415,
      title: "Q",
      value: 10,
      suit: "Spades",
      icon: spades,
    },
    {
      cardId: 416,
      title: "K",
      value: 10,
      suit: "Spades",
      icon: spades,
    },
  ];
  const [shuffledCards, setShuffledCards] = useState(() =>
    cards.sort(() => Math.random() - 0.5)
  );

  function shuffle() {
    cards = cards.sort(() => Math.random() - 0.5);
    setShuffledCards(cards);

    setTest(test + 1);
  }
  console.log(shuffledCards[0].value + shuffledCards[1].value);
  if (shuffledCards[0].title === "A" && shuffledCards[1].title === "J") {
    console.log("Blackjack!");
  }
  if (shuffledCards[0].value + shuffledCards[1].value > 21) {
    console.log("Bust");
  }
  function newGame() {
    shuffle();
  }
  return (
    <div className="App">
      <div className="app-container">
        <div className="app-container__header"></div>
        <button onClick={newGame}>New Game</button>

        <div className="app-container__body">
          <h1>Dealer's hand</h1>
          <div className="dealers-hand">
            <div className="card-cover">
              <img src={spades} alt="" />
              <img src={hearts} alt="" />
              <img src={clubs} alt="" />
              <img src={diamonds} alt="" />
              <img src={spades} alt="" />
              <img src={hearts} alt="" />
              <img src={clubs} alt="" />
              <img src={diamonds} alt="" />
              <img src={spades} alt="" />
              <img src={hearts} alt="" />
              <img src={clubs} alt="" />
              <img src={diamonds} alt="" />
              <img src={spades} alt="" />
              <img src={hearts} alt="" />
              <img src={clubs} alt="" />
              <img src={diamonds} alt="" />
              <img src={spades} alt="" />
              <img src={hearts} alt="" />
              <img src={clubs} alt="" />
              <img src={diamonds} alt="" />
              <img src={spades} alt="" />
              <img src={hearts} alt="" />
              <img src={clubs} alt="" />
              <img src={diamonds} alt="" />
              <img src={spades} alt="" />
              <img src={hearts} alt="" />
              <img src={clubs} alt="" />
              <img src={diamonds} alt="" />
              <img src={spades} alt="" />
              <img src={hearts} alt="" />
              <img src={clubs} alt="" />
              <img src={diamonds} alt="" />
              <img src={spades} alt="" />
              <img src={hearts} alt="" />
              <img src={clubs} alt="" />
              <img src={diamonds} alt="" />
              <img src={spades} alt="" />
              <img src={hearts} alt="" />
              <img src={clubs} alt="" />
              <img src={diamonds} alt="" />
              <img src={spades} alt="" />
              <img src={hearts} alt="" />
              <img src={clubs} alt="" />
              <img src={diamonds} alt="" />
              <img src={spades} alt="" />
              <img src={hearts} alt="" />
              <img src={clubs} alt="" />
              <img src={diamonds} alt="" />
              <img src={spades} alt="" />
              <img src={hearts} alt="" />
              <img src={clubs} alt="" />
              <img src={diamonds} alt="" />
              <img src={spades} alt="" />
              <img src={hearts} alt="" />
              <img src={clubs} alt="" />
              <img src={diamonds} alt="" />
              <img src={spades} alt="" />
              <img src={hearts} alt="" />
              <img src={clubs} alt="" />
              <img src={diamonds} alt="" />
              <img src={spades} alt="" />
              <img src={hearts} alt="" />
              <img src={clubs} alt="" />
              <img src={diamonds} alt="" />
              <img src={spades} alt="" />
              <img src={hearts} alt="" />
              <img src={clubs} alt="" />
              <img src={diamonds} alt="" />
              <img src={spades} alt="" />
              <img src={hearts} alt="" />
              <img src={clubs} alt="" />
              <img src={diamonds} alt="" />
              <img src={spades} alt="" />
              <img src={hearts} alt="" />
              <img src={clubs} alt="" />
              <img src={diamonds} alt="" />
              <img src={spades} alt="" />
              <img src={hearts} alt="" />
              <img src={clubs} alt="" />
              <img src={diamonds} alt="" />
              <img src={spades} alt="" />
              <img src={hearts} alt="" />
              <img src={clubs} alt="" />
              <img src={diamonds} alt="" />
            </div>
            <div className="card">
              <div className="card-layout">
                <div className="card-title">{shuffledCards[0].title}</div>
                <img
                  className="card-image"
                  src={shuffledCards[3]?.icon}
                  alt={shuffledCards[3]?.suit}
                />
              </div>
              <img
                className="card-image-big"
                src={shuffledCards[3]?.icon}
                alt={shuffledCards[3]?.suit}
              />

              <div className="card-layout upsidedown">
                <div className="card-title">{shuffledCards[0]?.title}</div>

                <img
                  className="card-image"
                  src={shuffledCards[3]?.icon}
                  alt={shuffledCards[3]?.suit}
                />
              </div>
            </div>
          </div>
          <h1>Player's hand</h1>
          <div className="players-hand">
            <div className="card">
              <div className="card-layout">
                <div className="card-title">{shuffledCards[0].title}</div>
                <img
                  className="card-image"
                  src={shuffledCards[0]?.icon}
                  alt={shuffledCards[0]?.suit}
                />
              </div>
              <img
                className="card-image-big"
                src={shuffledCards[0]?.icon}
                alt={shuffledCards[0]?.suit}
              />

              <div className="card-layout upsidedown">
                <div className="card-title">{shuffledCards[0]?.title}</div>

                <img
                  className="card-image"
                  src={shuffledCards[0]?.icon}
                  alt={shuffledCards[0]?.suit}
                />
              </div>
            </div>
            <div className="card">
              <div className="card-layout">
                <div className="card-title">{shuffledCards[1].title}</div>
                <img
                  className="card-image"
                  src={shuffledCards[1]?.icon}
                  alt={shuffledCards[1]?.suit}
                />
              </div>
              <img
                className="card-image-big"
                src={shuffledCards[1]?.icon}
                alt={shuffledCards[1]?.suit}
              />

              <div className="card-layout upsidedown">
                <div className="card-title">{shuffledCards[1]?.title}</div>

                <img
                  className="card-image"
                  src={shuffledCards[1]?.icon}
                  alt={shuffledCards[1]?.suit}
                />
              </div>
            </div>
          </div>
          {/* {schuffledCards.map((card) => (
            <div className="card" key={card.cardId}>
              <div className="card-layout">
                <div className="card-title">{card.title}</div>
                <img className="card-image" src={card.icon} alt={card.suit} />
              </div>
              <img className="card-image-big" src={card.icon} alt={card.suit} />

              <div className="card-layout upsidedown">
                <div className="card-title">{card.title}</div>

                <img className="card-image" src={card.icon} alt={card.suit} />
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default App;
