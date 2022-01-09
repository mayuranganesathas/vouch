import router from "next/router";
import React, { useState } from "react";
import { useAuth } from "../../lib/authContext";

export interface UserProfileProps {
  userHrFirstName: string;
  userHrLastName: string;
}

const UserProfile = ({ userHrFirstName, userHrLastName }: UserProfileProps) => {
  const [isHidden, setIsHidden] = useState(false);

  const { signOut } = useAuth();
  const revealMenu = () => {
    setIsHidden(!isHidden);
  };

  const signOutGoogle = () => {
    signOut;
    router.push("/login");
  };
  return (
    <div className="">
      <div
        onClick={revealMenu}
        className="font-bold text-white rounded-full bg-black flex items-center justify-center font-mono p-3 cursor-pointer select-none	"
      >
        {userHrFirstName}
        {userHrLastName}
      </div>
      {isHidden && (
        <div className="bg-gray-100 absolute space-y-48 	py-1 rounded-md">
          <div className="">
            <span
              className="block text-black cursor-pointer hover:text-red"
              onClick={signOut}
            >
              Sign Out
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
