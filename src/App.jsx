
import './App.css'
import Carreers from './components/Carreers'
import Company from './components/Company'
import Navbar from './components/Navbar'

function App() {


  return (
    <div className=' m-0 p-0 overflow-x-hidden '>
          <Navbar/>
          <Company/>
          <Carreers/>
    </div>
  )
}

export default App
