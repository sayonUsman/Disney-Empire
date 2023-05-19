import bg_img from "../../assets/bg_image.jpg";

const AddToy = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bg_img})`,
      }}
    >
      <div className="card">
        <div className="card-body">
          <form>
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

            <div className="flex flex-col lg:flex-row">
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

            <div className="flex flex-col lg:flex-row">
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

            <div className="flex flex-col lg:flex-row">
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

            <div className="form-control mt-10">
              <label className="label">
                <span className="label-text font-semibold">Description</span>
              </label>

              <textarea
                rows="9"
                className="rounded-lg border border-black pl-4 pt-2 pr-4 pb-2"
              ></textarea>
            </div>

            <div className="form-control mt-10">
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
    </div>
  );
};

export default AddToy;
