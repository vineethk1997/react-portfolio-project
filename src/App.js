import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Navigation from './Components/Navigation';
import Projects from './Components/Projects';

function App() {
  return (
    <>
    <div className="App">
      <Router>
      <Navigation/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/projects' element={<Projects/>}/>

      </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
