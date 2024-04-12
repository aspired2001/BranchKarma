// App.jsx
import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Company from './components/Company';
import Carreers from './components/Carreers';
// import Contact from './components/Contact';
// import Industries from './components/Industries';
// import Holdings from './components/Holdings';
// import MissionStatement from './components/MissionStatement';
// import Principles from './components/Principles';
// import Philanthropy from './components/Philanthropy';
// import Insights from './components/Insights';
// import Portal from './components/Portal';

function App() {
  return (
   
      <div className='m-0 p-0 overflow-x-hidden bg-black'>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/company" element={<Company />} />
          <Route path="/careers" element={<Carreers />} />
          {/* <Route path="/contact" element={<Contact />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/mission-statement" element={<MissionStatement />} />
          <Route path="/principles" element={<Principles />} />
          <Route path="/philanthropy" element={<Philanthropy />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/portal" element={<Portal />} /> */}
        </Routes>
      </div>
    
  );
}

export default App;
