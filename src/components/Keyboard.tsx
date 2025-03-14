import { keyboardProps } from "../types/types";

export default function Keyboard({
  keyboardKeys,
}: {
  keyboardKeys: keyboardProps[];
}) {
  return (
    <div className="keyboard">
      {keyboardKeys.map((key) => (
        <button key={key.id} className={`key ${key.status}`}>
          {key.letter}
        </button>
      ))}
    </div>
  );
}
