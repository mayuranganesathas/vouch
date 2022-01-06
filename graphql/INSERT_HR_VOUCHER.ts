import { gql } from "@apollo/client";

export const INSERT_HR_VOUCHER = gql`
  mutation INSERT_HR_VOUCHER(
    $companyName: String!
    $companyWebsite: String = ""
    $hrEmail: String!
    $industry: String = ""
    $rangeOfEmployees: String = ""
    $userName: String = ""
    $hrId: String!
    $locationState: String = ""
    $locationCity: String = ""
  ) {
    insert_hr_voucher(
      objects: {
        companyName: $companyName
        companyWebsite: $companyWebsite
        hrEmail: $hrEmail
        industry: $industry
        rangeOfEmployees: $rangeOfEmployees
        userName: $userName
        hrId: $hrId
        locationState: $locationState
        locationCity: $locationCity
      }
    ) {
      returning {
        created_at
        hrId
      }
    }
    insert_company_data(
      objects: {
        companyWebsite: $companyWebsite
        corporateName: $companyName
        location: $locationCity
        rangeOfEmployees: $rangeOfEmployees
        hrId: $hrId
      }
    ) {
      returning {
        created_at
      }
    }
  }
`;
