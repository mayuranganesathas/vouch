import React, { useEffect } from "react";

import { useMutation, useQuery } from "@apollo/client";
import router from "next/router";
import "react-toastify/dist/ReactToastify.css";
import { INSERT_ANON } from "../graphql/INSERT_ANON";

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

  return <div className={"bg-white w-full h-screen"}>You've Accepted.</div>;
}
