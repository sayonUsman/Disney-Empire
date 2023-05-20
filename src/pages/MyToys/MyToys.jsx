import TableBody from "./TableBody/TableBody";

const MyToys = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Available Quantity</th>
              <th>Price</th>
              <th>Update Details</th>
              <th>Delete Toy</th>
            </tr>
          </thead>

          <TableBody></TableBody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
