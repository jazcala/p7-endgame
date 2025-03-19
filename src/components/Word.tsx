import { letterProps } from "../types/types";
export default function Word({ currentWord }: { currentWord: letterProps[] }) {
  return (
    <>
      <section className="word">
        {currentWord.map((letter) => (
          <span
            key={letter.id}
            className={`letter ${letter.status === "wrong" ? "wrong" : ""}`}
          >
            {letter.status === "hidden" ? "" : letter.letter}
          </span>
        ))}
      </section>
      <section className="sr-only" aria-live="polite" role="status ">
        <p>
          Current guess:{" "}
          {currentWord.map((letter) =>
            letter.status === "hidden" ? "blank ." : letter.letter + "."
          )}
        </p>
      </section>
    </>
  );
}
