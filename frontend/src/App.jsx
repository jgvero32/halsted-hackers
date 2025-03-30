import './App.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import VaccinationReminders from  './VaccinationReminders/VaccinationReminders'
import SetReminder from  './SetReminder/SetReminder'


function App() {
  return (
    <div className="app-background">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/vaccination-reminders" />} />
        <Route path="vaccination-reminders" element={ <VaccinationReminders />} />
        <Route path="set-reminder/:type" element={ <SetReminder />} />
        </Routes>
    </div>
  );
}

export default App;