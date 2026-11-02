import type { Pokemon } from "../types/Pokemon";

type Props = {
  itemsList: Pokemon[];
};

export function Index(props: Props) {
  return (
    <>
      <table className="table">
        {props.itemsList.map(item => (
          <tr key={item.name}>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.level}</td>
            <td>{item.inPossession ? "✅" : "❌"}</td>
          </tr>
        ))}
      </table>
    </>
  )
}
