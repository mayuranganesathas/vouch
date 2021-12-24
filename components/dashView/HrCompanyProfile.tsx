import React from "react";

export interface HrCompanyProfileProps {
  userHrCompanyImage: string;
  userHrCompanyName: string;
  userHrCompanyIndustry: string;
  userHrCompanyWebsite: string;
  userHrCompanyLocation: string;
}
const HrCompanyProfile = ({
  userHrCompanyImage,
  userHrCompanyName,
  userHrCompanyIndustry,
  userHrCompanyWebsite,
  userHrCompanyLocation,
}: HrCompanyProfileProps) => {
  return (
    <div className="flex py-2">
      <div className=" px-4">
        <img src={userHrCompanyImage} className="" width="100" height="50" />
      </div>

      <div className="grid content-center py-1 ">
        <a
          href={userHrCompanyWebsite}
          className=" flex-nowrap text-2xl font-bold text-gray-500"
        >
          {" "}
          {userHrCompanyName}
        </a>
      </div>
    </div>
  );
};
// merge main
export default HrCompanyProfile;
