import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthContextProviders";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    fetch(`https://disney-empire.vercel.app/my_toys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) {
          setShowToast(true);
        } else {
          setMyToys(data);
        }
      });
  }, [user?.email]);

  return (
    <div className="container mx-auto mt-10">
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Available Qty</th>
              <th>Price</th>
              <th>Update Details</th>
              <th>Delete Toy</th>
            </tr>
          </thead>

          {myToys &&
            myToys.map((toy) => (
              <tbody key={toy._id}>
                <tr>
                  <th></th>
                  <td>{toy.sellerName}</td>
                  <td>{toy.toyName}</td>
                  <td>{`${toy.quantity} Dolls`}</td>
                  <td>{`$${toy.price}`}</td>
                  <td>
                    <button className="link link-hover">Update</button>
                  </td>

                  <td>
                    <button className="link link-hover">Delete</button>
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>

      {showToast && (
        <div className="toast toast-end">
          <div className="alert alert-info">
            <div>
              <span>You have no toy to view in the list.</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyToys;
