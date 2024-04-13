// App.jsx
 
import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Company from './components/Company';
import Carreers from './components/Carreers';


function App() {
  return (
   
      <div className='m-0 p-0'>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/company" element={<Company />} />
          <Route path="/careers" element={<Carreers />} />

        </Routes>
      </div>
    
  );
}

export default App;
