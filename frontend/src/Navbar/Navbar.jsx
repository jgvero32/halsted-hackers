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
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;