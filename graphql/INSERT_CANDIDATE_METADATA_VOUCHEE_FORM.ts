import { gql } from "@apollo/client";

export const UPSERT_VOUCH_CANDIDATE_META = gql`
  mutation UPSERT_VOUCH_CANDIDATE_META(
    $objects: [candidate_metadata_insert_input!]!
  ) {
    insert_candidate_metadata(objects: $objects) {
      returning {
        created_at
      }
    }
  }
`;

//break into multiple mutation calls, with multiple objects
