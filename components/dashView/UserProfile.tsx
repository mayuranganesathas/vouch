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
    <div className="space-y-2  ">
      <div
        onClick={revealMenu}
        className="font-bold text-white rounded-full bg-blue-500 flex items-center justify-center font-mono p-3 cursor-pointer select-none space-y-4	"
      >
        {userHrFirstName.charAt(0)}
        {userHrLastName.charAt(0)}
      </div>
      {isHidden && (
        <div className="divide-y divide-blue-200 absolute bg-gray-100 p-0.5">
          <div
            className="p-1 hover:bg-VouchGreen hover:text-white cursor-pointer shadow-lg rounded-lg"
            onClick={signOutGoogle}
          >
            Sign Out
          </div>
          {/* <div className="p-1 hover:bg-VouchGreen hover:text-white cursor-pointer">
            Support
          </div> */}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
