import React from "react";
export interface CompTooltipProps {
  companyName: string;
  companyLocation: string;
  numEmployees: any;
  userHrCompanyWebsite: string;
  onClick?: () => void;
}

export const CompTooltip: React.FC<CompTooltipProps> = ({
  companyName,
  companyLocation,
  numEmployees,
  userHrCompanyWebsite,
  onClick,
}) => {
  return (
    <div
      className={
        "w-96 bg-white border border-black drop-shadow-md py-2 px-4 rounded-tr-3xl rounded-b-3xl"
      }
    >
      <div className={"pb-2"}> {companyName}</div>
      <div className={"text-xs"}>
        <div className={"grid grid-cols-6"}>
          <div className={"text-gray-500 w-14 col-start-1 py-1"}>
            {" "}
            Location:
          </div>
          <div className={"col-start-2 col-span-5 pl-3"}>{companyLocation}</div>
        </div>
        <div className={"grid grid-cols-3"}>
          <div className={"text-gray-500 w-36"}>Number of Employees:</div>
          <div className={"col-start-2 pl-6"}>{numEmployees}</div>
        </div>
        <div className={"pt-1 pb-2 underline italic"} onClick={onClick}>
          {" "}
          {userHrCompanyWebsite}
        </div>
      </div>
    </div>
  );
};
