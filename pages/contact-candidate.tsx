import { INSERT_THUMBS_UP_AND_DOWN } from "../graphql/INSERT_THUMBS_UP";
import React, { useEffect, useState } from "react";

import { useMutation, useQuery } from "@apollo/client";
import router from "next/router";
// //Moved to contacted new page

export default function acceptPrivacy() {
  const hrId = router.query.hrId.toString();
  const candidateEmail = router.query.canEmail.toString();

  const candidateId = router.query.candidateId.toString();

  const [ThumbUpAndDownMutation, {}] = useMutation(INSERT_THUMBS_UP_AND_DOWN);

  const moveToContacted = () => {
    ThumbUpAndDownMutation({
      variables: {
        hrId: hrId,
        jobName: "",
        jobSeniority: "",
        jobType: "",
        status: "contacted",
        candidateId: candidateId,
      },
    });
  };

  const sendEmail = async () => {
    const res = await fetch("/api/interestEmail", {
      body: JSON.stringify({
        email: candidateEmail,
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

  useEffect(() => {
    sendEmail();
    moveToContacted();
  }, []);

  return (
    <div className={"flex justify-center items-center"}>
      <div
        className={" shadow-lg rounded-xl lg:w-2/5 sm:w-4/5 h-auto bg-white"}
      >
        <div className="flex justify-center items-center">
          <img
            src="./images/sendRequest.png"
            width="400"
            height="auto"
            className={"flex justify-center items-center py-2 px-2"}
          />
        </div>
        <div className={"px-10 "}>
          <div
            className={
              " px-10 font-bold text-lg pt-8 text-center justify-center"
            }
          >
            Great! We've sent an email for you to connect!
          </div>
          <div className={"pt-4 text-xs text-gray-500 text-center"}>
            An email has been sent to the candidate! They'll respond directly in
            your inbox :)
          </div>
        </div>

        <div className="flex justify-center items-center pt-2">
          <img
            src="./images/VouchLogo1.png"
            width="100"
            height="auto"
            className={"flex justify-center items-center py-2 px-2"}
          />
        </div>

        <div className={"pb-4 border-b border-gray-200 "}></div>
      </div>
    </div>
  );
}
