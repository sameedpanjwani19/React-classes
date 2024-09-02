import React, { useState } from 'react'
import Card from './components/Card'

const App = () => {

  // const [add, setAdd] = useState(0)
  // const[less, setLess]= useState(100)

  // function addCounter(){
  //   setAdd (add+1)
  // }

  // function lessCounter(){
  //   setLess (less-1)
  // }


  return (
    <>
      {/* <button onClick={addCounter}>Add Number {add}</button>
      <button onClick={lessCounter}>Less Number {less}</button> */}

      <Card  title="mehran" description="lorem shbndhabjdbxshcsb" price="3000"/>
    </>
  )
}

export default App
