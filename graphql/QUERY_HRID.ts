import { gql } from "@apollo/client";

export const QUERY_HRID = gql`
  query QUERY_HRID($hrId: String = "") {
    hr_voucher(where: { hrId: { _eq: $hrId } }) {
      companyName
      location
      industry
      companyWebsite
      userName
      position
    }
    company_data(where: { hrId: { _eq: $hrId } }) {
      companyLogoAddress
    }
  }
`;
