import React from "react";
import Modal from "react-modal";
import { useRouter } from "next/router";
import { useAuth } from "../lib/authContext";

export interface RouterListProps {}
const RouterList = ({}: RouterListProps) => {
  const router = useRouter();
  const { user } = useAuth();

  const sendEmail = async () => {
    const res = await fetch("/api/vouchEmailCandidate", {
      body: JSON.stringify({
        email: "mayuran852@gmail.com",
        hrId: user.uid,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
  };

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
      <div className="p-8 ">
        <button
          onClick={() => sendEmail()}
          className="bg-VouchGreen text-white text-center"
        >
          {" "}
          Email Test (Do Not Click Please){" "}
        </button>
      </div>
      ;
    </div>
  );
};

export default RouterList;
