import { getFarewellText } from "../utils/helpers";
export default function GameStatus({
  gameStatus,
  tagToDismiss,
}: {
  gameStatus: string;
  tagToDismiss: string;
}) {
  const messageForWin = (
    <>
      <p className="firstLine">You win!</p>
      <p className="secondLine">Well done! 🎉</p>
    </>
  );
  const messageForFarewell = <p>{getFarewellText(tagToDismiss)} 🫡</p>;

  const messageForGameOver = (
    <>
      <p className="firstLine">Game Over!</p>
      <p className="secondLine">You lose! Better start learning Assembly 😭</p>
    </>
  );

  function setMessage() {
    if (gameStatus === "win") {
      return messageForWin;
    } else if (gameStatus === "gameOver") {
      return messageForGameOver;
    } else if (tagToDismiss) {
      gameStatus = "farewell";
      return messageForFarewell;
    }
  }

  return (
    <section
      aria-live="polite"
      role="status"
      className={`messageContainer ${gameStatus}`}
    >
      {setMessage()}
    </section>
  );
}
