import { Link } from "react-router-dom";
import error404 from "../../assets/Error_404.jpg";

const Error_404 = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${error404})`,
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>

        <div className="text-center text-neutral-content">
          <h1 className="text-center text-3xl md:text-5xl font-bold text-[#3af3a6]">
            Page not found
          </h1>

          <h1 className="text-center text-[#3af3a6] text-sm md:text-lg font-semibold mt-2">
            Sorry, we couldn’t find the page you’re looking for.
          </h1>

          <div className="mt-4">
            <Link to="/">
              <button className="btn">Go Back Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error_404;
