import Performers from "./Performers";

export default function CharacterList({
	data,
}) {
	return (
		<div className="character-list">
      {data.map((character, index) => (
        <details key={index}>
          <summary>{character.name}</summary>
          <Performers performers={character.performers} />
        </details>
      ))}
		</div>
	);
}
