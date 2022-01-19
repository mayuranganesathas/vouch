import { gql } from "@apollo/client";

export const UPSERT_CANDIDATE_METADATA = gql`
  mutation UPSERT_CANDIDATE_METADATA(
    $industry: String = ""
    $positionTitle: String = ""
    $hrId: String = ""
    $candidateFirstName: String = ""
    $candidateLastName: String = ""
    $companyWebsite: String = ""
    $linkedIn: String = ""
    $locationCity: String = ""
    $locationState: String = ""
    $jobCategory: String = ""
    $companyName: String = ""
    $seniority: String = ""
    $candidateEmail: String = ""
    $candidateId: Int
  ) {
    update_candidate_metadata(
      where: { hrId: { _eq: $hrId }, candidateEmail: { _eq: $candidateEmail } }
      _set: {
        industry: $industry
        positionTitle: $positionTitle
        companyWebsite: $companyWebsite
        linkedIn: $linkedIn
        locationCity: $locationCity
        locationState: $locationState
        jobCategory: $jobCategory
        companyName: $companyName
        seniority: $seniority
        candidateId: $candidateId
      }
    ) {
      returning {
        created_at
      }
    }
    update_candidates(
      where: { hrId: { _eq: $hrId }, candidateEmail: { _eq: $candidateEmail } }
      _set: {
        candidateFirstName: $candidateFirstName
        candidateLastName: $candidateLastName
        candidateId: $candidateId
      }
    ) {
      returning {
        created_at
      }
    }
  }
`;
