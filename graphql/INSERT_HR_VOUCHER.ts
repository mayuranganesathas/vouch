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
  }
`;
