import logo from './logo.svg';
import './App.css';
import { useState} from "react"
import axios from "axios"

function App() {
  const [quote , setQuote] = useState("")

  const getQuote = () => {
    axios.get("https://api.whatdoestrumpthink.com/api/v1/quotes/random")
    .then(response => {console.log(response.data.message)
    setQuote(response.data.message)
  }).catch(err => {
console.log(err)
    })
  }
  return (
    <div className="App">
      <button onClick={getQuote}>get quote</button>
      {quote && <h4>the idiot says "{quote}"</h4>}
    </div>
  );
}

export default App;