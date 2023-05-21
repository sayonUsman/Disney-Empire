import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthContextProviders";
import useTitle from "../../hooks/useTitle";
import { Link } from "react-router-dom";

const MyToys = () => {
  useTitle("My Toys");
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`https://disney-empire.vercel.app/my_toys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) {
          setMessage("You have no toy to view in the list.");
        } else {
          setMyToys(data);
        }
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    setMessage("");

    fetch(`https://disney-empire.vercel.app/my_toys/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const remainingToys = myToys.filter((toy) => toy._id !== id);
        setMyToys(remainingToys);

        if (data.acknowledged) {
          setMessage("Your toy is deleted successfully");
        }
      });
  };

  return (
    <div className="container mx-auto min-h-screen mt-10 mb-5">
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
                    <Link
                      to={`/updates/${toy._id}`}
                      className="link link-hover"
                    >
                      Update
                    </Link>
                  </td>

                  <td>
                    <button
                      className="link link-hover"
                      onClick={() => handleDelete(toy._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>

      {message && (
        <div className="toast toast-end">
          <div className="alert alert-info">
            <div>
              <span>{message}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyToys;
