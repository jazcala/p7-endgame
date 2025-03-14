import GameStatus from "./GameStatus";
import languagetagsData from "../data/tagsData.json";
import { useState } from "react";
import Tags from "./Tags";
import { tagProps, keyboardProps } from "../types/types";
import NewGameButton from "./NewGameButton";
import Keyboard from "./Keyboard";
import { nanoid } from "nanoid";

export default function Main() {
  //testing values
  const gameStatus: string = "gameOver"; // "farewell" "win" "gameOver"
  const tag = "HTML & CSS";
  const [languageTags, setLanguageTags] = useState<tagProps[]>(() =>
    initializeTags()
  );
  const alphabetLetters = "abcdefghijklmnopqrstuvwxyz";
  const [keyboardKeys, setKeyboardKeys] = useState<keyboardProps[]>(() =>
    initializeKeyboard()
  );

  // const word:string = "refactor";
  // const [keyboard,setKeyboard]
  function initializeTags() {
    return languagetagsData.map((tag) => ({
      id: nanoid(),
      ...tag,
      isDismissed: true,
    }));
  }
  function initializeKeyboard() {
    //key status default , good, wrong
    return alphabetLetters
      .split("")
      .map((letter) => ({ id: nanoid(), letter, status: "" }));
  }

  return (
    <main>
      <GameStatus gameStatus={gameStatus} tagToDismiss={tag} />
      <Tags tagsList={languageTags} />
      <div>Word to guess</div>
      <Keyboard keyboardKeys={keyboardKeys} />
      {(gameStatus === "win" || gameStatus === "gameOver") && <NewGameButton />}
    </main>
  );
}
