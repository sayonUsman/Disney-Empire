import { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";

const AllToy = () => {
  useTitle("All Toy");
  const [allToy, setAllToy] = useState([]);

  useEffect(() => {
    fetch("https://disney-empire.vercel.app/all_toy")
      .then((res) => res.json())
      .then((data) => setAllToy(data));
  }, []);

  return (
    <div className="container mx-auto mt-10 mb-5">
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Available Qty</th>
              <th>Details</th>
            </tr>
          </thead>

          {allToy.map((toy) => (
            <tbody key={toy._id}>
              <tr>
                <th></th>
                <td>{toy.sellerName}</td>
                <td>{toy.toyName}</td>
                <td>{toy.category}</td>
                <td>{`$${toy.price}`}</td>
                <td>{`${toy.quantity} Dolls`}</td>
                <td>
                  <button className="link link-hover">View Details</button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllToy;
