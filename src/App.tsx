import { PokemonData } from "./data/PokemonData";
import { PageHead } from './components/PageHead'
import { Index } from './components/Index'
import { Admin } from './components/Admin'
import { Mod } from './components/Mod'
import { use, useState } from 'react'

function App() {
  const [menu, setMenu] = useState("index")
  const [pokemons, setPokemons] = useState(PokemonData)

  function goToIndex() {setMenu("index")}
  
  function goToAdmin() {setMenu("admin")}

  function goToMod() {setMenu("mod")}

  function EditEvent(id: number) {

  }

  function DeleteEvent(id: number) {

  }

  function InPossessionEvent(id: number) {
    const updatedData = [...pokemons];
    const index = updatedData.findIndex(allat => allat.id == id);
    updatedData[index].inPossession = !updatedData[index].inPossession;
    setPokemons(updatedData);
  }


  return (
    <>
      <PageHead goToIndex={goToIndex} goToAdmin={goToAdmin} goToMod={goToMod}></PageHead>

      {menu === "index" && (
        <Index itemsList={pokemons}></Index>
      )}
      {menu === "admin" && (
        <Admin itemsList={pokemons} EditEvent={EditEvent} DeleteEvent={DeleteEvent}></Admin>
      )}
      {menu === "mod" && (
        <Mod itemsList={pokemons} InPossessionEvent={InPossessionEvent}></Mod>
      )}
    </>
  )
}

export default App
