import { PageHead } from './components/PageHead'
import { useState } from 'react'

function App() {
  const [menu, setMenu] = useState("index")

  function goToIndex() {setMenu("index")}
  
  function goToAdmin() {setMenu("admin")}

  function goToMod() {setMenu("mod")}

  return (
    <>
      <PageHead goToIndex={goToIndex} goToAdmin={goToAdmin} goToMod={goToMod}></PageHead>

      {menu === "index" && (
        <>index</>
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
