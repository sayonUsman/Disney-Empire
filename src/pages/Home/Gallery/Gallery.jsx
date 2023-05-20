import { useEffect, useState } from "react";

const Gallery = () => {
  const [exhibitionToys, setExhibitionToys] = useState([]);

  useEffect(() => {
    fetch("https://disney-empire.vercel.app/")
      .then((res) => res.json())
      .then((data) => setExhibitionToys(data));
  }, []);

  return (
    <>
      {exhibitionToys.map((toy) => (
        <div className="flex mx-auto" key={toy._id}>
          <div className="card rounded-lg w-96 shadow-lg shadow-pink-500 mt-5">
            <figure className="px-10 pt-10">
              <img
                src={toy.image}
                alt="Doll Image"
                className="h-96 rounded-lg"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{toy.short_description}</h2>

              <div className="card-actions">
                <button className="btn rounded-md bg-info text-black hover:text-white mt-3">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Gallery;
