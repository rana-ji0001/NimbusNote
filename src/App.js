
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/noteState';

function App() {

  return (
    <>
      <NoteState>
        <div className="App">
          <Router>
            <Navbar />
            <div className="container">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
              </Routes>
            </div>
          </Router>
        </div>
      </NoteState>
    </>
  );
}

export default App;
