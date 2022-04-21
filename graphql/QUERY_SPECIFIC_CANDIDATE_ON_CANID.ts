import { gql } from "@apollo/client";

export const QUERY_CANDIDATE_ON_CANID = gql`
  query QUERY_CANDIDATE_ON_CANID($candidateId: Int) {
    candidate_metadata(where: { candidateId: { _eq: $candidateId } }) {
      locationCity
      locationState
      linkedIn
      positionTitle
      industry
      companyName
      companyWebsite
      candidateEmail
      jobCategory
    }
    candidates(where: { candidateId: { _eq: $candidateId } }) {
      candidateFirstName
      candidateLastName
    }
  }
`;
