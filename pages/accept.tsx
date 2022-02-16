import React, { useEffect } from "react";

import { useMutation, useQuery } from "@apollo/client";
import router from "next/router";
import "react-toastify/dist/ReactToastify.css";
import { INSERT_ANON } from "../graphql/INSERT_ANON";
import { ButtonVouch } from "../components/ui/ButtonVouch";

export default function acceptPrivacy() {
  const hrId = router.query.hrId.toString();
  const candidateId = router.query.candidateId.toString();
  
  const [upsertAnonymity, { data, loading, error }] = useMutation(
    INSERT_ANON,

    {
      variables: {
        hrId: "incompleteField",
        candidateId: "incompleteField",
        status: "incompleteField",
      },
    }
  );
  

  useEffect(() => {
    upsertAnonymity({
      variables: {
        hrId: hrId,
        candidateId: candidateId,
        status: "available",
      },
    });
  }, []);
  
  const onClick = () =>{};

  return <div className={"bg-gray-100 w-full h-screen grid content-center"}>
            <div className={"flex justify-center items-center"}>
            
              <div className={"px-8 shadow-lg rounded-xl w-2/5 h-auto bg-white"}>
                <div className= "flex justify-center items-center"><img
                  src="./images/sendRequest.png"
                  width="auto"
                  height="auto"
                  className={"flex justify-center items-center py-2 px-2"}
                /> 
                </div>
                <div className={"pt-8 text-center font-bold pb-4 text-lg"}>
                  Your LinkedIn profile has been shared!
                </div>
                <div className={"pt-2 text-sm text-center text-gray-500 px-16"}>
                Congrats on being fast-tracked for a new exiciting role! Only this HR manager has access to your LinkedIn information in order to better assess the fit as a referral in their organization. 
                </div>
               
                <div className="flex justify-center pt-8 py-4">
                  <ButtonVouch
                    backgroundColour={"VouchGreen"}
                    buttonType={"square"}
                    textColour={"white"}
                    label={"Vouch FAQs"}
                    disabled={false}
                    onClick={onClick}
                  />
                </div>
                <div className="flex justify-center items-center pt-12">
                  <img
                    src="./images/VouchLogo1.png"
                    width="100"
                    height="auto"
                    className={"flex justify-center items-center py-2 px-2"}
                  />
                </div>

                <div className={"pb-4 border-b border-gray-200 "}></div>
              </div>
            </div>
          </div>;
}
