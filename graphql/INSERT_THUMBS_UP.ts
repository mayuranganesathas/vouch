import { gql } from "@apollo/client";

export const INSERT_THUMBS_UP_AND_DOWN = gql`
  mutation INSERT_THUMBS_UP(
    $hrId: String = ""
    $jobName: String = ""
    $jobSeniority: String = ""
    $jobType: String = ""
    $status: String = ""
    $candidateId: Int = ""
  ) {
    insert_shortlist(
      objects: {
        hrId: $hrId
        jobName: $jobName
        jobSeniority: $jobSeniority
        jobType: $jobType
        status: $status
        candidateId: $candidateId
      }
      on_conflict: { constraint: shortlist_pkey, update_columns: status }
    ) {
      returning {
        hrId
      }
    }
  }
`;
