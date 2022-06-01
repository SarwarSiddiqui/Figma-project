import "./Header.css";
import Icon from "./Images/Icon.png";

function HeaderComponent() {
  return (
    <div class="Head-section">
      <div class="ch">
        <img src={Icon} alt="Pen Icon" class="Icon" />
        <h4 class="Head-text1">Edit page</h4>
      </div>
      <h4 class="Head-text2">Hello Admin!</h4>
    </div>
  );
}

export default HeaderComponent();
