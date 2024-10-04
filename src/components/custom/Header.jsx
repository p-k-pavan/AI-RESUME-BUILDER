import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";

const Header = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  return (
    <div className="p-3 px-5 shadow-md flex items-center justify-between">
      <Link to={'/'}>
      <img src="/logo.svg" width={100} height={100} />
      </Link>
      {isSignedIn ? (
        <div className="flex items-center gap-4">
          <Link to={'/dashboard'}>
          <Button variant="outline">DashBoard</Button>
          </Link>
          <UserButton  />
        </div>
      ) : (
        <Link to={"/auth/sign-in"}>
          <Button>Get Started</Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
