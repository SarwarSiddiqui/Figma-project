import Logo from "../../Images/AppFrame.jpg";
import HomeIcon from "../../Images/Shape.png";
import activeIcon from "../../Images/Ellipse 1.png";
import starIcon from "../../Images/Iconbutton.png";
import profileIcon from "../../Images/IconAccount.png";
import SearchIcon from "../../Images/SearchIcon.png";

import "./Nav.css";

export default function Navbar() {
  return (
    <div className="nav-section">
      <div className="nav-icons">
        <img src={Logo} className="logo" alt="logo" />
        <div className="nav-sub-icons">
          <div className="active-home-icon">
            <img src={HomeIcon} className="home-icon" alt="bell-shape" />
            <div>
              <img src={activeIcon} alt="bell-shape-ellipse" />
            </div>
          </div>
          <img src={starIcon} alt="star-shape" className="Nav-button" />
          <img src={profileIcon} alt="Account-icon" className="Nav-Account" />
        </div>
      </div>

      <form className="nav-input-form">
        <input
          placeholder="location"
          type="text"
          className="nav-input input-location"
        />
        <input
          placeholder="Guest"
          type="text"
          className="nav-input input-guests"
        />
        <img src={SearchIcon} className="search-icon" />
      </form>
    </div>
  );
}
