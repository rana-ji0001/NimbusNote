

import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/noteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';


function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
   const [alert,setAlert] = useState(null);
  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type:type,

    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  return (
    <>
      <NoteState>
        <div className="App">
          <Router>
            <Navbar token={token} setToken={setToken}/>
            <div className="container">
              <Routes>
                <Route path='/' element={<Home showAlert={showAlert} setToken={setToken}/>} />
                <Route path='/about' element={<About showAlert={showAlert} setToken={setToken}/>} />
                <Route path='/login' element={<Login showAlert={showAlert} setToken={setToken}/>} />
                <Route path='/signup' element={<Signup showAlert={showAlert} setToken={setToken}/>} />
              </Routes>
            </div>
            <Alert alert={alert}/>
          </Router>
        </div>
      </NoteState>
    </>
  );
}

export default App;
