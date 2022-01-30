import Head from "next/head";
import router from "next/router";
import React, { useEffect } from "react";
import ButtonGoogleLogin from "../components/ui/ButtonGoogleLogin";
import ButtonGoolgeLogin from "../components/ui/ButtonGoogleLogin";
import { ButtonVouch } from "../components/ui/ButtonVouch";
import { useAuth } from "../lib/authContext";
import background from "./images/officeHRLogin.png";

export default function RegisterHRLogin(prop) {
  const onClickHomePage = () => {
    window.open("https://www.vouchrecruit.com");
  };

  return (
    <div className={"h-screen bg-VouchBg h-full"}>
      <Head>
        <title>Login | Vouch</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className={"grid grid-cols-2"}>
        <div
          className={
            "text-gray-500 col-start-1 col-span-1 flex justify-start items-center pl-8 pt-8"
          }
        >
          <img src="./images/VouchLogo1.png" width="100" height="auto" />
        </div>
        <div
          className={
            "col-start-2 flex justify-end items-center pr-8 pt-8 text-white"
          }
        >
          <ButtonVouch
            backgroundColour="white"
            buttonType="square"
            textColour="white"
            label="Vouch Homepage"
            onClick={onClickHomePage}
          />
        </div>
      </div>
      <div className={"grid grid-cols-2 pl-8"}>
        <div>
          <div
            className={
              "col-start-1 text-4xl text-VouchDark pt-16 px-28 font-bold"
            }
          >
            Transform the way your team searches for talent
          </div>
          <div className={"col-start-1 px-28"}>
            <div className={"text-gray-600 text-lg pt-10 pb-10"}>
              Fill your candidate pipeline faster with pre-vetted referrals from
              fellow HR professionals
            </div>
            <div className="w-4/5 h-auto px-6 bg-white rounded drop-shadow-xl border border-gray-50 grid justify-items-center">
              <div className="pt-6 pb-2 font-semibold text-sm">
                Log in to your account
              </div>
              <ButtonGoogleLogin />
            </div>
          </div>
        </div>

        <div
          className={"col-start-2 flex justify-center items-center pt-10 pr-12"}
        >
          <div className={""}>
            <img
              src="./images/vouchImageLogin.png"
              width="full"
              height="auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/*style={{ backgroundImage: 'url("./images/officeHRLogin.png")' }}*/
