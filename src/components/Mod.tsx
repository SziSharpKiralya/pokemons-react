import type { Pokemon } from "../types/Pokemon";

type Props = {
  itemsList: Pokemon[];
  InPossessionEvent: (id: number) => void;
};

export function Mod(props: Props) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Lvl</th>
            <th>Owned</th>
            <th>Change Possession</th>
          </tr>
        </thead>
        <tbody>
          {props.itemsList.map(item => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>{item.level}</td>
              <td>{item.inPossession ? "✅" : "❌"}</td>
              <td><button onClick={() => { props.InPossessionEvent(item.id) }}>👑</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
