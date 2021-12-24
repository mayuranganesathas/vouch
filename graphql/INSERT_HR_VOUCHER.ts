import { gql } from "@apollo/client";

export const INSERT_HR_VOUCHER = gql`
  mutation INSERT_HR_VOUCHER(
    $companyName: String = ""
    $companyWebsite: String = ""
    $hrEmail: String = ""
    $industry: String = ""
    $numberOfEmployees: String = ""
    $position: String = ""
    $userName: String = ""
    $hrId: String = ""
    $companyLogoAddress: String = ""
    $companyWebsite1: String = ""
    $corporateName: String = ""
    $location: String = ""
    $numberOfEmployees1: String = ""
    $rangeOfEmployees: String = ""
    $hrId1: String = ""
  ) {
    insert_hr_voucher(
      objects: {
        companyName: $companyName
        companyWebsite: $companyWebsite
        hrEmail: $hrEmail
        industry: $industry
        rangeOfEmployees: $numberOfEmployees
        position: $position
        userName: $userName
        hrId: $hrId
        location: $location
      }
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
        rangeOfEmployees: $numberOfEmployees1
        hrId: $hrId1
      }
    ) {
      returning {
        created_at
      }
    }
  }
`;
