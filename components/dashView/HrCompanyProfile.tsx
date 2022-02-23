import React from "react";

export interface HrCompanyProfileProps {
  userHrCompanyName: string;
  userHrCompanyWebsite: string;
}
const HrCompanyProfile = ({
  userHrCompanyName,
  userHrCompanyWebsite,
}: HrCompanyProfileProps) => {
  return (
    <div className="flex py-2 px-1">
      <a href="/dashboard">
        <img src="/images/VouchLogoOnly.png" width="50px" className="px-1" />
      </a>

      <div className="grid content-center py-1 border-l-4 border-gray-200 px-2 ">
        <a
          target="_blank"
          href={"https://" + userHrCompanyWebsite}
          rel="noopener noreferrer"
          className=" flex-nowrap text-base font-bold text-gray-700"
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
