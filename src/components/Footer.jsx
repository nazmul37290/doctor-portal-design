import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import logo from "../assets/images/logo-light.png";

const Footer = () => {
  return (
    <div className="mt-32 bg-main">
      <footer className="footer  max-w-[1200px] mx-auto py-24 text-[#fffff5] p-10">
        <aside className="w-[250px] ">
          <img src={logo} alt="" />
          <p className="mt-4 text-[#ffff]">
            123 Main Street Anytown, USA Postal Code: 12345
          </p>
          <p className="mt-4 text-[#ffff]">
            Support: support@oyolloo.com (Available : 10:00am to 07:00pm)
          </p>
        </aside>
        <nav className="text-[#ffff]">
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Success Page</a>
          <a className="link link-hover">Terms and conditions</a>
        </nav>
        <nav className="text-[#ffff]">
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Scheduling</a>
          <a className="link link-hover">Contact us</a>
          <a className="link link-hover">Patient Portal</a>
        </nav>
        <nav className="text-[#ffff]">
          <h6 className="footer-title text-[#ffff]">Follow us</h6>
          <div className="grid grid-flow-col text-3xl gap-4 text-[#ffff]">
            <a className="text-[#ffff]">
              <FaFacebook className="text-[#ffff]" />
            </a>
            <a>
              <FaInstagram />
            </a>
            <a>
              <FaLinkedin />
            </a>
            <a>
              <FaYoutube />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
