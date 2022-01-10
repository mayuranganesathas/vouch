import { gql } from "@apollo/client";

export const QUERY_SHORT_LIST = gql`
  query QUERY_SHORT_LIST($hrId: String = "") {
    shortlist(where: { hrId: { _eq: $hrId } }) {
      status
      jobType
      jobSeniority
      jobName
      candidateId
      hrId
      hr_voucher_metadatum {
        candidateId
        created_at
        hrId
        positionTitle
        salaryRange
        stageOfInterview
        standOutSkill1
        standOutSkill2
        standOutSkill3
        Candidate_Contact {
          candidateEmail
          candidateFirstName
          candidateLastName
          candidateId
        }
        Company_Data {
          companyWebsite
          corporateName
          rangeOfEmployees
          location
        }
        Vouchee {
          industry
          positionTitle
          linkedIn
          companyWebsite
          locationCity
          locationState
          companyName
          seniority
          jobCategory
        }
      }
    }
  }
`;
