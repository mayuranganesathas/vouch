import { gql } from "@apollo/client";

export const QUERY_SHORT_LIST = gql`
  query QUERY_DASHBOARD_TILES($candidateId: Int) {
    hr_voucher_metadata(where: { candidateId: { _eq: $candidateId } }) {
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
    candidate_metadata(where: { candidateId: { _eq: $candidateId } }) {
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
    candidates(where: { candidateId: { _eq: $candidateId } }) {
      candidateEmail
      candidateFirstName
      candidateLastName
      candidateId
    }
  }
`;
