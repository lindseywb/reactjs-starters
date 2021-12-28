export default function Performers({performers}){
  return(
    <>
      <h4>Performers</h4>
      <ul>
        {performers.map((performer,index) => (
            <li key={index} className="performer">
                {performer.name}: {performer.startYear} {performer.endYear && ' — ' + performer.endYear }
            </li>
        ))}
      </ul>
    </>
  )
}
