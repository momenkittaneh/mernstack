import './App.css';
import { Router } from '@reach/router';
import Main from './views/Main'
import Detail from './views/details';
import Update from './views/update';
function App() {


  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Main path="/" />
          <Detail path="/product/:id" />
          <Update path= "/product/:id/edit" />

        </Router>
        
      </header>

    </div>
  );
}

export default App;
