import { useState, useRef } from "react";
import { nanoid } from "nanoid";

import GameStatus from "./GameStatus";
import Tags from "./Tags";
import Word from "./Word";
import Keyboard from "./Keyboard";
import NewGameButton from "./NewGameButton";

import { tagProps, keyboardProps, letterProps } from "../types/types";
import { initializeTags, initializeKeyboard } from "../utils/helpers";

export default function Main() {
  const [gameStatus, setGameStatus] = useState<string>("newGame"); //win gameOver newGame farewell
  const tag = "HTML & CSS";
  const [languageTags, setLanguageTags] = useState<tagProps[]>(() =>
    initializeTags()
  );
  const [keyboardKeys, setKeyboardKeys] = useState<keyboardProps[]>(() =>
    initializeKeyboard()
  );
  const word = "ELEPHANT";
  const [currentWord, setCurrentWord] = useState<letterProps[]>(() =>
    initializeCurrentWord()
  );

  const rounds = useRef(-1);

  function initializeCurrentWord() {
    //word status hidden good wrong
    return word
      .split("")
      .map((letter) => ({ id: nanoid(), letter, status: "hidden" }));
  }

  function handleSelectKey(key: string) {
    //TODO need to add styles for dismissed tag.
    let exists: boolean = false;
    setCurrentWord(
      currentWord.map((prevLetter) => {
        if (prevLetter.letter === key) {
          exists = true;
          return { ...prevLetter, status: "good" };
        } else {
          return prevLetter;
        }
      })
    );
    setKeyboardKeys(
      keyboardKeys.map((prevKey) => {
        if (prevKey.letter === key) {
          return exists
            ? { ...prevKey, status: "good" }
            : { ...prevKey, status: "wrong" };
        } else {
          return prevKey;
        }
      })
    );

    if (rounds.current < 8 && !exists) {
      setLanguageTags((prevTags) =>
        prevTags.map((tag, index) =>
          index === rounds.current ? { ...tag, isDismissed: true } : tag
        )
      );
      rounds.current++;
      if (rounds.current >= 8) {
        setGameStatus("gameOver");
        setCurrentWord(
          currentWord.map((prevLetter) => {
            if (prevLetter.status === "hidden") {
              return { ...prevLetter, status: "wrong" };
            } else {
              return { ...prevLetter };
            }
          })
        );
      }
    }
  }

  function handleNewGame() {
    console.log("New game");
    setKeyboardKeys(initializeKeyboard());
    setLanguageTags(initializeTags());
    console.log(rounds.current);
    rounds.current = -1;
    setGameStatus("newGame");
    rounds.current = -1;
    setCurrentWord(initializeCurrentWord());

    //TODO New word
  }

  /**
   * //TODO array of words and get a random world
   * //TODO move to helper
   * //TODO Add violet message when a tag is dismissed
   * //TODO add skull over dismissed tag-
   * //TODO GENERATE RANDOM WORDS
   */

  return (
    <main>
      <GameStatus gameStatus={gameStatus} tagToDismiss={tag} />
      <Tags tagsList={languageTags} />
      <Word currentWord={currentWord} />
      <Keyboard
        keyboardKeys={keyboardKeys}
        handleSelectKey={handleSelectKey}
        gameStatus={gameStatus}
      />
      {(gameStatus === "win" || gameStatus === "gameOver") && (
        <NewGameButton handleNewGame={handleNewGame} />
      )}
    </main>
  );
}
