import './App.css';
import './components/PersonCard';
import PersonCard from './components/PersonCard';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <PersonCard firstname="amro" lastname="othman" age="18" hair="black"/>
      <PersonCard firstname="momen" lastname="kittaneh" age="27" hair="black"/>
      <PersonCard firstname="mohannad" lastname="salman" age="24" hair="black"/>
      <PersonCard firstname="will" lastname="smith" age="52" hair="black"/>
      <PersonCard firstname="emma" lastname="watson" age="31" hair="blonde"/>
      </header>
    </div>
  );
}

export default App;
