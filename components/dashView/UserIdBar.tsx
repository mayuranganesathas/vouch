import React from "react";
import UserProfile from "./UserProfile";
import HrCompanyProfile from "./HrCompanyProfile";
import { ButtonNav } from "../ui/ButtonNav";

export interface UserIdBarProps {
  Home: boolean;
  setHome: (Home: boolean) => false;
}

const HomeData = {
  backgroundColour: "white",
  textColour: "black",
};

const UserIdBarTest = {
  userHrCompanyName: "Google HQ",
  userHrCompanyImage: "/images/Google-logo.png",
  userHrCompanyIndustry: "Tech - SAAS",
  userHrCompanyWebsite: "www.google.com",
  userHrImg: "/images/userprofile.png",
  userHrName: "Brian Lee",
  userHrPosition: "HR Lead",
};

const UserIdBar = ({ Home, setHome }: UserIdBarProps) => {
  const HomeActive = () => {
    setHome(true);
  };
  return (
    <div className="grid grid-cols-14 grid-flow-col">
      <div className="grid-start-1 grid-end-3">
        <HrCompanyProfile
          userHrCompanyName={UserIdBarTest.userHrCompanyName}
          userHrCompanyImage={UserIdBarTest.userHrCompanyImage}
          userHrCompanyIndustry={UserIdBarTest.userHrCompanyIndustry}
          userHrCompanyWebsite={UserIdBarTest.userHrCompanyWebsite}
        />
      </div>
      <div className="grid-start-4 grid-end-5 flex items-center">
        <ButtonNav
          backgroundColour="OnClick"
          buttonType={"square"}
          textColour="VouchGreen"
          label={"Home"}
          disabled={false}
          onClick={HomeActive}
          buttonWidth={"wide"}
        />{" "}
      </div>
      <div className="grid-start-5 grid-end-6 flex items-center">Favourite</div>
      <div className="grid-start-6 grid-end-7 flex items-center"> Not Now</div>
      <div className="grid-start-7 grid-end-8 flex items-center">
        {" "}
        Connected{" "}
      </div>
      <div className="grid-start-8 grid-end-9"></div>
      <div className="grid-start-9 grid-end-10"></div>
      <div className="grid-start-10 grid-end-11"> </div>
      <div className="grid-start-11 grid-end-12"></div>
      <div className="grid-start-12 grid-end-14 justify-items-end">
        <UserProfile
          userHrImg={UserIdBarTest.userHrImg}
          userHrName={UserIdBarTest.userHrName}
          userHrPosition={UserIdBarTest.userHrPosition}
        />
      </div>
    </div>
  );
};

export default UserIdBar;
