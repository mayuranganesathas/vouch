import { gql } from "@apollo/client";

export const QUERY_CANDIDATE_ID = gql`
  query QUERY_CANDIDATE_ID($candidateEmail: String = "", $hrId: String = "") {
    hr_voucher_metadata(
      where: { candidateEmail: { _eq: $candidateEmail }, hrId: { _eq: $hrId } }
    ) {
      candidateId
    }
  }
`;
