import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
function App() {
  document.body.style.backgroundColor = '#789593';
  return (
    <>
      <Router>
        <Navbar/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
