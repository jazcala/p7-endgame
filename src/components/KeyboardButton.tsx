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

  const srOnly = (
    <section
      className="sr-only"
      aria-live="polite"
      role="status"
      aria-label={`sr-${letter}`}
    >
      <p>
        {status === "good"
          ? `Correct! The letter ${letter} is in the word`
          : ""}
        {status === "wrong"
          ? `Sorry! The letter ${letter} is not in the word.`
          : ""}
      </p>
    </section>
  );
  return (
    <>
      {srOnly}
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
    </>
  );
}
