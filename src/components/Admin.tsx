import type { Pokemon } from "../types/Pokemon";

type Props = {
  itemsList: Pokemon[];
  EditEvent: (id: number) => void;
  DeleteEvent: (id: number) => void;
};

export function Admin(props: Props) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Lvl</th>
            <th>Owned</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.itemsList.map(item => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>{item.level}</td>
              <td>{item.inPossession ? "✅" : "❌"}</td>
              <td><button onClick={() => { props.EditEvent(item.id) }}>🛠️</button></td>
              <td><button onClick={() => { props.DeleteEvent(item.id) }}>🗑️</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
