import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const _questions = localStorage.getItem("questions");
    if (!_questions) {
      navigate("/");
    } else if (_questions && JSON.parse(_questions).length === 0) {
      navigate("/");
    }
  }, []);

  return <Outlet />;
};

export default ProtectedRoute;
