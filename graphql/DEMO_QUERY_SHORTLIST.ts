import { gql } from "@apollo/client";

export const DEMO_QUERY_SHORTLIST = gql`
  query DEMOSHORTLIST($hrId: String = "") {
    demo_dshortlist(where: { hrId: { _eq: $hrId } }) {
      candidateId
      hrId
      status
      datam {
        standOutSkill1
        standOutSkill2
        standOutSkill3
        stageOfInterview
        salaryRange
        privacyId
        positionTitle
        hrId
        created_at
        candidateId
        candidateEmail
        Company_Data {
          companyWebsite
          corporateName
          created_at
          rangeOfEmployees
          location
          hrId
          candidateId
        }
        demoVouchee {
          candidateEmail
          candidateId
          companyName
          companyWebsite
          created_at
          hrId
          industry
          id
          jobCategory
          locationCity
          linkedIn
          locationState
          positionTitle
          privacyId
          seniority
        }
      }
    }
  }
`;
