import './Navbar.css';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {

  const { user, isAuthenticated, isLoading } = useAuth0();

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
          {isAuthenticated && (
            <Link to="profile">
              <img src={user.picture || "/avatar.svg"} height="40" widht="40"/>
            </Link>
          )}
          
        </div>
      </div>
    </>
  );
}

export default Navbar;