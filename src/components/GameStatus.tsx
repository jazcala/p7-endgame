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
  const messageForFarewell = //TODO Pass down tag
    <p>{`"Farewell ${tagToDismiss}"`} 🫡</p>;

  const messageForGameOver = (
    <>
      <p className="firstLine">Game Over!</p>
      <p className="secondLine">You lose! Better start learning Assembly 😭</p>
    </>
  );

  function setMessage(gameStatus: string) {
    if (gameStatus === "win") {
      return messageForWin;
    } else if (gameStatus === "farewell") {
      return messageForFarewell;
    } else if (gameStatus === "gameOver") {
      return messageForGameOver;
    }
  }

  return (
    <div className={`messageContainer ${gameStatus}`}>
      {setMessage(gameStatus)}
    </div>
  );
}
