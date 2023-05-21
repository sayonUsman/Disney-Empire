import { useState } from "react";
import useTitle from "../../../hooks/useTitle";
import bg_img from "../../../assets/bg_image.jpg";

const Updates = () => {
  useTitle("Updates");
  const currentUrl = window.location.href;
  const [message, setMessage] = useState("");

  const handleUpdates = (event) => {
    event.preventDefault();
    setMessage("");

    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    form.reset();

    const updateDetails = {
      price,
      quantity,
      description,
    };

    fetch(
      `https://disney-empire.vercel.app/my_toys/updates/${
        currentUrl.split("/")[4]
      }`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateDetails),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setMessage("Toy's details is updated successfully");
        }
      });
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bg_img})`,
      }}
    >
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleUpdates}>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Price</span>
              </label>

              <input
                type="text"
                id="price"
                className="w-72 md:w-96 input input-bordered text-black border border-black"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">
                  Available Quantity
                </span>
              </label>

              <input
                type="text"
                id="quantity"
                className="w-72 md:w-96 input input-bordered text-black border border-black"
              />
            </div>

            <div className="form-control mt-7">
              <label className="label">
                <span className="label-text font-semibold">Description</span>
              </label>

              <textarea
                rows="9"
                id="description"
                className="rounded-lg border border-black pl-4 pt-2 pr-4 pb-2"
              ></textarea>
            </div>

            <div className="form-control mt-12">
              <div className="flex mx-auto">
                <input
                  type="submit"
                  id="submit"
                  value="Update"
                  className="w-48 btn"
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      {message && (
        <div className="toast toast-end">
          <div className="alert alert-success">
            <div>
              <span>{message}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Updates;
