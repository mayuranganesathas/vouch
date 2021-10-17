import React from "react";

export interface HrCompanyProfileProps {
  userHrCompanyImage: string;
  userHrCompanyName: string;
  userHrCompanyIndustry: string;
}
const HrCompanyProfile = ({
  userHrCompanyImage,
  userHrCompanyName,
  userHrCompanyIndustry,
}: HrCompanyProfileProps) => {
  return (
    <div className="grid grid-cols-2 w-2/12 auto-cols-min">
      <div className="w-1/2">
        <img src={userHrCompanyImage} className="" />
      </div>
      <div className="flex-nowrap">
        <div className="">{userHrCompanyName}</div>
        <div className="flex">
          <img src="icons/industry.png" className="h-1/12 w-3/12" />
          <div className=""> {userHrCompanyIndustry}</div>
        </div>
      </div>
    </div>
  );
};
// grid, 2 columns, flex in column 2
export default HrCompanyProfile;
