import { useState } from "react";
import bg_img from "../../assets/bg_image.jpg";

const AddToy = () => {
  const [message, setMessage] = useState("");

  const handleAddToy = (event) => {
    event.preventDefault();
    setMessage("");

    const form = event.target;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const toyName = form.toyName.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const toyPicture = form.url.value;
    const description = form.description.value;
    form.reset();

    const toyDetails = {
      sellerName,
      sellerEmail,
      toyName,
      category,
      price,
      rating,
      quantity,
      toyPicture,
      description,
    };

    fetch("https://disney-empire.vercel.app/add_toy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(toyDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setMessage("Toy is added successfully");
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
          <form onSubmit={handleAddToy}>
            <div className="flex flex-col lg:flex-row">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Seller Name</span>
                </label>

                <input
                  type="text"
                  id="sellerName"
                  className="w-72 md:w-96 input input-bordered text-black border border-black"
                />
              </div>

              <div className="form-control lg:ml-10">
                <label className="label">
                  <span className="label-text font-semibold">Seller Email</span>
                </label>

                <input
                  type="email"
                  id="sellerEmail"
                  className="w-72 md:w-96 input input-bordered text-black border border-black"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:mt-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Toy Name</span>
                </label>

                <input
                  type="text"
                  id="toyName"
                  className="w-72 md:w-96 input input-bordered text-black border border-black"
                />
              </div>

              <div className="form-control lg:ml-10">
                <label className="label">
                  <span className="label-text font-semibold">Category</span>
                </label>

                <input
                  type="text"
                  id="category"
                  className="w-72 md:w-96 input input-bordered text-black border border-black"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:mt-4">
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

              <div className="form-control lg:ml-10">
                <label className="label">
                  <span className="label-text font-semibold">Rating</span>
                </label>

                <input
                  type="text"
                  id="rating"
                  className="w-72 md:w-96 input input-bordered text-black border border-black"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:mt-4">
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

              <div className="form-control lg:ml-10">
                <label className="label">
                  <span className="label-text font-semibold">
                    Toy Picture URL
                  </span>
                </label>

                <input
                  type="url"
                  id="url"
                  className="w-72 md:w-96 input input-bordered text-black border border-black"
                />
              </div>
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
                  value="Add Toy"
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

export default AddToy;
