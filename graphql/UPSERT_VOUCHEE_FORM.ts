import { gql } from "@apollo/client";

export const UPSERT_VOUCH_CANDIDATE = gql`
  mutation UPSERT_VOUCH_CANDIDATE(
    $hrId: String!
    $positionTitle: String = ""
    $salaryRange: String = ""
    $stageOfInterview: String = ""
    $standOutSkill1: String = ""
    $standOutSkill2: String = ""
    $standOutSkill3: String = ""
    $privacyId: String = ""
    $yearsOfExperience: String = ""
    $positionType: String = ""
  ) {
    insert_hr_voucher_metadata(
      objects: {
        hrId: $hrId
        positionTitle: $positionTitle
        salaryRange: $salaryRange
        stageOfInterview: $stageOfInterview
        standOutSkill1: $standOutSkill1
        standOutSkill2: $standOutSkill2
        standOutSkill3: $standOutSkill3
        privacyId: $privacyId
        yearsOfExperience: $yearsOfExperience
        positionType: $positionType
      }
    ) {
      returning {
        hrId
      }
    }
    insert_candidate_metadata(objects: { hrId: $hrId, privacyId: $privacyId }) {
      returning {
        created_at
      }
    }
    insert_candidates(objects: { hrId: $hrId, privacyId: $privacyId }) {
      returning {
        created_at
      }
    }
  }
`;
