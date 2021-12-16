import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { get } from "../http/actions";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    get("/users/user")
      .then(() => {
        setUser(true);
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  }, []);
  console.log("user", user);

  const logout = () => {
    get("/users/logout")
      .then((results) => {
        console.log("This is our user", results.data);
        setUser(null);
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  };
  return (
    <div className="navbar">
      <div>
        <p>
          <Link to="/">Let It Grow</Link>
        </p>
      </div>
      <div>
        {!user ? (
          <div>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Log In</Link>
          </div>
        ) : (
          <div>
            <Link to="/user">Profile</Link>
            <Link to="/" onClick={logout}>
              Log Out
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
