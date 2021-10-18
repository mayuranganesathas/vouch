import React from "react";
import UserProfile from "./ui/UserProfile";
import HrCompanyProfile from "./ui/HrCompanyProfile";

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
    <div>
      <UserProfile
        userHrImg={navBarTest.userHrImg}
        userHrName={navBarTest.userHrName}
        userHrPosition={navBarTest.userHrPosition}
      />
      <HrCompanyProfile
        userHrCompanyName={navBarTest.userHrCompanyName}
        userHrCompanyImage={navBarTest.userHrCompanyImage}
        userHrCompanyIndustry={navBarTest.userHrCompanyIndustry}
        userHrCompanyWebsite={navBarTest.userHRCompanyWebsite}
      />
    </div>
  );
};

export default NavBar;
