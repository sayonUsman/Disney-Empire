import { useLoaderData } from "react-router-dom";

const Details = () => {
  const toy = useLoaderData();

  return (
    <div className="container mx-auto min-h-screen">
      <div className="flex justify-center flex-wrap mt-5 md:mt-12">
        <div className="card rounded-lg w-full shadow-lg shadow-sky-500 mt-7 md:m-10 md:mt-4">
          <figure className="px-10 pt-10">
            <img
              src={toy.toyPicture}
              alt="Doll Image"
              className="h-96 rounded-lg"
            />
          </figure>

          <div className="card-body">
            <p>
              <span className="font-semibold">Seller Name: </span>
              {toy.sellerName}
            </p>

            <p>
              <span className="font-semibold">Seller Email: </span>
              {toy.sellerEmail}
            </p>

            <p>
              <span className="font-semibold">Toy Name: </span> {toy.toyName}
            </p>

            <p>
              <span className="font-semibold">Price: </span> ${toy.price}
            </p>

            <p>
              <span className="font-semibold">Rating: </span> {toy.rating}*
            </p>

            <p>
              <span className="font-semibold">Available: </span> {toy.quantity}{" "}
              Dolls
            </p>

            <p>
              <span className="font-semibold">Details: </span> {toy.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
