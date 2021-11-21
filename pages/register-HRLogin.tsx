import React from "react";
import ButtonGoolgeLogin from "../components/ui/ButtonGoogleLogin";
import background from "./images/officeHRLogin.png";

export default function RegisterHRLogin(prop) {
  return (
    <div
      className={"h-screen bg-cover bg-no-repeat"}
      style={{ backgroundImage: 'url("./images/officeHRLogin.png")' }}
    >
      <div className={"text-white"}>hello world </div>
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
          <ButtonGoolgeLogin />
        </div>
      </div>
    </div>
  );
}

/*style={{ backgroundImage: 'url("./images/officeHRLogin.png")' }}*/
