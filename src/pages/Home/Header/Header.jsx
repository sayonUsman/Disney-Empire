import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner from "../../../assets/banner.png";

const Header = () => {
  return (
    <Carousel>
      <div>
        <img src={banner} />
      </div>
    </Carousel>
  );
};

export default Header;
