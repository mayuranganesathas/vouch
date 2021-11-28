import { getRedirectResult } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import ButtonGoogleLogin from "../components/ui/ButtonGoogleLogin";
import { useAuth } from "../lib/authContext";
import { auth } from "../lib/firebase";

import background from "./images/officeHRLogin.png";

export interface RegisterHRLogin {}
export default function RegisterHRLogin() {
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
          [VouchLogo]]{" "}
        </div>
        <div
          className={
            "col-start-2 flex justify-end items-center pr-8 pt-8 text-white"
          }
        >
          Vouch Homepage
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
