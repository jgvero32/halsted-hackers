import './App.css'
import BasicButtonExample from './components/BasicButtonExample';
import Navbar from './Navbar/Navbar';
import { BrowserRouter, Route, Routes, Navigate, useLocation } from 'react-router-dom';

function App() {

  return (
      <div className="app-background">
        <Navbar/>
        <BasicButtonExample />
        <Routes>
            {/* <Route path="/" element={<Navigate to="/home" />} />
            <Route path="home" element={ <Home />} />*/}
          </Routes>
      </div>
  )
}

export default App
