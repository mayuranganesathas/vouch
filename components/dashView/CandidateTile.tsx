import React, { useEffect, useState } from "react";
import { ButtonLinkedin } from "./ButtonLinkedin";
import { StarIcon } from "@heroicons/react/solid";
import { ReceiptRefundIcon } from "@heroicons/react/solid";

import { EyeOffIcon } from "@heroicons/react/solid";
import { MailOpenIcon, MailIcon } from "@heroicons/react/solid";
import { ButtonEmail } from "./ButtonEmail";
import { CompTooltip } from "./CompTooltip";
import ReactTooltip from "react-tooltip";
import { ButtonConnected } from "./ButtonConnected";
import { useMutation } from "@apollo/client";
import { INSERT_THUMBS_UP_AND_DOWN } from "../../graphql/INSERT_THUMBS_UP";
import { useAuth } from "../../lib/authContext";
import { QUERY_SHORT_LIST } from "../../graphql/QUERY_SHORTLIST";
import { toast, ToastContainer } from "react-toastify";
import { DELETE_SHORTLIST_ITEM } from "../../graphql/DELETE_FROM_SHORTLIST";
export interface CandidateTileProps {
  userID: number;
  positionTitle: string;
  salaryRange: string;
  jobLocation: string;
  numEmployees: string;
  companyName: string;
  stageInterview: string;
  pastPosition1: string;
  standOutSkill1: string;
  standOutSkill2: string;
  userLinkedinURL: string;
  userEmailAction: string;
  firstName: string;
  lastName: string;
  refetchShortList: any;
  pastCompanyName: string;
  hrData: any;
  stageStatus?: any;
  key: number;
}

export const CandidateTile: React.FC<CandidateTileProps> = ({
  userID,
  firstName,
  lastName,
  positionTitle,
  salaryRange,
  jobLocation,
  numEmployees,
  companyName,
  stageInterview,
  pastPosition1,
  standOutSkill1,
  standOutSkill2,
  userLinkedinURL,
  userEmailAction,
  refetchShortList,
  pastCompanyName,
  hrData,
  stageStatus,
  key,
}) => {
  const { user } = useAuth();
  const hrId = user.uid;
  const [ThumbUpAndDownMutation, { data, loading, error }] = useMutation(
    //Mutation for updating a user emoji value after a practice
    INSERT_THUMBS_UP_AND_DOWN,
    {
      onCompleted: refetchShortList,
    }
  );

  const [removeShortList, { data: RemoveSL }] = useMutation(
    //Mutation for updating a user emoji value after a practice
    DELETE_SHORTLIST_ITEM,
    {
      onCompleted: refetchShortList,
    }
  );

  const [reverseSelectedAnimation, setReverseSelectedAnimation] =
    useState(false);
  const [homeFavoriteAnimation, setHomeFavoriteAnimation] = useState(false);
  const [homeHideAnimation, setHomeHideAnimation] = useState(false);
  const [favoritesHideAnimation, setFavoritesHideAnimation] = useState(false);
  const [unfitFavoritesAnimation, setUnfitFavoritesAnimation] = useState(false);
  const [hideIconsAboveAndBelow, setHideIconsAboveAndBelow] = useState("");
  const [hideIconsBelow, setHideIconsBelow] = useState("");

  const [animationBg, setAnimationBg] = useState(false);

  const thumbUpClick = () => {
    ThumbUpAndDownMutation({
      variables: {
        hrId: hrId,
        jobName: "",
        jobSeniority: "",
        jobType: "",
        status: "thumbsUp",
        candidateId: userID,
      },
    });
  };

  const thumbDownClick = () => {
    ThumbUpAndDownMutation({
      variables: {
        hrId: hrId,
        jobName: "",
        jobSeniority: "",
        jobType: "",
        status: "thumbsDown",
        candidateId: userID,
      },
    });
  };

  const reverseClick = () => {
    removeShortList({
      variables: {
        hrId: hrId,
        candidateId: userID,
      },
    });
  };
  //refetch queries.
  const iconShortList = () => {
    if (stageStatus == "Favorites") {
      return (
        <div>
          <div className={"flex justify-center "}>
            <ReceiptRefundIcon
              className={
                reverseSelectedAnimation
                  ? `   transition ease-in-out  hover:text-VouchGreen animate-myMove  scale-125 translate-y-6  `
                  : `h-4 w-4 text-gray-400 hover:text-VouchGreen cursor-pointer   ${hideIconsAboveAndBelow}`
              }
              onClick={reverseSelected}
              onAnimationEnd={reverseSelectedAnimationEnd}
            />
          </div>
          <div className="py-1.5 flex justify-center">
            <EyeOffIcon
              className={
                favoritesHideAnimation
                  ? " transition ease-in-out  hover:text-VouchGreen animate-fadeColorIn"
                  : `h-4 w-4 text-gray-400 hover:text-VouchGreen cursor-pointer ${hideIconsBelow} `
              }
              onClick={favoritesHide}
              onAnimationEnd={favoritesHideAnimationEnd}
            />
          </div>
          <div className={"flex justify-center pb-0.5"}>
            <MailOpenIcon
              className={`h-4 w-4 text-gray-400 hover:text-VouchGreen cursor-pointer ${hideIconsBelow}  ${hideIconsAboveAndBelow}`}
              onClick={moveToContacted}
            />
          </div>
        </div>
      );
    } else if (stageStatus == "Unfit") {
      return (
        <div>
          <div className={"flex justify-center "}>
            <ReceiptRefundIcon
              className={
                reverseSelectedAnimation
                  ? " transition ease-in-out  hover:text-VouchGreen animate-myMove  scale-125 translate-y-6 "
                  : `h-4 w-4 text-gray-400 hover:text-VouchGreen cursor-pointer  ${hideIconsAboveAndBelow}`
              }
              onClick={reverseSelected}
              onAnimationEnd={reverseSelectedAnimationEnd}
            />
          </div>
          <div className={"py-1 flex justify-center "}>
            <StarIcon
              className={
                unfitFavoritesAnimation
                  ? " transition ease-in-out  hover:text-VouchGreen animate-fadeColorIn"
                  : `h-5 w-5 text-gray-400 hover:text-VouchGreen cursor-pointer ${hideIconsBelow}  `
              }
              onClick={unfitFavorites}
              onAnimationEnd={unfitFavoritesAnimationEnd}
            />
          </div>
          <div className={"flex justify-center pb-0.5"}>
            <MailOpenIcon
              className={`h-4 w-4 text-gray-400 hover:text-VouchGreen cursor-pointer ${hideIconsBelow}  ${hideIconsAboveAndBelow}`}
              onClick={moveToContacted}
            />
          </div>
        </div>
      );
    } else if (stageStatus == "Contacted") {
      return (
        <div>
          <div className={"flex justify-center pb-0.5"}>
            <MailIcon className={`h-5 w-5 text-blue-500`} />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className={"flex justify-center "}>
            <StarIcon
              className={
                homeFavoriteAnimation
                  ? " transition ease-in-out  hover:text-VouchGreen animate-myMove  "
                  : `h-5 w-5 text-gray-400 hover:text-VouchGreen cursor-pointer ${hideIconsAboveAndBelow} `
              }
              onClick={homeFavorite}
              onAnimationEnd={homeFavoriteAnimationEnd}
            />
          </div>
          <div className="py-1 flex justify-center">
            <EyeOffIcon
              className={
                homeHideAnimation
                  ? " transition ease-in-out  hover:text-VouchGreen animate-fadeColorIn"
                  : `h-5 w-5 text-gray-400 hover:text-VouchGreen cursor-pointer ${hideIconsBelow} `
              }
              onClick={homeHide}
              onAnimationEnd={homeHideAnimationEnd}
            />
          </div>
          <div className={"flex justify-center pb-0.5"}>
            <MailOpenIcon
              className={`h-4 w-4 text-gray-400 hover:text-VouchGreen cursor-pointer ${hideIconsBelow} ${hideIconsAboveAndBelow} `}
              onClick={moveToContacted}
            />
          </div>
        </div>
      );
    }
  };

  const moveToContacted = () => {
    ThumbUpAndDownMutation({
      variables: {
        hrId: hrId,
        jobName: "",
        jobSeniority: "",
        jobType: "",
        status: "contacted",
        candidateId: userID,
      },
    });
    toastFeedback();

    sendEmail();
  };

  const reverseSelected = () => {
    //function for animating the  reverse icon on favorites and hidden
    setReverseSelectedAnimation(true);
    setAnimationBg(true);
    setHideIconsBelow(
      "transition ease-in-out   hover:text-VouchGreen animate-myHide  scale-125 translate-y-6"
    );
    reverseClick();
  };

  const reverseSelectedAnimationEnd = () => {
    setReverseSelectedAnimation(false);
    setHideIconsBelow("");
    setAnimationBg(false);
  };

  const homeFavorite = () => {
    //favorite on home, hides middle and mail icon
    thumbUpClick();
    setHomeFavoriteAnimation(true);
    setAnimationBg(true);
    setHideIconsBelow(
      "transition ease-in-out   hover:text-VouchGreen animate-myHide  scale-125 translate-y-6"
    );
  };

  const homeFavoriteAnimationEnd = () => {
    setHomeFavoriteAnimation(false);
    setHideIconsBelow("");
    setAnimationBg(false);
  };

  const homeHide = () => {
    //hides on home, hides favorite icon and mail icon styling
    //used on Home, Favorites, and Hidden
    thumbDownClick();
    setHomeHideAnimation(true);
    setAnimationBg(true);
    setHideIconsAboveAndBelow(
      "transition ease-in-out   hover:text-VouchGreen animate-myHide "
    );
  };

  const homeHideAnimationEnd = () => {
    setHomeHideAnimation(false);
    setAnimationBg(false);
    setHideIconsAboveAndBelow("");
  };

  const favoritesHide = () => {
    //hides hide
    thumbDownClick();
    setFavoritesHideAnimation(true);
    setAnimationBg(true);
    setHideIconsAboveAndBelow(
      "transition ease-in-out   hover:text-VouchGreen animate-myHide "
    );
  };

  const favoritesHideAnimationEnd = () => {
    setFavoritesHideAnimation(false);
    setAnimationBg(false);
    setHideIconsAboveAndBelow("");
  };

  const unfitFavorites = () => {
    //hides favorites
    thumbUpClick();
    setUnfitFavoritesAnimation(true);
    setAnimationBg(true);
    setHideIconsAboveAndBelow(
      "transition ease-in-out   hover:text-VouchGreen animate-myHide "
    );
  };

  const unfitFavoritesAnimationEnd = () => {
    setUnfitFavoritesAnimation(false);
    setAnimationBg(false);
    setHideIconsAboveAndBelow("");
  };

  const toastFeedback = () => {
    toast.success("Interest Email Sent! ✅", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const sendEmail = async () => {
    const res = await fetch("/api/interestEmail", {
      body: JSON.stringify({
        email: userEmailAction,
        hrEmail: user.email,
        candidateFirstName: firstName,
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

  return (
    <div className="py-2  col-span-full">
      <div
        className={
          "w-6/6 max-h-fit filter drop-shadow-sm bg-white grid grid-cols-3 grid-flow-col text-sm text-gray-500 py-2 "
        }
      >
        <div className={"col-start-1  "}>
          <div className={"grid grid-cols-2 content-left h-full"}>
            <div className={"col-start-1 "}>
              <div className={"grid grid-cols-8 pl-2"}>
                <div
                  className={
                    "col-start-1 col-span-2 px-2 grid place-content-evenly"
                  }
                >
                  <div
                    className={
                      animationBg
                        ? `border-2 rounded-t-full rounded-b-full grid place-content-evenly transition hover:bg-VouchGreen delay-50 duration-250 ease-in `
                        : "border-2 rounded-t-full rounded-b-full grid place-content-evenly"
                    }
                  >
                    {/* get animation of backround to disappear*/}
                    {iconShortList()}
                  </div>
                </div>
                <div className={"col-start-3 col-span-5 pt-2 pl-2"}>
                  <p className={"font-bold text-gray-900 text-sm"}>
                    {firstName} {lastName}
                  </p>
                  <div className={"text-xs"}> {jobLocation}</div>
                  <div className={""}>
                    <div className={"grid justify-items-start pt-1"}>
                      <ButtonLinkedin
                        backgroundColour="white"
                        userLinkedinURL={userLinkedinURL}
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={"col-start-2 pt-2 pl-4"}>
              <div>
                <p className={"w-full border-r-4 border-gray-400 truncate "}>
                  {pastPosition1}
                </p>
              </div>
              <div>
                <p
                  className={
                    "w-full pt-1 text-xs border-r-4 border-gray-400 truncate"
                  }
                >
                  at {pastCompanyName}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={"col-start-2 pt-2"}>
          <div className={"grid grid-cols-2 "}>
            <div className={"col-start-1 pl-12"}>
              <div className={"pr-4"}>
                <div>
                  <p className="w-full truncate ">{companyName}</p>
                  <p className="w-full pt-1 text-xs truncate">
                    {" "}
                    Employees: {numEmployees}
                  </p>
                </div>
              </div>
            </div>
            <div className={"col-start-2"}>
              <p className={""}> {positionTitle}</p>

              <p className={"w-full pt-1 text-xs"}>{stageInterview}</p>
            </div>
          </div>
        </div>
        <div className={"col-start-3 pt-2 "}>
          <div className={"grid grid-cols-2"}>
            <div className={"col-start-1"}>
              <p className={""}>{salaryRange} </p>
            </div>
            <div className={"col-start-2"}>
              <p className={"w-full font-gray-500 flex flex-wrap  text-xs"}>
                <StarIcon className={"h-4 w-4 text-VouchGreen "} />
                {standOutSkill1}
              </p>
              <p className={"w-full  ont-gray-500 pt-1 flex text-xs "}>
                <StarIcon className={"h-4 w-4 text-VouchGreen"} />
                {standOutSkill2}
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </div>
  );
};
