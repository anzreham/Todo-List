import React, {useState, useEffect } from 'react'
import './App.css';
import Input from './components/input.js'
import Task from './components/task.js'

function App() {
  const [list, setlist] = useState([]);


  useEffect(() => {
    const data = localStorage.getItem("my-tier-list");
    if (data) {
      setlist(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("my-tier-list", JSON.stringify(list));
  });
  return (



    <div className ="App">

{
  list.map ((task,i) =>(
    // <Task task = {task}    list = {list} />
         <Task task = {task}   list = {list} index = {i}  setlist = {setlist} />

  ))
}

    <Input  list = {list} setlist = { setlist}/>
    </div>


  );
}

export default App;
