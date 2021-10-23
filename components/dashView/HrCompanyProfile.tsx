import React from "react";

export interface HrCompanyProfileProps {
  userHrCompanyImage: string;
  userHrCompanyName: string;
  userHrCompanyIndustry: string;
  userHrCompanyWebsite: string;
}
const HrCompanyProfile = ({
  userHrCompanyImage,
  userHrCompanyName,
  userHrCompanyIndustry,
  userHrCompanyWebsite,
}: HrCompanyProfileProps) => {
  return (
    <div className="flex py-2">
      <div className=" px-4">
        <img src={userHrCompanyImage} className="" width="100" height="50" />
      </div>

      <div className="flex-nowrap py-1 ">
        <a href={userHrCompanyWebsite} className=" flex-nowrap text-md py-4">
          {" "}
          {userHrCompanyName}
        </a>
        <div className="flex">
          <img src="icons/industry.png" className="w-4 h-4 " />
          <span className="text-xs text-gray-500 flex-nowrap py-0.5 px-0.5">
            {" "}
            {userHrCompanyIndustry}
          </span>
        </div>
      </div>
    </div>
  );
};
// merge main
export default HrCompanyProfile;
