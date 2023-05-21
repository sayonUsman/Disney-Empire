import useTitle from "../../hooks/useTitle";
import Gallery from "./Gallery/Gallery";
import Header from "./Header/Header";
import TabsSection from "./TabsSection/TabsSection";

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

      <div className=" bg-gradient-to-t from-white to-pink-200 pt-3 pb-3 text-center text-xl lg:text-3xl font-semibold mt-12 rounded">
        Shop By Category
      </div>

      <TabsSection></TabsSection>

      <div className="bg-gradient-to-t  from-white to-[#bdedfa] pt-3 pb-3 text-center text-xl lg:text-3xl font-semibold mt-12 md:mb-7 rounded">
        Watch on YouTube
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 mb-14 2xl:mb-16">
        <iframe
          src="https://www.youtube.com/embed/f-OL58H7IOE"
          title="FROZEN 2 Full Movie in English - Cartoon Disney Movies 2020"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-96 sm:w-full h-72 sm:h-96 rounded-none sm:rounded-lg mt-7 lg:mt-0"
        ></iframe>

        <iframe
          src="https://www.youtube.com/embed/Zi4LMpSDccc"
          title="Frozen 2 Official Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-96 sm:w-full h-72 sm:h-96 rounded-none sm:rounded-lg mt-7 lg:mt-0"
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
