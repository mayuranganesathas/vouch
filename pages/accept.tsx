import React, { useEffect } from "react";

import { useMutation, useQuery } from "@apollo/client";
import router from "next/router";
import "react-toastify/dist/ReactToastify.css";
import { UPSERT_ANON } from "../graphql/UPSERT_ANON";

export default function acceptPrivacy() {
  const hrId = router.query.hrId.toString();
  const candidateId = router.query.candidateId.toString();

  const [upsertAnonymity, { data, loading, error }] = useMutation(
    UPSERT_ANON,

    {
      variables: {
        hrId: "incompleteField",
        candidateId: "incompleteField",
      },
    }
  );

  useEffect(() => {
    upsertAnonymity({
      variables: {
        hrId: hrId,
        candidateId: candidateId,
      },
    });
  });

  return <div className={"bg-white w-full h-screen"}>TEST IT HAPPENED!</div>;
}
