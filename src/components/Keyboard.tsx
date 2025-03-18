import { keyboardProps } from "../types/types";

export default function Keyboard({
  keyboardKeys,
  handleSelectKey,
  gameStatus,
}: {
  keyboardKeys: keyboardProps[];
  handleSelectKey: (letter: string) => void;
  gameStatus: string;
}) {
  function disableKey(key: keyboardProps) {
    if (
      gameStatus === "gameOver" ||
      key.status === "good" ||
      key.status === "wrong"
    ) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <section className="keyboard">
      {keyboardKeys.map((key) => (
        <button
          key={key.letter}
          className={`key ${key.status}`}
          disabled={disableKey(key)}
          onClick={() => handleSelectKey(key.letter)}
        >
          {key.letter}
        </button>
      ))}
    </section>
  );
}

// key.status === "good" || key.status === "wrong" ? true : false
