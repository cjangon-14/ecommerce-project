import { Routes,Route } from 'react-router'
import './App.css'
import HomePage from './components/HomePage'

function App() {

  return (
    
    <Routes>
      <Route path = '/' element = {<HomePage />} /> 
      <Route path='test' element={<div>Teest Page</div>} />
      <Route path='*' element={<div>404 Not Found</div>} />
      <Route path='/test/test' element={<div>Test Test Page</div>} />
    </Routes>

  )
}

export default App
