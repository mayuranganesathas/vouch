import { gql } from "@apollo/client";

export const UPSERT_VOUCH_CANDIDATE = gql`
  mutation UPSERT_VOUCH_CANDIDATE_CANDIDATES(
    $objects: [candidates_insert_input!]!
  ) {
    insert_candidates(objects: $objects) {
      returning {
        created_at
      }
    }
  }
`;

//break into multiple mutation calls, with multiple objects
