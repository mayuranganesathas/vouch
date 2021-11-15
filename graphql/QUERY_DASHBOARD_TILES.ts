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
      Vouchee {
        Location
        candidateId
        companyWebsite1
        industry1
        industry2
        industry3
        companyWebsite2
        companyWebsite3
        linkedIn
        positionTitle1
        positionTitle2
      }
      Company_Data {
        companyLogoAddress
        hrId
        numberOfEmployees
        location
        companyWebsite
        corporateName
      }
      Candidate_Contact {
        candidateEmail
        candidateFirstName
        candidateId
      }
    }
  }
`;
