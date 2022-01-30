import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogOutButton/LogOutButton";
import WikiPigeon from "../WikiPigeon/WikiPigeon";

function App() {
  return (
    <div>
      <LoginButton />
      <WikiPigeon />
    </div>
  );
}

export default App;
