import React from 'react';
import {Routes,Route} from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<About/>}/>
        <Route exact path="/projects" element={<Projects/>}/>
        
        <Route exact path="/contact" element={<Contact/>}/>
        
   
      </Routes>
    </div>
  );
}

export default App;
