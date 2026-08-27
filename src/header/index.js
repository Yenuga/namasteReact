import myLogo from "url:./myLogo.png";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={myLogo} alt="FoodieHub logo" />
      <div className="nav-items">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </div>
    </div>
  );
};

export default Header;
