import React, { useContext } from 'react'
import { AppContext } from '../../AppContext'
import { Button } from 'reactstrap';

export default function Header() {
  const {count, setCount} = useContext(AppContext);

  return (
    <div>
      <h1>Header</h1>
      <h1>Count: {count}</h1>
      <Button onClick={()=>setCount(count+1)}>Count up</Button>
      <hr></hr>
    </div>
  )
}
