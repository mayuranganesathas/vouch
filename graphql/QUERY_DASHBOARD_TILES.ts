import { gql } from "@apollo/client";

export const QUERY_DASHBOARD_TILES = gql`
  query QUERY_DASHBOARD_TILES {
    hr_voucher_metadata {
      candidateId
      hrId
      positionLevel
      positionTitle
      salaryRange
      stageOfInterview
      standOutSkill1
      standOutSkill2
      standOutSkill3
      standOutSkill4
      standOutSkill5
      Company_Data {
        companyLogoAddress
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
        companyWebsite1
        companyWebsite2
        companyWebsite3
        hrId
        industry1
        industry2
        industry3
        jobCategory
        linkedIn
        locationCity
        locationState
        positionTitle1
        positionTitle2
        positionTitle3
        seniority
        created_at
      }
    }
  }
`;
