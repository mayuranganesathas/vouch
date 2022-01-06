import React from "react";

export interface UserProfileProps {
  userHrImg: string;
  userHrName: string;
  userHrPosition: string;
}

const UserProfile = ({
  userHrImg,
  userHrName,
  userHrPosition,
}: UserProfileProps) => {
  return (
    <div className="flex py-2 px-4 ">
      <div className=" px-4">
        {userHrImg && (
          <img src={userHrImg} className="" width="50" height="50" />
        )}
      </div>
      <div className=" py-1 flex-wrap">
        <div className="  text-md py-0.5 px-0.5 font-bold"> {userHrName}</div>
        <div className="text-xs text-gray-500 py-0.5 px-0.5">
          {" "}
          {userHrPosition}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
