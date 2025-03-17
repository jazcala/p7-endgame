export default function NewGameButton({
  handleNewGame,
}: {
  handleNewGame: () => void;
}) {
  return (
    <button className="newGameButton" onClick={handleNewGame}>
      New Game
    </button>
  );
}
