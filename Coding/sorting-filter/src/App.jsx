import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ProductForm from './components/ProductForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ProductForm/>
    </div>
  )
}

export default App
