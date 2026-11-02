import type { Pokemon } from "../types/Pokemon";

type Props = {
  itemsList: Pokemon[];
  AddEvent: (item: Pokemon) => void;
  EditEvent: (id: number) => void;
  DeleteEvent: (id: number) => void;
};

export function Admin(props: Props) {
  function CreateEvent(e: any) {

    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const newPokemon: Pokemon = {
      id: Math.max(0, ...props.itemsList.map((item) => item.id)) + 1,
      name: formData.get("name")?.toString() ?? "",
      type: formData.get("type")?.toString() ?? "",
      level: Number(formData.get("level") ?? 0),
      inPossession: false
    };

    props.AddEvent(newPokemon);
    e.currentTarget.reset();
  }

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

      <form className="form" onSubmit={CreateEvent}>
        <label className="form-label" htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" />

        <label className="form-label" htmlFor="type">Type:</label>
        <input type="text" name="type" id="type" />

        <label className="form-label" htmlFor="level">Level:</label>
        <input type="number" name="level" id="level" />

        <button type="submit">Submit 📨</button>
      </form>
    </>
  )
}
