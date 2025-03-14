import { tagProps } from "../types/types";
export default function Tags({ tagsList }: { tagsList: tagProps[] }) {
  return (
    <section className="tagsList">
      {tagsList.map((tag) => (
        <button
          key={tag.id}
          style={{
            backgroundColor: `${tag.backgroundColor}`,
            color: `${tag.color}`,
          }}
        >
          {tag.name}
        </button>
      ))}
    </section>
  );
}
