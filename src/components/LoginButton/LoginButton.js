import { useAuth0 } from "@auth0/auth0-react";

import css from "./LoginButton.module.css";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button class={css.login} onClick={() => loginWithRedirect()}>
        Log In
      </button>
    )
  );
};

export default LoginButton;
