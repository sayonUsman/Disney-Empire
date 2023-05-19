import { Link, useLocation, useNavigate } from "react-router-dom";
import bg_img from "../../assets/bg_image.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthContextProviders";

const LoginPage = () => {
  const { loginWithEmailAndPassword, loginWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setMessage("");
    setErrorMessage("");

    loginWithEmailAndPassword(email, password)
      .then(() => {
        event.target.reset();
        setMessage("Successfully logged in");
        navigate(from, { replace: true });
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
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bg_img})`,
      }}
    >
      <div className="w-96">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>

                <input
                  type="email"
                  id="email"
                  placeholder="email"
                  className="input input-bordered text-black border border-black"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold ">Password</span>
                </label>

                <input
                  type="password"
                  id="password"
                  placeholder="password"
                  className="input input-bordered text-black border border-black"
                  required
                />

                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt font-semibold link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  id="submit"
                  value="Login"
                  className="btn"
                />
              </div>
            </form>

            <p className="text-center mt-2">
              <small className="font-semibold">
                New to this website!!! Please{" "}
                <Link to="/signUp" className="link link-hover text-black">
                  Sign Up
                </Link>
              </small>
            </p>

            <div>
              <h1 className="text-center text-3xl font-semibold mt-7">Or</h1>

              <h1 className="text-center text-xl font-semibold mt-2 mb-2">
                Continue with
              </h1>

              <div className="form-control mt-6">
                <button className="btn" onClick={handleGoogleLogin}>
                  Google
                </button>
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

export default LoginPage;
