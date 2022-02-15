import { gql } from "@apollo/client";

export const QUERY_ANON = gql`
  query QUERY_ANON($hrId: String = "") {
    anonymity(where: { hrId: { _eq: $hrId } }) {
      status
      candidateId
      hrId
    }
  }
`;
