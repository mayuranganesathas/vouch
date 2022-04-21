import { INSERT_THUMBS_UP_AND_DOWN } from "../graphql/INSERT_THUMBS_UP";
import React, { useEffect, useState } from "react";

import { useMutation, useQuery } from "@apollo/client";
import router from "next/router";
// //Moved to contacted new page
// const [ThumbUpAndDownMutation, {}] = useMutation(INSERT_THUMBS_UP_AND_DOWN);
// const moveToContacted = () => {
//   ThumbUpAndDownMutation({
//     variables: {
//       hrId: hrId,
//       jobName: "",
//       jobSeniority: "",
//       jobType: "",
//       status: "contacted",
//       candidateId: candidateId,
//     },
//   });
// };
export default function acceptPrivacy() {
  return <div></div>;
}
