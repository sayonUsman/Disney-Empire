import { Link, useNavigate } from "react-router-dom";
import bg_img from "../../assets/bg_image.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthContextProviders";

const SignUpPage = () => {
  const { createNewUser, loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setMessage("");
    setErrorMessage("");

    if (password.length < 6) {
      form.reset();
      setErrorMessage("Password must be at least 6 characters");
      return;
    }

    createNewUser(email, password)
      .then(() => {
        form.reset();
        setMessage("Successfully signed up");
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const handleGoogleLogin = () => {
    setMessage("");
    setErrorMessage("");

    loginWithGoogle()
      .then(() => {
        setMessage("Successfully logged in");
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

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
              <form onSubmit={handleSignUp}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white ">Name</span>
                  </label>

                  <input
                    type="text"
                    id="name"
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
                    id="email"
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
                    id="password"
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
                    id="url"
                    placeholder="Photo URL"
                    className="input input-bordered text-black"
                  />
                </div>

                <div className="form-control mt-6">
                  <input
                    type="submit"
                    id="submit"
                    value="Sing Up"
                    className="btn bg-[#daf5fa] text-black hover:text-white"
                  />
                </div>
              </form>

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
                  <button
                    className="btn bg-[#daf5fa] text-black hover:text-white"
                    onClick={handleGoogleLogin}
                  >
                    Google
                  </button>
                </div>
              </div>
            </div>
          </div>
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

      {errorMessage && (
        <div className="toast toast-end">
          <div className="alert alert-error">
            <div>
              <span>{errorMessage}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpPage;
