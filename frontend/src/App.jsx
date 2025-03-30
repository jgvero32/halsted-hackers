import './App.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import VaccinationReminders from  './VaccinationReminders/VaccinationReminders'
import SetReminder from  './SetReminder/SetReminder'
import WelcomePage from './WelcomePage/Welcome';
import Home from  './Home/Home'
import { useAuth0 } from '@auth0/auth0-react';


function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(isAuthenticated)

  return (
    <div className="app-background">
      <Navbar />
      {!isLoading && (
        <Routes>
          <Route path="/" element={
            user? <Navigate to="/home" /> : <WelcomePage />
          } />
          <Route path="/vaccination-reminders" element={
            user? <VaccinationReminders /> : <Navigate to="/" />
          } />
          <Route path="/set-reminder/:type" element={ 
            user? <SetReminder /> : <Navigate to="/" />
          } />
          <Route path="/home" element={
            <Home />
          } />
      </Routes>
    )}
    </div>
  );
}

export default App;