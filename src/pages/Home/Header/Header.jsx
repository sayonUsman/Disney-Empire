import banner from "../../../assets/banner.png";

const Header = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    ></div>
  );
};

export default Header;
