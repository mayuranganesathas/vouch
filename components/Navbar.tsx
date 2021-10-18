import React from "react";
import UserProfile from ".//ui/UserProfile";
import HrCompanyProfile from "./ui/HrCompanyProfile";

const navBarTest = {
  userHrCompanyName: "Google HQ",
  userHrCompanyImage: "./public/images/nolanTester",
  userCompanyIndustry: "Tech - SAAS",
  userHrCompanyWebsite: "www.google.com",
};

const NavBar = (navBarTest) => {
  return (
    <div>
      <UserProfile />
      <HrCompanyProfile
        userHrCompanyName={navBarTest.userHrCompanyName}
        userHrCompanyImage={navBarTest.userHrCompanyImage}
        userHrCompanyIndustry={navBarTest.userHrCompanyIndustry}
        userHrCompanyWebsite={navBarTest.userHRCompanyWebsite}
      />
    </div>
  );
};
