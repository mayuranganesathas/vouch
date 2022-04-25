import { gql } from "@apollo/client";

export const QUERY_ANON_DATA = gql`
  query QUERY_ANON_DATA($hrId: String = "") {
    anon_metadata(where: { hrId: { _eq: $hrId } }) {
      candidateId
      status
    }
    anonymity {
      candidateId
      hrId
      status
    }
  }
`;
