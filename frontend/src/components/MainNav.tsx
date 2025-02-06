import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";

const MainNav = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      variant="ghost"
      className="hover:text-red-600 text-xl font-bold hover:bg-white"
      onClick={async () => await loginWithRedirect()}
    >
      Login
    </Button>
  );
};

export default MainNav;
