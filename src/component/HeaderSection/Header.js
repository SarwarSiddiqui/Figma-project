import Icon from "../../Images/Icon.png";

import "./Header.css";

function HeaderComponent() {
  return (
    <div className="head-section">
      <div className="head-section-edit-icon">
        <img src={Icon} alt="Pen Icon" className="head-section-icon" />
        <h4 className="head-section-edit-text">Edit page</h4>
      </div>
      <h4 className="head-section-editing">Hello Admin!</h4>
    </div>
  );
}

export default HeaderComponent;
