import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

//FIX THIS TO IMPORT ALL FROM ONE LINE 
import Home from './Routes/Home';
import About from './Routes/About';
import Projects from './Routes/Project';


function App() {
  return (

    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </div>

  );
}





export default App;

