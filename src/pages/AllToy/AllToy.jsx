import TableBody from "./TableBody/TableBody";

const AllToy = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Details</th>
            </tr>
          </thead>

          <TableBody></TableBody>
        </table>
      </div>
    </div>
  );
};

export default AllToy;
