import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter as Router
import Home from './pages/Home';

function App() {

  return (
    <Router>
      <>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </>
    </Router>
  );
}

export default App;
