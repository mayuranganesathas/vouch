import { getRedirectResult } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "../../lib/authContext";
import { auth } from "../../lib/firebase";

export interface ButtonGoogleLoginProps {}

const ButtonGoogleLogin = ({}: ButtonGoogleLoginProps) => {
  const { signIn } = useAuth();
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
    <div>
      <button
        className={
          "rounded bg-white drop-shadow-md border-white border-1 w-auto h-auto py-1"
        }
        type="button"
        onClick={signIn}
      >
        <div className={"grid grid-cols-5"}>
          <div className={"col-start-1 col-span-1"}>
            <img
              src="./images/googleG.png"
              width="38"
              height="auto"
              className={"pl-1"}
            />
          </div>
          <div
            className={
              "col-start-2 col-span-4 flex justify-center items-center text-gray-500 font-bold text-sm"
            }
          >
            {" "}
            Sign in with Google
          </div>
        </div>
      </button>
    </div>
  );
};

export default ButtonGoogleLogin;
