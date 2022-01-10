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
    <div className="flex py-2">
      <div className="grid content-center py-1 ">
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
