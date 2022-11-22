import { useState } from 'react'
import './App.css'
import QuotesBox from './components/QuotesBox'
import quotes from './JSON/quotes.json'
import colors from './JSON/colors.json'



function App() {

  
  const getRandomFromArray = arr => {
    const indexRandom = Math.floor(arr.length * Math.random())
    
    return arr[indexRandom]
  }
  
  const [quotesRandom, setQuotesRandom] = useState(getRandomFromArray(quotes))

  const [colorRandom, setColorRandom] = useState (getRandomFromArray(colors))

  const handleClick = () => {
    setQuotesRandom(getRandomFromArray(quotes))
    setColorRandom(getRandomFromArray(colors))
  }

  const objStyle = {
    backgroundColor: colorRandom,
    color: colorRandom
    }

  return (
    <div className="App" style={objStyle} >
      <QuotesBox 
      quotesRandom={quotesRandom} 
      handleClick={handleClick}
      colorRandom={colorRandom}
      />
    </div>
  )
}

export default App
