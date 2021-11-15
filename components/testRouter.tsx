import React from "react";
import Modal from "react-modal";
import { useRouter } from "next/router";

export interface RouterListProps {}
const RouterList = ({}: RouterListProps) => {
  const router = useRouter();

  return (
    <div>
      <div className="p-8 ">
        <button
          onClick={() => router.push("/dashboard")}
          className="bg-VouchGreen text-white text-center"
        >
          {" "}
          Visit Dashboard{" "}
        </button>
      </div>
      <div className="p-8 ">
        <button
          onClick={() => router.push("/candidate-register")}
          className="bg-VouchGreen text-white text-center"
        >
          {" "}
          Visit Candidate Register{" "}
        </button>
      </div>
      ;
    </div>
  );
};

export default RouterList;
