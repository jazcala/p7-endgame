import { keyboardProps } from "../types/types";
import KeyboardButton from "./KeyboardButton";

export default function Keyboard({
  keyboardKeys,
  handleSelectKey,
  gameStatus,
}: {
  keyboardKeys: keyboardProps[];
  handleSelectKey: (letter: string) => void;
  gameStatus: string;
}) {
  return (
    <section className="keyboard">
      {keyboardKeys.map((key: keyboardProps, index) => (
        <KeyboardButton
          key={index}
          keyAttributes={key}
          handleSelectKey={handleSelectKey}
          gameStatus={gameStatus}
        />
      ))}
    </section>
  );
}
