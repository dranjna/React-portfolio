import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Main/>} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
