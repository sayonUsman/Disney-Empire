import logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-gradient-to-t from-[#bdedfa] to-white">
      <div className="container mx-auto ">
        <footer className="footer p-10 text-base-content">
          <div>
            <img src={logo} alt="logo" className="w-16 rounded-full" />
            <p>Since 2023</p>
          </div>

          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>

          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Career</a>
          </div>

          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
