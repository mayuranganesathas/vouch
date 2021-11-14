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
    }
    candidate_metadata {
      Location
      candidateId
      companyWebsite1
      companyWebsite2
      companyWebsite3
      industry1
      industry2
      industry3
      linkedIn
      positionTitle1
      positionTitle2
      positionTitle3
    }
  }
`;
