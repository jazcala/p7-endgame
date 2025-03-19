import { keyboardProps } from "../types/types";

export default function KeyboardButton({
  keyAttributes,
  handleSelectKey,
  gameStatus,
}: {
  keyAttributes: keyboardProps;
  handleSelectKey: (letter: string) => void;
  gameStatus: string;
}) {
  const { status, letter } = keyAttributes;
  const disabled: boolean =
    gameStatus === "gameOver" || status === "good" || status === "wrong"
      ? true
      : false;
  return (
    <button
      key={letter}
      className={`key ${status}`}
      disabled={disabled}
      aria-disabled={disabled}
      aria-label={`Letter ${letter}`}
      onClick={() => handleSelectKey(letter)}
    >
      {letter}
    </button>
  );
}
