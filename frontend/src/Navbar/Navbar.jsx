import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className="source-sans-3 navbar">
        <div className="navbar-left">
          <img src="/safety-pin.png" alt="safety-pin" style={{ width: '40px' }} />
          <div className="title-font">Safety Pinpoint</div>
        </div>
        <div className="navbar-right ">
          <Link to="/home">See The Data!</Link>
          <Link to="/vaccination-reminders">Vaccination Reminders</Link>
          <Link to="/as-to-qs">Answers To Your Questions</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;