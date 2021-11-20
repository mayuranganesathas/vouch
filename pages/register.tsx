import React, { useEffect, useRef, useState } from "react";
import { HROnboarding } from "../components/HROnboarding/HROnboarding";
import SignInPage from "../components/signup";

const Register = () => {
  //style page
  const hello = () => {};
  return (
    <div>
      <SignInPage />;
      <HROnboarding onClick={hello} />;
    </div>
  );
};

export default Register;
