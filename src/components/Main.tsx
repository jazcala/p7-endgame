import { useState, useRef } from "react";

import GameStatus from "./GameStatus";
import Tags from "./Tags";
import Word from "./Word";
import Keyboard from "./Keyboard";
import NewGameButton from "./NewGameButton";

import { tagProps, keyboardProps, letterProps } from "../types/types";
import {
  initializeTags,
  initializeKeyboard,
  initializeCurrentWord,
} from "../utils/helpers";

export default function Main() {
  const [languageTags, setLanguageTags] = useState<tagProps[]>(() =>
    initializeTags()
  );
  const [keyboardKeys, setKeyboardKeys] = useState<keyboardProps[]>(() =>
    initializeKeyboard()
  );
  const [currentWord, setCurrentWord] = useState<letterProps[]>(() =>
    initializeCurrentWord()
  );

  let gameStatus = "newGame";
  const tagToDismiss = useRef("");
  const rounds = useRef(0);

  function handleSelectKey(key: string) {
    let exists: boolean = false;
    setCurrentWord(
      currentWord.map((prevLetter) => {
        if (prevLetter.letter === key) {
          exists = true;
          gameStatus = "";
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
    if (rounds.current < 9 && !exists) {
      setLanguageTags((prevTags) =>
        prevTags.map((tag, index) => {
          return index === rounds.current - 1
            ? { ...tag, isDismissed: true }
            : tag;
        })
      );

      tagToDismiss.current = languageTags[rounds.current].name;
      if (rounds.current >= 8) {
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
      rounds.current++;
    }
  }

  const allGood = currentWord.every((letter) => letter.status === "good");
  if (allGood) {
    gameStatus = "win";
  } else if (rounds.current > 8) {
    gameStatus = "gameOver";
  } else if (rounds.current > 0 && tagToDismiss) {
    gameStatus = "farewell";
  }

  function handleNewGame() {
    setKeyboardKeys(initializeKeyboard());
    setLanguageTags(initializeTags());
    rounds.current = 0;
    gameStatus = "newGame";
    setCurrentWord(initializeCurrentWord());
    tagToDismiss.current = "";
  }

  return (
    <main>
      <GameStatus gameStatus={gameStatus} tagToDismiss={tagToDismiss.current} />
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
