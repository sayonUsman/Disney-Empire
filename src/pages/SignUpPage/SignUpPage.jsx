import { Link } from "react-router-dom";
import bg_img from "../../assets/bg_image.jpg";

const SignUpPage = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bg_img})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>

        <div className="w-96 text-center text-neutral-content">
          <div className="card">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white ">Name</span>
                </label>

                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered text-black"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white ">Email</span>
                </label>

                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered text-black"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white ">Password</span>
                </label>

                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered text-black"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white ">Photo URL</span>
                </label>

                <input
                  type="url"
                  placeholder="Photo URL"
                  className="input input-bordered text-black"
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn bg-[#daf5fa] text-black hover:text-white">
                  Sign Up
                </button>
              </div>

              <p className="text-center mt-2">
                <small>
                  Already have an account? Please{" "}
                  <Link to="/login" className="link link-hover text-black">
                    Login
                  </Link>
                </small>
              </p>

              <div>
                <h1 className="text-center text-3xl font-semibold mt-7">Or</h1>

                <h1 className="text-center text-xl font-semibold mt-2 mb-2">
                  Continue with
                </h1>

                <div className="form-control mt-6">
                  <button className="btn bg-[#daf5fa] text-black hover:text-white">
                    Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
