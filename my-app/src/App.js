import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import StudentInfo  from './features/studentInfo/index.js';
import './App.css';

function App() {
  return (
    <div className="App">
     <StudentInfo />
    </div>
  );
}

export default App;
