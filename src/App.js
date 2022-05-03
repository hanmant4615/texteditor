
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

function App() {
  const [mode, setmode] = useState('light'); //for checking mode
  const togglemode=()=>
  {
    if (mode==='light')
    {
      setmode("dark");
      document.body.style.background = "#042743"
      document.body.style.color="white"
    }
    else{
      setmode("light");
      document.body.style.background = "white"
      document.body.style.color="black"
    }
  }
  return (
    <>
  <Navbar title="HANMANT" mode ={mode} togglemode = {togglemode}></Navbar>
  <TextForm head = " matter" mode ={mode}></TextForm>
  
    </>
   
  );
}

export default App;
