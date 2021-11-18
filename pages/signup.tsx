import { getRedirectResult } from "@firebase/auth";
import React, { useEffect } from "react";
import { useAuth } from "../lib/authContext";
import { auth } from "../lib/firebase";
import { useRouter } from "next/router";

export default function SignInPage() {
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
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col items-center gap-8">
          <p className="font-bold text-4xl text-center"> Welcome to Vouch</p>
        </div>
        <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-8 mt-12">
          <div className="w-1/2"></div>
          <div className="flex flex-col items-center gap-y-8 justify-between">
            <div className=""></div>
            <button
              onClick={() => signIn()}
              className="flex justify-between items-center bg-white border border-black rounded-2xl p-4 w-64 hover:bg-gray-100 shadow-lg"
            >
              Sign in with Google
              <img className="w-8" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
