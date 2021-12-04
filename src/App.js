import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Header from './component/Header';
import Schedules from './screens/Schedules';
import Header from './component/Header';
import Counters from './screens/Counters';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header title="Schedule"/>
          
            <Routes>
              <Route path="/" element={<Schedules />}></Route>
              <Route path="/counter" element={<Counters/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
