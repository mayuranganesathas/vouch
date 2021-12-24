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
        positionLevel
        positionTitle
        salaryRange
        stageOfInterview
        standOutSkill1
        standOutSkill2
        standOutSkill3
        standOutSkill4
        standOutSkill5
        Candidate_Contact {
          candidateEmail
          candidateFirstName
          candidateLastName
          candidateId
        }
        Company_Data {
          companyLogoAddress
          companyWebsite
          corporateName
          rangeOfEmployees
          numberOfEmployees
          location
        }
        Vouchee {
          industry1
          positionTitle1
          linkedIn
          companyWebsite1
          Location
        }
      }
    }
  }
`;
