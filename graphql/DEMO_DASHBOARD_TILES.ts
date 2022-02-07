import { gql } from "@apollo/client";

export const DEMO_DASHBOARD_QUERY_TILES = gql`
  query DEMO_QUERY_DASHBOARD_TILES($hrId: String = "") {
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
      demoVouchee {
        candidateEmail
        candidateId
        companyName
        companyWebsite
        created_at
        hrId
        id
        industry
        jobCategory
        linkedIn
        locationCity
        positionTitle
        locationState
        privacyId
        seniority
      }
    }
    demo_dshortlist(where: { hrId: { _eq: $hrId } }) {
      candidateId
    }
  }
`;
