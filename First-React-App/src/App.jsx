import { useState } from 'react'
import './App.css'
import Room from './Room'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Room></Room>
    </div>
  );
}

export default App
