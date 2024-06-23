import { useDispatch, useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { setUser } from "../redux/reducers/user";
import { jwtDecode } from "jwt-decode";

const privateroutes = () => {
  var dispatch = useDispatch();
  // ! Get token from localstorage
  const token = localStorage.getItem("jwt");
  if (token) {
    // ! Decode the jwt token
    const decode = jwtDecode(token);
    if (decode.user_id) {
      console.log(decode);
      // ! Set a new state with dispatch
      dispatch(
        setUser({
          email: decode.email,
          emailVerified: decode.email_verified,
          uid: decode.user_id,
          isAuthenticated: true,
        })
      );
    }
  } else {
    dispatch(
      setUser({
        isAuthenticated: false,
      })
    );
  }
  // ! Access the current user state
  var userData = useSelector((state) => state.user);
  return userData.isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default privateroutes;
