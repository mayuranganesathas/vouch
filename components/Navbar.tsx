import React from "react";
import UserProfile from "./ui/UserProfile";
import HrCompanyProfile from "./ui/HrCompanyProfile";
import next from "next";

const navBarTest = {
  userHrCompanyName: "Google HQ",
  userHrCompanyImage: "/images/Google-logo.png",
  userCompanyIndustry: "Tech - SAAS",
  userHrCompanyWebsite: "www.google.com",
  userHrImg: "/images/userprofile.png",
  userHrName: "Brian Lee",
  userHrPosition: "HR Lead",
};

const NavBar = (navBarTest) => {
  return (
    <div className="flex px-2 justify-between">
      <HrCompanyProfile
        userHrCompanyName={navBarTest.userHrCompanyName}
        userHrCompanyImage={navBarTest.userHrCompanyImage}
        userHrCompanyIndustry={navBarTest.userHrCompanyIndustry}
        userHrCompanyWebsite={navBarTest.userHRCompanyWebsite}
      />
      <UserProfile
        userHrImg={navBarTest.userHrImg}
        userHrName={navBarTest.userHrName}
        userHrPosition={navBarTest.userHrPosition}
      />
    </div>
  );
};

export default NavBar;
