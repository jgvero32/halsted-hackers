import './VaccinationReminders.css';
import { Link } from 'react-router-dom';

function VaccinationReminders() {
  return (
    <>
      <div className="button-box source-sans-3">
        <span className="reminder-text">
          Schedule Vaccination Reminders <span className="gradient-text">-- For Children</span>
        </span>
        <Link to="/set-reminder/children" className="reminder-button source-sans-3">
          Set Reminder
        </Link>
      </div>
      <div className="button-box source-sans-3">
        <span className="reminder-text">
          Schedule Vaccination Reminders <span className="gradient-text-parents">-- For Parents</span>
        </span>
        <Link to="/set-reminder/parent" className="reminder-button source-sans-3">
          Set Reminder
        </Link>
      </div>
    </>
  );
}

export default VaccinationReminders;