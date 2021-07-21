import './App.css';
import PersonCard from    "./components/PersonCard";
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <PersonCard firstName="John" lastName="Smith" age={ 60 } hairColor="Brown" /> 
      <PersonCard firstName="emma" lastName="watson" age={ 31 } hairColor="Brown" /> 
      <PersonCard firstName="bonnie" lastName="wright" age={ 30 } hairColor="Brown" /> 
      <PersonCard firstName="amro" lastName="othman" age={ 18 } hairColor="Brown" /> 

      </header>
    </div>
  );
}

export default App;
