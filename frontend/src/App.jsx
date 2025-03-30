import './App.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import VaccinationReminders from  './VaccinationReminders/VaccinationReminders'
import SetReminder from  './SetReminder/SetReminder'
import WelcomePage from './WelcomePage/Welcome';


function App() {
  return (
    <div className="app-background">
      <Navbar />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="vaccination-reminders" element={ <VaccinationReminders />} />
        <Route path="set-reminder/:type" element={ <SetReminder />} />
        </Routes>
    </div>
  );
}

export default App;