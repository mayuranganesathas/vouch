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

export interface UserIdBarProps {
  hrData: any;
}
const UserIdBar = ({ hrData }: UserIdBarProps) => {
  const { user } = useAuth();

  return (
    <div className="flex px-2 justify-between">
      <HrCompanyProfile
        userHrCompanyName={hrData.hr_voucher[0].companyName}
        userHrCompanyImage={hrData.company_data[0].companyLogoAddress}
        userHrCompanyIndustry={hrData.hr_voucher[0].industry}
        userHrCompanyWebsite={hrData.hr_voucher[0].companyWebsite}
      />
      <UserProfile
        userHrImg={user.photoURL}
        userHrName={user.displayName}
        userHrPosition={hrData.hr_voucher[0].position}
      />
    </div>
  );
};

export default UserIdBar;
