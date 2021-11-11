import React, { useState } from "react";
import Modal from "react-modal";
import { XIcon } from "@heroicons/react/solid";
import { ButtonVouch } from "../ui/ButtonVouch";
import { SearchFilterDash } from "../ui/searchFilterDash";
import StandOutSkill from "../ui/StandOutSkill";
import { UPSERT_VOUCH_CANDIDATE } from "../../graphql/UPSERT_VOUCHEE_FORM";
import { ApolloClient, InMemoryCache, useMutation } from "@apollo/client";
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
// SEND EMAIL
//EMAIL INPUT VALIDATOR

const VouchCTAModal = ({ modalIsOpen, closeModal }: VouchCTAModalProps) => {
  const dropDownArray = [
    "test1231231",
    "test2123123",
    "test31223123",
    "test4123123",
    "test512312231",
  ];
  //authentication passes hrID
  const [hrId, setHrId] = useState("fieldtest1");
  const [email, setEmail] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [interviewStage, setInterviewStage] = useState("");
  const [positionLevel, setPositionLevel] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [standOutSkill1, setStandOutSkill1] = useState("");
  const [standOutSkill2, setStandOutSkill2] = useState("");
  const [standOutSkill3, setStandOutSkill3] = useState("");
  const [standOutSkill4, setStandOutSkill4] = useState("");
  const [standOutSkill5, setStandOutSkill5] = useState("");

  const clearFormState = () => {
    setEmail("");
    setPositionTitle("");
    setPositionLevel("");
    setSalaryRange("");
    setInterviewStage("");
    setStandOutSkill1("");
    setStandOutSkill2("");
    setStandOutSkill3("");
    setStandOutSkill4("");
    setStandOutSkill5("");
  };

  //replace with HR authentication

  const [initializeVouchCandidate, { data, loading, error }] = useMutation(
    UPSERT_VOUCH_CANDIDATE,

    {
      variables: {
        hrId: "incompleteForm",
        positionLevel: "incompleteField",
        positionTitle: "incompleteField",
        salaryRange: "incompleteField",
        stageOfInterview: "incompleteField",
        standOutSkill1: "incompleteField",
        standOutSkill2: "incompleteField",
        standOutSkill3: "incompleteField",
        standOutSkill4: "incompleteField",
        standOutSkill5: "incompleteField",
      },
    }
  );

  const emailChecker = (e) => {
    setEmail(e);
  };

  const submitForm = async () => {
    initializeVouchCandidate({
      variables: {
        hrId: hrId,
        positionLevel: positionLevel,
        positionTitle: positionTitle,
        salaryRange: salaryRange,
        stageOfInterview: interviewStage,
        standOutSkill1: standOutSkill1,
        standOutSkill2: standOutSkill2,
        standOutSkill3: standOutSkill3,
        standOutSkill4: standOutSkill4,
        standOutSkill5: standOutSkill5,
      },
    });
    if (loading) return "Submitting...";
    if (error) return `Submission error! ${error.message}`;
    clearFormState();
    //send email to candidate
    closeModal();
  };

  const formValidation = () => {
    const emailValidator = email;
    const positionLevelValidator = positionLevel;
    const positionTitleValidator = positionTitle;
    const salaryRangeValidator = salaryRange;
    const stageOfInterviewValidator = interviewStage;
    const standOutSkill1Validator = standOutSkill1;
    const standOutSkill2Validator = standOutSkill2;

    const standOutSkill3Validator = standOutSkill3;

    const standOutSkill4Validator = standOutSkill4;

    const standOutSkill5Validator = standOutSkill5;

    if (
      positionLevelValidator &&
      (standOutSkill1Validator ||
        standOutSkill2Validator ||
        standOutSkill3Validator ||
        standOutSkill4Validator ||
        standOutSkill5Validator) &&
      emailValidator &&
      positionTitleValidator &&
      salaryRangeValidator &&
      stageOfInterviewValidator
    ) {
      return false;
    }
    return true;
  };

  return (
    <div className=" ">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className=" w-min h-min bg-white shadow-lg rounded-xl p-2 m-8  overflow-auto h-min absolute right-0"
        contentLabel="Test Name"
        ariaHideApp={false}
        aria={{
          labelledby: "heading",
          describedby: "full_description",
        }}
      >
        <div className="	">
          <div className="flex justify-between gap-x-40  py-1 ">
            <div>
              <div className="py-2 ">Referred Candidate Email</div>
              <div>
                <input
                  className="border-2 w-60 rounded-lg"
                  id="guess"
                  type="text"
                  placeholder=" Enter Candidate Email"
                  value={email}
                  onChange={(e) => emailChecker(e.target.value)}
                ></input>
              </div>
            </div>
            <XIcon
              className="h-5 w-5 text-gray-400 hover:text-red-500 cursor-pointer"
              onClick={closeModal}
            />
          </div>
          <div className="py-2">
            <hr className="text-red-500 justify-items-end" />
          </div>

          <div className="py-4">
            <div className="text-bold text-md">Position Details</div>
            <div className="text-gray-400 text-xs">
              For the role they just interviewed for
            </div>
          </div>
          <div>
            <div className="flex-norwap">
              <div className="py-1 text-xs">Position Title</div>
              <SearchFilterDash
                value={positionTitle}
                backgroundColour="white"
                onChange={(e) => {
                  setPositionTitle(e.target.value);
                }}
                dropDownArray={dropDownArray}
                width="wide-sm"
              />
            </div>
            <div className="py-4 flex gap-8">
              <div>
                <div className="text-xs py-0.5">Stage Of Interview:</div>{" "}
                <SearchFilterDash
                  value={interviewStage}
                  backgroundColour="white"
                  onChange={(e) => {
                    setInterviewStage(e.target.value);
                  }}
                  dropDownArray={dropDownArray}
                  width="wide-sm"
                />
              </div>
              <div>
                <div className="text-xs py-0.5">Position Level:</div>{" "}
                <SearchFilterDash
                  value={positionLevel}
                  backgroundColour="white"
                  onChange={(e) => {
                    setPositionLevel(e.target.value);
                  }}
                  dropDownArray={dropDownArray}
                  width="wide-sm"
                />
              </div>
              <div>
                <div className="text-xs py-0.5">Salary Range:</div>{" "}
                <SearchFilterDash
                  value={salaryRange}
                  backgroundColour="white"
                  onChange={(e) => {
                    setSalaryRange(e.target.value);
                  }}
                  dropDownArray={dropDownArray}
                  width="wide-sm"
                />
              </div>
            </div>
          </div>

          <div className="py-4">
            <div className="text-bold">Stand Out Skills</div>
            <div className="text-gray-400 text-xs">
              Select the top skill that impressed you the most about this
              Candidate{" "}
            </div>
            <div className="flex flex-wrap justify-center gap-x-4  gap-y-4 py-6">
              <StandOutSkill
                value={dropDownArray[0]}
                onChange={(e) => setStandOutSkill1(e.target.value)}
              />

              <StandOutSkill
                value={dropDownArray[1]}
                onChange={(e) => setStandOutSkill2(e.target.value)}
              />

              <StandOutSkill
                value={dropDownArray[2]}
                onChange={(e) => setStandOutSkill3(e.target.value)}
              />

              <StandOutSkill
                value={dropDownArray[3]}
                onChange={(e) => setStandOutSkill4(e.target.value)}
              />

              <StandOutSkill
                value={dropDownArray[4]}
                onChange={(e) => setStandOutSkill5(e.target.value)}
              />
            </div>
          </div>
          <div className="py-1 justify-items-end">
            <ButtonVouch
              backgroundColour="VouchGreen"
              textColour="white"
              onClick={submitForm}
              buttonType="rounded"
              label="Refer Candidate!"
              disabled={formValidation()}
            />
          </div>
        </div>
      </Modal>{" "}
    </div>
  );
};

export default VouchCTAModal;
