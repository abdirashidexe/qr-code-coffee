import { useState } from 'react'
import './index.css'
import moneyGif from "/public/money.gif"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
    <h1>QR Code Redirected</h1>
    <img src={moneyGif}></img>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
      </div>
    <p>© abdirashid 2026</p>
    </>
  )
}

export default App
