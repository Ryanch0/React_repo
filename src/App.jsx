import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"

function App() {
  const [userInput, setUserInput] = useState({ // Default Value
    initialInvestment : 10000,
    annualInvestment : 1200,
    expectedReturn : 6,
    duration : 10
})

const inputIsValid = userInput.duration >= 1;

const handleChange = (inputIdentifier, newValue) =>{
  setUserInput(prevUserInput => {
      return {
          ...prevUserInput,
          [inputIdentifier] : +newValue // 문자열값을 숫자값으로 변환하는것을 강제함
      }
  })
}

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!inputIsValid && <p className="center">Please enter a duration greater than zero</p>}
      {inputIsValid && <Results input={userInput}/> }
    </>
  )
}

export default App
