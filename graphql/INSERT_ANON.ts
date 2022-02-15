import { gql } from "@apollo/client";

export const INSERT_ANON = gql`
  mutation INSERT_ANON(
    $candidateId: Int
    $hrId: String = ""
    $status: String = ""
  ) {
    insert_anonymity(
      objects: { candidateId: $candidateId, hrId: $hrId, status: $status }
      on_conflict: { constraint: anonymity_pkey, update_columns: status }
    ) {
      returning {
        status
      }
    }
  }
`;
