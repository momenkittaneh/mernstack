import './App.css';
import { Router } from '@reach/router';
import Main from './views/main';
import Edit from './views/edit';
import New from './views/new'
function App() {
  return (
    <div className="App">
      <Router>
      <Main path= "/" />
      <New path= "/new" />

      <Edit path="/author/:id/edit" />
      </Router>
    </div>
  );
}

export default App;

