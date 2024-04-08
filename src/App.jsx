
import './App.css'
import Benefits from './components/Benefits'
import Carreers from './components/Carreers'
import Company from './components/Company'
import ContactCards from './components/ContactComponent'
import Navbar from './components/Navbar'
import Suppliers from './components/Suppliers'

function App() {


  return (
    <div className=' m-0 p-0 overflow-x-hidden bg-black '>
          <Navbar/>
          <Company/>
          <Carreers/>
          <Benefits/>
          <ContactCards/>
          <Suppliers/>
    </div>
  )
}

export default App
