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
        numberOfEmployees
        location
        companyWebsite
        corporateName
      }
    }
    candidate_metadata {
      Location
      companyWebsite1
      candidateId
      companyWebsite3
      industry1
      companyWebsite2
      industry2
      industry3
      linkedIn
      positionTitle1
      positionTitle2
      positionTitle3
    }
    candidates {
      candidateEmail
      candidateFirstName
      candidateLastName
      candidateId
    }
  }
`;
