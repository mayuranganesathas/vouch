import { gql } from "@apollo/client";

export const UPSERT_VOUCH_CANDIDATE = gql`
  mutation UPSERT_VOUCH_CANDIDATE(
    $objects: [hr_voucher_metadata_insert_input!]!
  ) {
    insert_hr_voucher_metadata(objects: $objects) {
      returning {
        hrId
      }
    }
  }
`;

//break into multiple mutation calls, with multiple objects
