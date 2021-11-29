import React from "react";
import ButtonGoogleLogin from "../components/ui/ButtonGoogleLogin";
import ButtonGoolgeLogin from "../components/ui/ButtonGoogleLogin";
import { ButtonVouch } from "../components/ui/ButtonVouch";
import background from "./images/officeHRLogin.png";

export default function RegisterHRLogin(prop) {
  const onClickHomePage = () => {
    window.open(
      "https://www.wix.com/feedback-ng/feedback/8cb3ccbe-2f71-4eaa-ac32-3474ed90b853"
    );
  };
  return (
    <div
      className={"h-screen bg-cover bg-no-repeat"}
      style={{ backgroundImage: 'url("./images/officeHRLogin.png")' }}
    >
      <div className={"grid grid-cols-2"}>
        <div
          className={
            "text-white col-start-1 col-span-1 flex justify-start items-center pl-8 pt-8"
          }
        >
          <img src="./images/VouchLogo1.png" width="125" height="auto" />
        </div>
        <div
          className={
            "col-start-2 flex justify-end items-center pr-8 pt-8 text-white"
          }
        >
          <ButtonVouch
            backgroundColour="white"
            buttonType="rounded"
            textColour="white"
            label="Vouch Homepage"
            onClick={onClickHomePage}
          />
        </div>
      </div>
      <div className={"py-4 border-b-2 border-white"}></div>
      <div className={"grid grid-cols-3"}>
        <div
          className={"col-start-1 col-span-2 text-white text-6xl pt-24 px-28"}
        >
          Fill your candidate pipeline faster with pre-vetted referrals from
          fellow HR professionals
        </div>
        <div className={"col-start-3 flex justify-center items-center"}>
          {" "}
          <ButtonGoogleLogin />
        </div>
      </div>
    </div>
  );
}

/*style={{ backgroundImage: 'url("./images/officeHRLogin.png")' }}*/
