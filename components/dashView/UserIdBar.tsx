import React from "react";
import UserProfile from "./UserProfile";
import HrCompanyProfile from "./HrCompanyProfile";
import { useAuth } from "../../lib/authContext";

export interface UserIdBarProps {
  hrData: any;
}
const UserIdBar = ({ hrData }: UserIdBarProps) => {
  const { user } = useAuth();

  return (
    hrData.hr_voucher.length > 0 && (
      <div className="flex px-2 justify-between">
        <HrCompanyProfile
          userHrCompanyName={hrData.hr_voucher[0].companyName}
          userHrCompanyImage={hrData.company_data[0].companyLogoAddress}
          userHrCompanyIndustry={hrData.hr_voucher[0].industry}
          userHrCompanyWebsite={hrData.hr_voucher[0].companyWebsite}
          userHrCompanyLocation={hrData.hr_voucher[0].location}
        />
        <UserProfile
          userHrImg={user.photoURL}
          userHrName={user.displayName}
          userHrPosition={hrData.hr_voucher[0].position}
        />
      </div>
    )
  );
};

export default UserIdBar;
