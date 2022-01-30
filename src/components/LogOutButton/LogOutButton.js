import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import css from "./LogOutButton.module.css";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button
        className={css.logout}
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Log Out
      </button>
    )
  );
};

export default LogoutButton;

//
