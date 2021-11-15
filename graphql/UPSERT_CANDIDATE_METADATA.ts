import { gql } from "@apollo/client";

export const UPSERT_CANDIDATE_METADATA = gql`
  mutation UPSERT_CANDIDATE_METADATA(
    $industry1: String = ""
    $industry2: String = ""
    $industry3: String = ""
    $positionTitle1: String = ""
    $positionTitle3: String = ""
    $positionTitle2: String = ""
  ) {
    insert_candidate_metadata(
      objects: {
        industry1: $industry1
        industry2: $industry2
        industry3: $industry3
        positionTitle1: $positionTitle1
        positionTitle2: $positionTitle2
        positionTitle3: $positionTitle3
      }
    ) {
      returning {
        candidateId
      }
    }
  }
`;
