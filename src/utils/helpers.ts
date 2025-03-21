import languagetagsData from "../data/tagsData.json";
import words from "../data/words.json";
import { nanoid } from "nanoid";

export function initializeTags() {
  return languagetagsData.map((tag) => ({
    id: nanoid(),
    ...tag,
    isDismissed: false,
  }));
}

const alphabetLetters = "abcdefghijklmnopqrstuvwxyz";

export function initializeKeyboard() {
  //key status default , good, wrong
  return alphabetLetters
    .split("")
    .map((letter) => ({ id: nanoid(), letter, status: "" }));
}

export function getFarewellText(language: string) {
  const options = [
    `Farewell, ${language}`,
    `Adios, ${language}`,
    `R.I.P., ${language}`,
    `We'll miss you, ${language}`,
    `Oh no, not ${language}!`,
    `${language} bites the dust`,
    `Gone but not forgotten, ${language}`,
    `The end of ${language} as we know it`,
    `Off into the sunset, ${language}`,
    `${language}, it's been real`,
    `${language}, your watch has ended`,
    `${language} has left the building`
  ];

  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function getWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex]
}


export function initializeCurrentWord() {
  //word status hidden good wrong
  const word = getWord();
  return word
    .split("")
    .map((letter) => ({ id: nanoid(), letter, status: "hidden" }));
}
