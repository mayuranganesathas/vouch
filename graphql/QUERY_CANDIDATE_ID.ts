import { gql } from "@apollo/client";

export const QUERY_CANDIDATE_ID = gql`
  query QUERY_CANDIDATE_ID($privacyId: String = "", $hrId: String = "") {
    hr_voucher_metadata(
      where: { privacyId: { _eq: $privacyId }, hrId: { _eq: $hrId } }
    ) {
      candidateId
    }
  }
`;
