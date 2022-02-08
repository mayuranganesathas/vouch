import { getRedirectResult } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "../../lib/authContext";
import { auth } from "../../lib/firebase";

export interface ButtonExchangeLoginProps {}

const ButtonExchangeLogin = ({}: ButtonExchangeLoginProps) => {
  const { signInGoogle, signInMicrosoft } = useAuth();
  const router = useRouter();

  useEffect(() => {
    async function checkAuth() {
      const result = await getRedirectResult(auth);
      if (result) {
        router.push("/dashboard");
      }
    }
    checkAuth();
  }, []);

  return (
    <div className={""}>
      <button
        className={
          "rounded bg-gray-100 drop-shadow-md border  w-auto h-auto py-1"
        }
        type="button"
        onClick={signInMicrosoft}
      >
        <div className={"grid grid-cols-5 "}>
          <div className={"col-start-1 col-span-1"}>
            <img
              src="./images/outlooklogo.png"
              width="38"
              height="auto"
              className={"pl-1"}
            />
          </div>
          <div
            className={
              "col-start-2 col-span-4 flex justify-center items-center px-10 text-sm"
            }
          >
            {" "}
            Sign in with Outlook
          </div>
        </div>
      </button>
    </div>
  );
};

export default ButtonExchangeLogin;
