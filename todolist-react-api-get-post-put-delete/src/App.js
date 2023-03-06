import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Editdata from './pages/Editdata';
import Adddata from './pages/Adddata';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/editdata/:dataid' element={<Editdata />} />
        <Route path='/adddata' element={<Adddata />} />
      </Routes>
    </Router>

  );
}

export default App;
