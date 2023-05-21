import { useContext } from "react";
import { AuthContext } from "../providers/AuthContextProviders";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoutes = ({ children }) => {
  PrivateRoutes.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
