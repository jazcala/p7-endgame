import { tagProps } from "../types/types";
export default function Tags({ tagsList }: { tagsList: tagProps[] }) {
  return (
    <div className="tagsList">
      {tagsList.map((tag) => (
        <button
          style={{
            backgroundColor: `${tag.backgroundColor}`,
            color: `${tag.color}`,
          }}
        >
          {tag.name}
        </button>
      ))}
    </div>
  );
}
