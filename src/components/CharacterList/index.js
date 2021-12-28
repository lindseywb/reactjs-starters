
export default function CharacterList({
	data,
}) {
	return (
		<>
      <ul>
        {data.map((character, index) => (
          <li key={index}>{character.name}</li>
        ))}
      </ul>
		</>
	);
}
