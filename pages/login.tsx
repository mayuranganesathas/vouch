import Head from "next/head";
import router from "next/router";
import React, { useEffect } from "react";
import ButtonGoogleLogin from "../components/ui/ButtonGoogleLogin";
import ButtonGoolgeLogin from "../components/ui/ButtonGoogleLogin";
import { ButtonVouch } from "../components/ui/ButtonVouch";
import { useAuth } from "../lib/authContext";
import background from "./images/officeHRLogin.png";
import ButtonExchangeLogin from "../components/ui/ButtonExchangeLogin";
import { HyperlinkButton } from "../components/ui/HyperlinkButton";
import { useState } from "react";

export default function RegisterHRLogin() {
  const [stageStatus, setStageStatus] = useState("Login");
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailRegistration, setEmailRegistration] = useState("");
  const [passwordRegistration, setPasswordRegistration] = useState("");
  const { signInUsernameAndPassword, signUpFunction, auth, user } = useAuth();

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user]);

  const getAuthTile = () => {
    if (stageStatus == "Login") {
      return (
        <div className={"col-start-2 flex justify-center items-center pr-12 "}>
          <div className="w-3/5 h-auto px-6 bg-white rounded drop-shadow-2xl border border-gray-50 grid justify-items-center">
            <div className="pt-6 pb-2 font-semibold text-sm">
              Log in to your account
            </div>
            <div>
              <div>
                <ButtonGoogleLogin />
              </div>
              <div className="py-4">
                <ButtonExchangeLogin />
              </div>
            </div>

            <div className="grid grid-cols-11 w-full">
              <div className="py-2  w-full col-start-1 col-span-5">
                <hr></hr>
              </div>
              <div className="text-gray-200 col-start-6 text-xs px-1"> OR </div>
              <div className="py-2 w-full col-start-7 col-span-5">
                <hr></hr>
              </div>
            </div>
            <div className="w-full pt-6 px-4">
              <div className="text-xs font-bold text-gray-700"> Email</div>
              <input
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
                className="border-2 border-blue-100 w-full bg-blue-50"
              ></input>
              <div className="w-full pt-4">
                <div className="text-xs font-bold text-gray-700"> Password</div>
                <input
                  value={password}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-2 border-blue-100 w-full bg-blue-50"
                ></input>
              </div>
              <div className="pt-6">
                <ButtonVouch
                  label="Log In"
                  backgroundColour="VouchGreen"
                  buttonType="square"
                  textColour="white"
                  onClick={() =>
                    signInUsernameAndPassword(userName, password).then(() =>
                      router.push("/dashboard")
                    )
                  }
                  buttonWidth="wide"
                />
              </div>
              <div className="text-xs text-gray-400 pt-4">
                {" "}
                By continuing, you agree to Vouch's Terms of use. Read our
                Privacy Policy
              </div>
              <div className="py-10 text-xs text-gray-400 text-center">
                <span>Don't have an account?</span>{" "}
                <span>
                  <HyperlinkButton
                    backgroundColour="white"
                    label="Signup here"
                    buttonType="square"
                    textColour="VouchGreen"
                    onClick={() => {
                      setStageStatus("SignUp");
                    }}
                    buttonWidth="fit"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (stageStatus == "SignUp") {
      return (
        <div className={"col-start-2 flex justify-center items-center pr-12 "}>
          <div className="w-3/5 h-auto px-6 bg-white rounded drop-shadow-2xl border border-gray-50 grid justify-items-center">
            <div className="pt-6 pb-2 font-semibold text-sm">
              Get started with Vouch
            </div>
            <div className="text-xs text-gray-500 py-4 px-4">
              <div>Sign up to discover actively looking candidates</div>
            </div>
            <div className="w-full pt-6 px-4">
              <div>
                <div>
                  <ButtonGoogleLogin />
                </div>
                <div className="py-4">
                  <ButtonExchangeLogin />
                </div>
              </div>
            </div>

            <div className="w-full px-4">
              <div className="">
                <ButtonVouch
                  label="Sign up with email"
                  backgroundColour="VouchGreen"
                  buttonType="square"
                  textColour="white"
                  onClick={() => setStageStatus("email")}
                  buttonWidth="wide"
                />
              </div>
              <div className="text-xs text-gray-400 pt-4">
                {" "}
                By continuing, you agree to Vouch's Terms of use. Read our
                Privacy Policy
              </div>
              <div className="py-10 text-xs text-gray-400 text-center">
                <span>Already signed up?</span>{" "}
                <span>
                  <HyperlinkButton
                    backgroundColour="white"
                    label="Log in"
                    buttonType="square"
                    textColour="VouchGreen"
                    onClick={() => setStageStatus("Login")}
                    buttonWidth="fit"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (stageStatus == "email") {
      return (
        <div className={"col-start-2 flex justify-center items-center pr-12 "}>
          <div className="w-3/5 py-4 h-auto px-6 bg-white rounded drop-shadow-2xl border border-gray-50 grid justify-items-center">
            <div className="w-full px-4 pt-4">
              <div className="text-center text-xl font-semibold">
                Register Today
              </div>
              <div className="text-xs font-bold text-gray-700"> Email</div>
              <input
                value={emailRegistration}
                onChange={(e) => setEmailRegistration(e.target.value)}
                className="border-2 border-blue-100 w-full bg-blue-50"
              ></input>
            </div>

            <div className="w-full px-4 pt-4">
              <div className="text-xs font-bold text-gray-700"> Password</div>
              <input
                value={passwordRegistration}
                type="password"
                onChange={(e) => setPasswordRegistration(e.target.value)}
                className="border-2 border-blue-100 w-full bg-blue-50"
              ></input>
            </div>

            <div className="w-full px-4">
              <div className="pt-6">
                <ButtonVouch
                  label="Create Account"
                  backgroundColour="VouchGreen"
                  buttonType="square"
                  textColour="white"
                  onClick={() => {
                    signUpFunction(
                      emailRegistration,
                      passwordRegistration
                    ).then(() => router.push("/dashboard"));
                  }}
                  buttonWidth="wide"
                />
              </div>
              <div className="text-xs text-gray-400 pt-4">
                {" "}
                By continuing, you agree to Vouch's Terms of use. Read our
                Privacy Policy
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className={"h-screen bg-VouchBg "}>
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
            backgroundColour="empty2"
            buttonType="square"
            textColour="VouchGreen"
            label="Vouch Homepage"
            onClick={() => {
              window.open("https://www.vouchrecruit.com");
            }}
          />
        </div>
      </div>
      <div className={"grid grid-cols-2 pl-8"}>
        <div>
          <div
            className={
              "col-start-1 text-4xl text-VouchDark pt-8 px-20 font-bold"
            }
          >
            Transform the way your team searches for talent
          </div>
          <div className={"col-start-1 px-20"}>
            <div className={"text-gray-600 text-base pt-10 pb-10"}>
              Fill your candidate pipeline faster with pre-vetted referrals from
              fellow HR professionals
            </div>
            <div className={""}>
              <img
                src="./images/vouchImageLogin.png"
                width="full"
                height="auto"
              />
            </div>
          </div>
        </div>

        <div className="pt-8">{getAuthTile()}</div>
      </div>
    </div>
  );
}

/*style={{ backgroundImage: 'url("./images/officeHRLogin.png")' }}*/
