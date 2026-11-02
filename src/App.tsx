import { PokemonData } from "./data/PokemonData";
import { PageHead } from './components/PageHead'
import { Index } from './components/Index'
import { useState } from 'react'

function App() {
  const [menu, setMenu] = useState("index")

  function goToIndex() {setMenu("index")}
  
  function goToAdmin() {setMenu("admin")}

  function goToMod() {setMenu("mod")}

  function EditEvent(id: number) {

  }

  function DeleteEvent(id: number) {

  }

  return (
    <>
      <PageHead goToIndex={goToIndex} goToAdmin={goToAdmin} goToMod={goToMod}></PageHead>

      {menu === "index" && (
        <Index itemsList={PokemonData}></Index>
      )}
      {menu === "admin" && (
        <>admin</>
      )}
      {menu === "mod" && (
        <>mod</>
      )}
    </>
  )
}

export default App
