import React from "react";
import { useState } from "react";
import UserProfile from "./UserProfile";
import HrCompanyProfile from "./HrCompanyProfile";
import { useAuth } from "../../lib/authContext";
import { ButtonNav } from "../ui/ButtonNav";

const UserIdBarTest = {
  userHrCompanyName: "Google HQ",
  userHrCompanyImage: "/images/Google-logo.png",
  userHrCompanyIndustry: "Tech - SAAS",
  userHrCompanyWebsite: "www.google.com",
  userHrImg: "/images/userprofile.png",
  userHrName: "Brian Lee",
  userHrPosition: "HR Lead",
};

const UserIdBar = () => {
  const { user } = useAuth();

  const [homeCheck, setHomeCheck] = useState(false);

  const homeClick = () => {
    setHomeCheck((prevCheck) => !prevCheck);
  };

  return (
    <div className={"grid grid-cols-12"}>
      <div className={"col-start-1 col-span-2"}>
        <div className="flex px-2 justify-between">
          <HrCompanyProfile
            userHrCompanyName={UserIdBarTest.userHrCompanyName}
            userHrCompanyImage={UserIdBarTest.userHrCompanyImage}
            userHrCompanyIndustry={UserIdBarTest.userHrCompanyIndustry}
            userHrCompanyWebsite={UserIdBarTest.userHrCompanyWebsite}
          />
        </div>
      </div>
      <div className={"col-start-4 flex justify-center items-center"}>
        <ButtonNav
          backgroundColour={homeCheck ? "white" : "gray"}
          buttonType={"square"}
          textColour={homeCheck ? "VouchGreen" : "black"}
          label={"Home"}
          onClick={homeClick}
        />
      </div>
      <div className={"col-start-5 flex justify-center items-center"}>
        {" "}
        Favourites
      </div>
      <div className={"col-start-6 flex justify-center items-center"}>
        {" "}
        Not now{" "}
      </div>
      <div className={"col-start-7 flex justify-center items-center"}>
        {" "}
        Contacted{" "}
      </div>

      <div className={"col-start-11 col-span-2"}>
        <UserProfile
          userHrImg={user.photoURL}
          userHrName={user.displayName}
          userHrPosition={UserIdBarTest.userHrPosition}
        />
      </div>
    </div>
  );
};

export default UserIdBar;
