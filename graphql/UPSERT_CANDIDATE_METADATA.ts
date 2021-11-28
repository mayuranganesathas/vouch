import { gql } from "@apollo/client";

export const UPSERT_CANDIDATE_METADATA = gql`
  mutation UPSERT_CANDIDATE_METADATA(
    $industry1: String = ""
    $industry2: String = ""
    $industry3: String = ""
    $positionTitle1: String = ""
    $positionTitle3: String = ""
    $positionTitle2: String = ""
    $_eq: String = ""
    $_eq1: String = ""
    $candidateEmail: String = ""
    $candidateFirstName: String = ""
    $candidateLastName: String = ""
    $Location: String = ""
    $companyWebsite1: String = ""
    $companyWebsite2: String = ""
    $companyWebsite3: String = ""
    $linkedIn: String = ""
    $Location1: String = ""
  ) {
    update_candidate_metadata(
      where: { hrId: { _eq: $_eq } }
      _set: {
        industry1: $industry1
        industry2: $industry2
        industry3: $industry3
        positionTitle1: $positionTitle1
        positionTitle2: $positionTitle2
        positionTitle3: $positionTitle3
        companyWebsite1: $companyWebsite1
        companyWebsite2: $companyWebsite2
        companyWebsite3: $companyWebsite3
        linkedIn: $linkedIn
        Location: $Location1
      }
    ) {
      returning {
        created_at
      }
    }
    update_candidates(
      where: { hrId: { _eq: $_eq1 } }
      _set: {
        candidateEmail: $candidateEmail
        candidateFirstName: $candidateFirstName
        candidateLastName: $candidateLastName
      }
    ) {
      returning {
        created_at
      }
    }
  }
`;
