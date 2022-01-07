import { gql } from "@apollo/client";

export const QUERY_DASHBOARD_TILES = gql`
  query QUERY_DASHBOARD_TILES($hrId: String = "") {
    hr_voucher_metadata {
      candidateId
      hrId
      positionTitle
      salaryRange
      stageOfInterview
      standOutSkill1
      standOutSkill2
      standOutSkill3
      Company_Data {
        hrId
        location
        companyWebsite
        corporateName
        rangeOfEmployees
      }
      Candidate_Contact {
        candidateEmail
        candidateFirstName
        candidateLastName
        candidateId
      }
      Vouchee {
        candidateId
        companyWebsite
        hrId
        industry
        jobCategory
        linkedIn
        locationCity
        locationState
        positionTitle
        seniority
        created_at
      }
    }
    shortlist(where: { hrId: { _eq: $hrId } }) {
      candidateId
    }
  }
`;
