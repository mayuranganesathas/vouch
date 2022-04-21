import React, { useEffect, useState } from "react";

import { useMutation, useQuery } from "@apollo/client";
import router from "next/router";
import "react-toastify/dist/ReactToastify.css";
import { INSERT_ANON } from "../graphql/INSERT_ANON";
import { ButtonVouch } from "../components/ui/ButtonVouch";
import { QUERY_HRID } from "../graphql/QUERY_HRID";
import { QUERY_CANDIDATE_ON_CANID } from "../graphql/QUERY_SPECIFIC_CANDIDATE_ON_CANID";
import { INSERT_THUMBS_UP_AND_DOWN } from "../graphql/INSERT_THUMBS_UP";

export default function acceptPrivacy() {
  const hrId = router.query.hrId.toString();
  const candidateId = router.query.candidateId.toString();

  const [upsertAnonymity, { data, loading, error }] = useMutation(INSERT_ANON, {
    variables: {
      hrId: "incompleteField",
      candidateId: "incompleteField",
      status: "incompleteField",
    },
  });

  // //Moved to contacted new page
  // const [ThumbUpAndDownMutation, {}] = useMutation(INSERT_THUMBS_UP_AND_DOWN);
  // const moveToContacted = () => {
  //   ThumbUpAndDownMutation({
  //     variables: {
  //       hrId: hrId,
  //       jobName: "",
  //       jobSeniority: "",
  //       jobType: "",
  //       status: "contacted",
  //       candidateId: candidateId,
  //     },
  //   });
  // };

  //email to send to HR Manager after query for if candidate got accepted
  const sendEmail = async (hrData, candidateData) => {
    const res = await fetch("/api/email/hrPrivacyAcceptance", {
      body: JSON.stringify({
        hrEmail: hrData.hr_voucher[0].hrEmail,
        hrId: hrId,
        canFirstName: candidateData.candidates[0].candidateFirstName,
        candidatePosition: candidateData.candidate_metadata[0].positionTitle,
        canEmail: candidateData.candidate_metadata[0].candidateEmail,
        canLinkedIn: candidateData.candidate_metadata[0].linkedIn,
        hrFirstName: hrData.hr_voucher[0].firstName,
        hrLastName: hrData.hr_voucher[0].lastName,
        companyName: hrData.hr_voucher[0].companyName,
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
    // on page load, mutate state of anon table to update to available for HR manager, get candidate data, hr data, and send email to user
    upsertAnonymity({
      variables: {
        hrId: hrId,
        candidateId: candidateId,
        status: "available",
      },
    });

    let { data: hrEmailData } = useQuery(QUERY_HRID, {
      variables: {
        hrId: hrId,
      },
    });
    let { data: candidateData } = useQuery(QUERY_CANDIDATE_ON_CANID, {
      variables: {
        candidateId: candidateId,
      },
    });

    sendEmail(hrEmailData, candidateData);
  }, []);

  return (
    <div className={"bg-gray-100 w-full h-screen grid content-center"}>
      <div className={"flex justify-center items-center"}>
        <div
          className={
            "px-8 shadow-lg rounded-xl lg:w-2/5 sm:4/5 h-auto bg-white"
          }
        >
          <div className="flex justify-center items-center">
            <img
              src="./images/sendRequest.png"
              width="auto"
              height="auto"
              className={"flex justify-center items-center py-2 px-2"}
            />
          </div>
          <div className={"pt-8 text-center font-bold pb-4 text-lg"}>
            Your LinkedIn profile has been shared!
          </div>
          <div className={"pt-2 text-sm text-center text-gray-500 px-16"}>
            Congrats on being fast-tracked for a new exiciting role! Only this
            HR manager has access to your LinkedIn information in order to
            better assess the fit as a referral in their organization.
          </div>

          <div className="flex justify-center pt-8 py-4">
            <ButtonVouch
              backgroundColour={"VouchGreen"}
              buttonType={"square"}
              textColour={"white"}
              label={"Vouch FAQs"}
              disabled={false}
              onClick={() => {
                window.open("https://www.vouchrecruit.com/faq-candidate");
              }}
            />
          </div>
          <div className="flex justify-center items-center pt-12">
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
    </div>
  );
}
