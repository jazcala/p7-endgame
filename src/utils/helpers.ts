import languagetagsData from "../data/tagsData.json";
import { nanoid } from "nanoid";

export function initializeTags() {
  return languagetagsData.map((tag) => ({
    id: nanoid(),
    ...tag,
    isDismissed: false,
  }));
}

const alphabetLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function initializeKeyboard() {
  //key status default , good, wrong
  return alphabetLetters
    .split("")
    .map((letter) => ({ id: nanoid(), letter, status: "" }));
}
