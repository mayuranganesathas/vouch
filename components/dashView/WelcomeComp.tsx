import React from "react";

export interface WelcomeCompProps {
  newCandidateNumber: number;
  userHrFirstName: string;
  moveToCandidates: () => void;
}

const WelcomeComp = ({
  newCandidateNumber,
  userHrFirstName,
  moveToCandidates,
}: WelcomeCompProps) => {
  return (
    <div className="w-10/12">
      <div className="text-gray-500 py-2">Welcome back {userHrFirstName}!</div>
      <div className="text-gray-500">
        There are{" "}
        <span className="text-bold text-black">{newCandidateNumber} new</span>{" "}
        referrals in the pool.{" "}
        <button
          className="text-blue-400 cursor-pointer"
          onClick={moveToCandidates}
        >
          {" "}
          Do you want to see them?
        </button>
      </div>
    </div>
  );
};

export default WelcomeComp;
