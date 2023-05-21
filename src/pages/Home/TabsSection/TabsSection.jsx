import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabsSection = () => {
  const [disneyPrincess, setDisneyPricess] = useState([]);
  const [frozenDolls, setFrozenDolls] = useState([]);
  const [donaldDuck, setDonaldDuck] = useState([]);

  useEffect(() => {
    fetch(`https://disney-empire.vercel.app/all_toy/${"Disney Princess"}`)
      .then((res) => res.json())
      .then((data) => {
        setDisneyPricess(data), console.log(data);
      });

    fetch(`https://disney-empire.vercel.app/all_toy/${"Frozen Dolls"}`)
      .then((res) => res.json())
      .then((data) => {
        setFrozenDolls(data), console.log(data);
      });

    fetch(`https://disney-empire.vercel.app/all_toy/${"Donald Duck"}`)
      .then((res) => res.json())
      .then((data) => {
        setDonaldDuck(data), console.log(data);
      });
  }, []);

  return (
    <Tabs className="mt-12 md:mt-16">
      <TabList className="text-center">
        <Tab>Disney Princess</Tab>
        <Tab>Frozen Dolls</Tab>
        <Tab>Donald Duck</Tab>
      </TabList>

      <TabPanel>
        <div className="flex justify-center flex-wrap mt-3 md:mt-7">
          {disneyPrincess.map((toy) => (
            <div key={toy._id}>
              <div className="card rounded-lg w-96 shadow-lg shadow-sky-500 mt-7 md:m-10 md:mt-4">
                <figure className="px-10 pt-10">
                  <img
                    src={toy.toyPicture}
                    alt="Doll Image"
                    className="h-96 rounded-lg"
                  />
                </figure>

                <div className="card-body items-center text-center">
                  <h2 className="card-title">Name: {toy.toyName}</h2>

                  <h2 className="card-title">Price: ${toy.price}</h2>

                  <h2 className="card-title">Rating: {toy.rating}*</h2>

                  <div className="card-actions">
                    <button className="btn rounded-md bg-info text-black hover:text-white mt-3">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </TabPanel>

      <TabPanel>
        <div className="flex justify-center flex-wrap mt-3 md:mt-7">
          {frozenDolls.map((toy) => (
            <div key={toy._id}>
              <div className="card rounded-lg w-96 shadow-lg shadow-sky-500 mt-7 md:m-10 md:mt-4">
                <figure className="px-10 pt-10">
                  <img
                    src={toy.toyPicture}
                    alt="Doll Image"
                    className="h-96 rounded-lg"
                  />
                </figure>

                <div className="card-body items-center text-center">
                  <h2 className="card-title">Name: {toy.toyName}</h2>

                  <h2 className="card-title">Price: ${toy.price}</h2>

                  <h2 className="card-title">Rating: {toy.rating}*</h2>

                  <div className="card-actions">
                    <button className="btn rounded-md bg-info text-black hover:text-white mt-3">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </TabPanel>

      <TabPanel>
        <div className="flex justify-center flex-wrap mt-3 md:mt-7">
          {donaldDuck.map((toy) => (
            <div key={toy._id}>
              <div className="card rounded-lg w-96 shadow-lg shadow-sky-500 mt-7 md:m-10 md:mt-4">
                <figure className="px-10 pt-10">
                  <img
                    src={toy.toyPicture}
                    alt="Doll Image"
                    className="h-96 rounded-lg"
                  />
                </figure>

                <div className="card-body items-center text-center">
                  <h2 className="card-title">Name: {toy.toyName}</h2>

                  <h2 className="card-title">Price: ${toy.price}</h2>

                  <h2 className="card-title">Rating: {toy.rating}*</h2>

                  <div className="card-actions">
                    <button className="btn rounded-md bg-info text-black hover:text-white mt-3">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default TabsSection;