import React, { useState } from "react";
import Modal from "react-modal";
import { XIcon } from "@heroicons/react/solid";
import { ButtonVouch } from "../ui/ButtonVouch";
import { SearchFilterDash } from "../ui/searchFilterDash";
import StandOutSkill from "../ui/StandOutSkill";
import { UPSERT_VOUCH_CANDIDATE } from "../../graphql/UPSERT_VOUCHEE_FORM";
import { useMutation } from "@apollo/client";
import { useAuth } from "../../lib/authContext";
import { UserGroupIcon } from "@heroicons/react/solid";
import { MailOpenIcon } from "@heroicons/react/solid";
import { UserAddIcon } from "@heroicons/react/solid";
import { SearchCircleIcon } from "@heroicons/react/solid";
import { PositionFilterVouch } from "../ui/PositionFilterVouch";
import { IntStageFilterVouch } from "../ui/IntStageFilterVouch";
import { SeniorityFilterVouch } from "../ui/SeniorityFilterVouch";
import { BaseSalaryFilterVouch } from "../ui/BaseSalaryFilterVouch";
import { RoleSkillFilterVouch } from "../ui/RoleSkillFilterVouch";
import { IntPersonalSkillFilterVouch } from "../ui/IntPersonalSkillFilterVouch";
import { IntStrengthSkillFilterVouch } from "../ui/IntStrengthSkillFilterVouch";
import { InformationCircleIcon } from "@heroicons/react/solid";
import {
  BaseSalaryDropDownArray,
  generalStrengths,
  InterviewStageDropDownArray,
  InterviewStrengthSkillDropDownArray,
} from "../../pages/api/dropdownCategories";
import InformationIconToolTip from "../ui/InformationIconToolTip";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ref http://reactcommunity.org/react-modal/
//ref https://github.com/tailwindlabs/heroicons
export interface VouchCTAModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  hrData: any;
}

//** UX */
//EMAIL INPUT VALIDATOR

const VouchCTAModal = ({
  modalIsOpen,
  closeModal,
  hrData,
}: VouchCTAModalProps) => {
  const { user } = useAuth();

  //authentication passes hrID
  const [email, setEmail] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [interviewStage, setInterviewStage] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [standOutSkill1, setStandOutSkill1] = useState(""); // Industry Skill
  const [standOutSkill2, setStandOutSkill2] = useState(""); // Interpersonal Skill
  const [standOutSkill3, setStandOutSkill3] = useState(""); // Interview Skill

  const clearFormState = () => {
    setEmail("");
    setPositionTitle("");
    setSalaryRange("");
    setInterviewStage("");
    setStandOutSkill1("");
    setStandOutSkill2("");
    setStandOutSkill3("");
  };

  //replace with HR authentication

  const [initializeVouchCandidate, { data, loading, error }] = useMutation(
    UPSERT_VOUCH_CANDIDATE,

    {
      variables: {
        hrId: "incompleteForm",
        positionTitle: "incompleteField",
        salaryRange: "incompleteField",
        stageOfInterview: "incompleteField",
        standOutSkill1: "incompleteField",
        standOutSkill2: "incompleteField",
        standOutSkill3: "incompleteField",
        candidateEmail: "incompleteField",
      },
    }
  );
  // insert hrID in candidates and
  const emailChecker = (e) => {
    setEmail(e);
  };

  const sendEmail = async () => {
    const res = await fetch("/api/vouchEmailCandidate", {
      body: JSON.stringify({
        email: email,
        hrId: user.uid,
        hrEmail: user.email,
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

  const toastFeedback = () => {
    toast.success("Vouch Candidate Invited! ✅", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const submitForm = async () => {
    initializeVouchCandidate({
      variables: {
        hrId: user.uid,
        positionTitle: positionTitle,
        salaryRange: salaryRange,
        stageOfInterview: interviewStage,
        standOutSkill1: standOutSkill1,
        standOutSkill2: standOutSkill2,
        standOutSkill3: standOutSkill3,
        candidateEmail: email,
      },
    });
    if (loading) return "Submitting...";
    if (error) return `Submission error! ${error.message}`;
    toastFeedback();
    sendEmail();
    clearFormState();
    closeModal();
  };

  const formValidation = () => {
    const emailValidator = email;
    const positionTitleValidator = positionTitle;
    const salaryRangeValidator = salaryRange;
    const stageOfInterviewValidator = interviewStage;
    const standOutSkill1Validator = standOutSkill1;
    const standOutSkill2Validator = standOutSkill2;
    const standOutSkill3Validator = standOutSkill3;

    if (
      (standOutSkill1Validator ||
        standOutSkill2Validator ||
        standOutSkill3Validator) &&
      emailValidator &&
      positionTitleValidator &&
      salaryRangeValidator &&
      stageOfInterviewValidator
    ) {
      return false;
    } else if (emailValidator.length <= 0) {
      return true;
    }
    return true;
  };

  return (
    <div className=" ">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className=" w-3/6 h-min bg-white shadow-lg rounded-xl p-2 m-8  overflow-auto absolute right-0"
        contentLabel="Test Name"
        ariaHideApp={false}
        aria={{
          labelledby: "heading",
          describedby: "full_description",
        }}
      >
        <div className={"text-xs"}>
          <div className={"grid grid-cols-5"}>
            <div
              className={
                "col-span-2 grid grid-rows-1 py-8 px-4 bg-VouchDark content-evenly"
              }
            >
              <div className={""}>
                <div className={"flex justify-center"}>
                  <UserGroupIcon className={"w-8 h-auto "} fill="white" />
                </div>
                <div
                  className={
                    "flex justify-center py-2 font-bold text-sm text-white"
                  }
                >
                  VOUCHING CANDIDATES
                </div>
                <div className={" text-white"}>
                  <div className={"flex justify-center"}>
                    Help other qualified candidates from{" "}
                  </div>
                  <div className={"flex justify-center"}>
                    your recruitment pipeline get noticed!
                  </div>
                  <div className={"flex justify-center"}>
                    They may not have been your final pick,
                  </div>
                  <div className={"flex justify-center"}>
                    but they could be someone elses.
                  </div>
                </div>
                <div className={"flex justify-center pt-8"}>
                  <MailOpenIcon className={"w-8 h-auto"} fill="white" />
                </div>
                <div className={" text-white  py-2 flex justify-center"}>
                  Candidates get invited to join.
                </div>
                <div className={"flex justify-center pt-8"}>
                  <UserAddIcon className={"w-8 h-auto"} fill="white" />
                </div>
                <div className={" text-white py-2"}>
                  <div className={"flex justify-center"}>
                    Referred candidates match more
                  </div>
                  <div className={"flex justify-center"}>
                    easily with our community
                  </div>
                  <div className={"flex justify-center"}>of recruiters.</div>
                </div>
                <div className={"flex justify-center pt-8"}>
                  <SearchCircleIcon className={"w-8 h-auto"} fill="white" />
                </div>
                <div>
                  <div className={" text-white py-2"}>
                    <div className={"flex justify-center"}>Pay it forward.</div>
                    <div className={"flex justify-center"}>
                      Find active and qualified
                    </div>
                    <div className={"flex justify-center"}>
                      candidates for your next hire.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-span-3 px-8 text-gray-700"}>
              {" "}
              <div>
                <div className="grid justify-items-end">
                  <XIcon
                    className="h-5 w-5 text-gray-400 hover:text-red-500 cursor-pointer"
                    onClick={closeModal}
                  />
                </div>
                <div className=" font-bold flex justify-start text-sm ">
                  STEP 1: Invite a Candidate
                </div>
                <div className={"flex justify-center py-2"}>
                  <input
                    className="border-2 w-full py-0.5 pl-1 rounded text-xs"
                    id="guess"
                    type="text"
                    placeholder=" Enter Candidate Email"
                    value={email}
                    onChange={(e) => emailChecker(e.target.value)}
                  ></input>
                </div>
                <div className="text-gray-300 text-xs flex justify-start pb-2">
                  I have confirmed the candidate consents to being referred into
                  Vouch.
                </div>
              </div>
              <div className="py-2">
                <hr className="" />
              </div>
              <div className="	">
                <div className="pt-2">
                  <div className="font-bold text-sm flex justify-start">
                    Step 2: Interview and Position Details
                  </div>
                  <div className="text-gray-300 flex justify-start pb-2">
                    This information will ONLY be seen by HR Managers.
                  </div>
                </div>

                <div className={"flex justify-center py-2"}>
                  <input
                    className="border-2 w-full py-0.5 pl-1 rounded text-xs"
                    id="guess"
                    type="text"
                    placeholder=" Position Title"
                    value={positionTitle}
                    onChange={(e) => setPositionTitle(e.target.value)}
                  ></input>
                </div>
                <div className={"grid grid-cols-2 pt-2 text-gray-700"}>
                  <div className={""}>
                    <div className="pb-2">
                      <div className="text-xs py-1 font-bold text-gray-500 flex flex-nowrap">
                        Last Interview Stage
                        <InformationIconToolTip toolTipCopy="While companies have differing interview stages, please do your best to select the stage that best represents the last interview stage completed by the candidate." />
                      </div>
                      <div className={"pr-3"}>
                        <PositionFilterVouch
                          value={interviewStage}
                          backgroundColour="white"
                          onChange={(e) => {
                            setInterviewStage(e.target.value);
                          }}
                          positionDropDownArray={InterviewStageDropDownArray}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs py-1 pl-3 font-bold text-gray-500 flex flex-nowrap">
                      Base Salary Range{" "}
                      <InformationIconToolTip toolTipCopy="Select the closest base salary range that was budgeted for the position. This provides other HR professionals in the platform an idea around salary expectations of the candidate." />
                    </div>{" "}
                    <div className={"pl-3"}>
                      <BaseSalaryFilterVouch
                        value={salaryRange}
                        backgroundColour="white"
                        onChange={(e) => {
                          setSalaryRange(e.target.value);
                        }}
                        BaseSalaryDropDownArray={BaseSalaryDropDownArray}
                      />
                    </div>
                  </div>
                </div>
                <div className="py-4">
                  <hr className="" />
                </div>
                <div className="pb-2 text-gray-700">
                  <div className="font-bold flex justify-start text-sm">
                    Step 3: Stand Out Skills
                  </div>
                  <div className="text-gray-400 py-0.5">
                    <div className={"text-gray-300 flex justify-start"}>
                      Select skill that impressed you
                    </div>
                  </div>
                  <div className="grid grid-cols-2 pt-2">
                    <div>
                      <div>
                        <div className="text-xs py-1 font-bold text-gray-500">
                          General Strengths
                        </div>{" "}
                        <div className={"pr-3"}>
                          <RoleSkillFilterVouch
                            value={standOutSkill1}
                            backgroundColour="white"
                            onChange={(e) => {
                              setStandOutSkill1(e.target.value);
                            }}
                            RoleSkillDropDownArray={generalStrengths}
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs py-1 pl-3 font-bold text-gray-500">
                        Interview Strengths
                      </div>{" "}
                      <div className={"pl-3"}>
                        <IntPersonalSkillFilterVouch
                          value={standOutSkill2}
                          backgroundColour="white"
                          onChange={(e) => {
                            setStandOutSkill2(e.target.value);
                          }}
                          IntPersonalSkillDropDownArray={
                            InterviewStrengthSkillDropDownArray
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-2 flex justify-center">
                  <ButtonVouch
                    backgroundColour="VouchGreen"
                    textColour="white"
                    onClick={submitForm}
                    buttonType="rounded"
                    label="Invite Candidate!"
                    disabled={formValidation()}
                  />
                </div>
                <div className={"text-xs text-gray-300 py-2"}>
                  By clicking on “Refer Candidate”, you agree to the
                  VouchRecruit Terms and Conditions .To see how we may use the
                  information, please take a look at our Privacey Policy [LINKS
                  TO ADD]{" "}
                </div>
              </div>
            </div>
          </div>
        </div>

        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
        />
      </Modal>{" "}
    </div>
  );
};

export default VouchCTAModal;
