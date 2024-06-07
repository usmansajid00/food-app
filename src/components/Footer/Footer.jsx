import { assets } from "../../assets/assets";
import "./footer.scss";

const Footer = () => {
  const fullYear = new Date().getFullYear();
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          {/* <img src={assets.logo} alt="" /> */}
          <h1 className="logo">Foodie baba</h1>
          <p>
            An online food restaurant offers a convenient way to enjoy delicious
            meals from the comfort of your home. With just a few clicks, you can
            explore a diverse menu, place your order, and have it delivered
            swiftly to your doorstep.
          </p>
          <div className="social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delievry</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in touch</h2>
          <ul>
            <li>+9778545646587</li>
            <li>foodiebaba@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        copyright {fullYear} &copy; foodiebaba.com - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
