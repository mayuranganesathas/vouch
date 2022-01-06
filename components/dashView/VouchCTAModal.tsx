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
import {
  BaseSalaryDropDownArray,
  generalStrengths,
  InterviewStageDropDownArray,
  InterviewStrengthSkillDropDownArray,
} from "../../pages/api/dropdownCategories";

// ref http://reactcommunity.org/react-modal/
//ref https://github.com/tailwindlabs/heroicons
export interface VouchCTAModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
}
//TODO

// **Auth
//PASSING HRID AUTHENTICATION

//** UX */
//EMAIL INPUT VALIDATOR

const VouchCTAModal = ({ modalIsOpen, closeModal }: VouchCTAModalProps) => {
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
    console.log(email);
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
      },
    });
    if (loading) return "Submitting...";
    if (error) return `Submission error! ${error.message}`;

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
        className=" w-fit h-min bg-white shadow-lg rounded-xl p-2 m-8  overflow-auto absolute right-0"
        contentLabel="Test Name"
        ariaHideApp={false}
        aria={{
          labelledby: "heading",
          describedby: "full_description",
        }}
      >
        <div className={""}>
          <div className={"grid grid-cols-5"}>
            <div
              className={
                "col-span-2 grid grid-rows-1 py-8 px-4 bg-VouchMed content-evenly"
              }
            >
              <div className={""}>
                <div className={"flex justify-center"}>
                  <UserGroupIcon className={"w-20 h-auto "} fill="white" />
                </div>
                <div
                  className={
                    "flex justify-center py-2 font-bold text-lg text-white"
                  }
                >
                  VOUCHING CANDIDATES
                </div>
                <div className={"text-sm text-white"}>
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
                  <MailOpenIcon className={"w-12 h-auto"} fill="white" />
                </div>
                <div className={"text-sm text-white  py-2 flex justify-center"}>
                  Candidates get invited to join.
                </div>
                <div className={"flex justify-center pt-8"}>
                  <UserAddIcon className={"w-12 h-auto"} fill="white" />
                </div>
                <div className={"text-sm text-white py-2"}>
                  <div className={"flex justify-center"}>
                    Referred candidates match more
                  </div>
                  <div className={"flex justify-center"}>
                    easily with our community
                  </div>
                  <div className={"flex justify-center"}>of recruiters.</div>
                </div>
                <div className={"flex justify-center pt-8"}>
                  <SearchCircleIcon className={"w-12 h-auto"} fill="white" />
                </div>
                <div>
                  <div className={"text-sm text-white py-2"}>
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
            <div className={"col-span-3 px-8"}>
              {" "}
              <div>
                <div className="grid justify-items-end">
                  <XIcon
                    className="h-5 w-5 text-gray-400 hover:text-red-500 cursor-pointer"
                    onClick={closeModal}
                  />
                </div>
                <div className="pt-1 font-bold flex justify-center text-base ">
                  Add Candidate to the Vouch Platform
                </div>
                <div className={"flex justify-center py-2"}>
                  <input
                    className="border-2 w-full py-0.5 pl-1 rounded"
                    id="guess"
                    type="text"
                    placeholder=" Enter Candidate Email"
                    value={email}
                    onChange={(e) => emailChecker(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="	">
                <div className="pt-2">
                  <div className="font-bold text-base flex justify-center">
                    Position Details
                  </div>
                  <div className="text-gray-300 text-xs font-bold flex justify-center">
                    The role they recently interviewed for
                  </div>
                </div>

                <div className={"flex justify-center py-2"}>
                  <input
                    className="border-2 w-full py-0.5 pl-1 rounded"
                    id="guess"
                    type="text"
                    placeholder=" Position Title"
                    value={positionTitle}
                    onChange={(e) => setPositionTitle(e.target.value)}
                  ></input>
                </div>
                <div className={"grid grid-cols-2 pt-4"}>
                  <div className={""}>
                    <div className="">
                      <div className="text-xs py-1 font-bold text-gray-500">
                        Furthest Interview Stage:
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
                    <div className="text-xs py-1 pl-3 font-bold text-gray-500">
                      Base Salary Range:
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
                <div className="py-6">
                  <hr className="" />
                </div>
                <div className="pb-4">
                  <div className="font-bold flex justify-center text-base">
                    Stand Out Skills
                  </div>
                  <div className="text-gray-400 text-xs py-0.5">
                    <div
                      className={
                        "text-gray-300 text-xs font-bold flex justify-center"
                      }
                    >
                      Select skill that impressed you
                    </div>
                  </div>
                  <div className="grid grid-cols-2 pt-2">
                    <div>
                      <div>
                        <div className="text-xs py-1 pl-3 font-bold text-gray-500">
                          General Strengths:
                        </div>{" "}
                        <div className={"pl-3"}>
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
                      <div className="text-xs pt-1 pl-3 font-bold text-gray-500">
                        Interview Strengths:
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
                    label="Add Candidate!"
                    disabled={formValidation()}
                  />
                </div>
                <div className={"w-96 text-xs text-gray-300 py-2"}>
                  By clicking on “Refer Candidate”, you agree to the
                  VouchRecruit Terms and Conditions .To see how we may use the
                  information, please take a look at our Privacey Policy [LINKS
                  TO ADD]{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>{" "}
    </div>
  );
};

export default VouchCTAModal;
