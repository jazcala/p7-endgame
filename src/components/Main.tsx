import GameStatus from "./GameStatus";

export default function Main() {
  //testing values
  const gameStatus: string = "gameOver"; // "farewell" "win" "gameOver"
  const tag = "HTML & CSS";

  // const word:string = "refactor";
  // const [keyboard,setKeyboard]

  return (
    <main>
      <GameStatus gameStatus={gameStatus} tagToDismiss={tag} />
      <div>Game Status messages section</div>
      <div>Tags</div>
      <div>Word to guess</div>
      <div>Keyboard</div>
      <button className={gameStatus ? "display" : ""}>New Game</button>
    </main>
  );
}
