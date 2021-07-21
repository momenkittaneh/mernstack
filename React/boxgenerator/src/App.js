import { useState } from 'react'
import './App.css';
import Boxgen from './components/Boxgen';
import Sucsess from './components/Sucsess';
function App() {
  const [bogen,setbogen]=useState([])
  const hello =(generator) =>{
    setbogen(bogen.concat(generator))
  }
  return (
    <div className="App">
      <Boxgen lift= {hello} />
      <Sucsess de = {bogen}/>
    </div>
  );
}

export default App;
