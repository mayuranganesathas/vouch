import { gql } from "@apollo/client";

export const UPSERT_VOUCH_CANDIDATE = gql`
  mutation UPSERT_VOUCH_CANDIDATE(
    $hrId: String!
    $jobPostingLink: String = ""
    $locationType: String = ""
    $positionLevel: String = ""
    $positionTitle: String = ""
    $salaryRange: String = ""
    $stageOfInterview: String = ""
    $standOutSkill1: String = ""
    $standOutSkill2: String = ""
    $standOutSkill3: String = ""
    $standOutSkill4: String = ""
    $standOutSkill5: String = ""
    $candidateId: String = ""
  ) {
    insert_hr_voucher_metadata(
      objects: {
        hrId: $hrId
        jobPostingLink: $jobPostingLink
        locationType: $locationType
        positionLevel: $positionLevel
        positionTitle: $positionTitle
        salaryRange: $salaryRange
        stageOfInterview: $stageOfInterview
        standOutSkill1: $standOutSkill1
        standOutSkill2: $standOutSkill2
        standOutSkill3: $standOutSkill3
        standOutSkill4: $standOutSkill4
        standOutSkill5: $standOutSkill5
        candidateId: $candidateId
      }
    ) {
      returning {
        hrId
      }
    }
  }
`;
