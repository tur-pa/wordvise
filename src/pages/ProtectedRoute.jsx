import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const naviagte = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) naviagte("/");
    },
    [isAuthenticated, naviagte]
  );

  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
