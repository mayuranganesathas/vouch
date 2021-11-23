import React from "react";
import UserProfile from "./UserProfile";
import HrCompanyProfile from "./HrCompanyProfile";
import { useAuth } from "../../lib/authContext";

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

  return (
    <div className="flex px-2 justify-between">
      <HrCompanyProfile
        userHrCompanyName={UserIdBarTest.userHrCompanyName}
        userHrCompanyImage={UserIdBarTest.userHrCompanyImage}
        userHrCompanyIndustry={UserIdBarTest.userHrCompanyIndustry}
        userHrCompanyWebsite={UserIdBarTest.userHrCompanyWebsite}
      />
      <UserProfile
        userHrImg={user.photoURL}
        userHrName={user.displayName}
        userHrPosition={UserIdBarTest.userHrPosition}
      />
    </div>
  );
};

export default UserIdBar;
