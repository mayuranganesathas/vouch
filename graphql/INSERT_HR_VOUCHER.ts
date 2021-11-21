import { gql } from "@apollo/client";

export const INSERT_HR_VOUCHER = gql`
  mutation INSERT_HR_VOUCHER(
    $companyName: String = ""
    $companyWebsite: String = ""
    $hrEmail: String = ""
    $industry: String = ""
    $numberOfEmployees: Int = 10
    $position: String = ""
    $userName: String = ""
    $hrId: String = ""
    $companyLogoAddress: String = ""
    $companyWebsite1: String = ""
    $corporateName: String = ""
    $location: String = ""
    $numberOfEmployees1: Int = 10
  ) {
    insert_hr_voucher(
      objects: {
        companyName: $companyName
        companyWebsite: $companyWebsite
        hrEmail: $hrEmail
        industry: $industry
        numberOfEmployees: $numberOfEmployees
        position: $position
        userName: $userName
        hrId: $hrId
      }
      on_conflict: {}
    ) {
      returning {
        created_at
        hrId
      }
    }
    insert_company_data(
      objects: {
        companyLogoAddress: $companyLogoAddress
        companyWebsite: $companyWebsite1
        corporateName: $corporateName
        location: $location
        numberOfEmployees: $numberOfEmployees1
      }
    ) {
      returning {
        created_at
      }
    }
  }
`;
