import GameStatus from "./GameStatus";
import languagetagsData from "../data/tagsData.json";
import { useState } from "react";
import Tags from "./Tags";
import { tagProps } from "../types/types";
import NewGameButton from "./NewGameButton";

export default function Main() {
  //testing values
  const gameStatus: string = "gameOver"; // "farewell" "win" "gameOver"
  const tag = "HTML & CSS";
  const [languageTags, setLanguageTags] = useState<tagProps[]>(() =>
    initializeTags()
  );

  // const word:string = "refactor";
  // const [keyboard,setKeyboard]
  function initializeTags() {
    return languagetagsData.map((tag) => ({ ...tag, isDismissed: true }));
  }

  return (
    <main>
      <GameStatus gameStatus={gameStatus} tagToDismiss={tag} />
      <Tags tagsList={languageTags} />
      <div>Word to guess</div>
      <div>Keyboard</div>
      {(gameStatus === "win" || gameStatus === "gameOver") && <NewGameButton />}
    </main>
  );
}
