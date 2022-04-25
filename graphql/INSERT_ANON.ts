import { gql } from "@apollo/client";

export const INSERT_ANON = gql`
  mutation INSERT_ANON_META(
    $candidateId: Int
    $hrId: String = ""
    $status: String = ""
  ) {
    insert_anon_metadata(
      objects: { candidateId: $candidateId, hrId: $hrId, status: $status }
      on_conflict: { constraint: anon_metadata_pkey, update_columns: status }
    ) {
      returning {
        status
      }
    }
  }
`;
