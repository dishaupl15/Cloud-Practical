import './App.css'
import { useState } from 'react'

function App() {

  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  const showMessage = () => {
    setMessage(`Welcome ${name} to Cloud Practical CI/CD Pipeline`)
  }

  return (
    <div className="container">

      <div className="card">

        <h1>Cloud Practical</h1>

        <p>AWS CI/CD Demo Project</p>

        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={showMessage}>
          Submit
        </button>

        <h3>{message}</h3>

      </div>

    </div>
  )
}

export default App