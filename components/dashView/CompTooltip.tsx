import React from "react";
export interface CompTooltipProps {
  companyName: string;
  companyLocation: string;
  numEmployees: any;
  userHrCompanyWebsite: string;
}

export const CompTooltip: React.FC<CompTooltipProps> = ({
  companyName,
  companyLocation,
  numEmployees,
  userHrCompanyWebsite,
}) => {
  return (
    <div
      className={"h-94 w-64 bg-white border-2 border-gray-200 drop-shadow-md"}
    >
      <div> {companyName}</div>
      <div> Location: {companyLocation}</div>
      <div> Number of Employees: {numEmployees}</div>
      <div> {userHrCompanyWebsite}</div>
    </div>
  );
};
