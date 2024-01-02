
import './App.css'
import Parent from './components/Parent'
import CounterContext from './context/CounterContext'

function App() {
 

  return (
    <CounterContext>
      <Parent/>
    </CounterContext>
  )
}

export default App
