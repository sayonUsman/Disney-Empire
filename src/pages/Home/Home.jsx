import useTitle from "../../hooks/useTitle";
import Gallery from "./Gallery/Gallery";
import Header from "./Header/Header";

const Home = () => {
  useTitle("Home");

  return (
    <div className="container mx-auto mb-10">
      <Header></Header>

      <div className=" bg-gradient-to-t from-white to-pink-200 pt-3 pb-3 text-center text-xl lg:text-3xl font-semibold md:mb-3 rounded">
        Gallery
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <Gallery></Gallery>
      </div>
    </div>
  );
};

export default Home;
