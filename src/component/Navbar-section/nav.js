import Nav from "./Nav.css";
import Iconbutton from "../../Images/Iconbutton.png";
import IconAccount from "../../Images/IconAccount.png";
import Shape from "../../Images/Shape.png";
import Ellipse from "../../Images/Ellipse 1.png";
import AppFrame from "../../Images/AppFrame.jpg";

export default function Navbar() {
  return (
    <div className="main-container">
      <div id="container">
        <img src={AppFrame} alt="Frame-image" className="Nav-frame" />
        <img src={Shape} alt="bell-shape" className="Nav-Shape" />
        <img src={Iconbutton} alt="star-shape" className="Nav-button" />
        <img src={IconAccount} alt="Account-icon" className="Nav-Account" />
      </div>
      <div className="Nav-bell">
        <img src={Ellipse} alt="bell-shape-ellipse" className="Nav-ellipse" />
      </div>
    </div>
  );
}













