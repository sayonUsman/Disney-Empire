import banner from "../../../assets/banner.png";

const Header = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      ></div>
    </div>
  );
};

export default Header;
