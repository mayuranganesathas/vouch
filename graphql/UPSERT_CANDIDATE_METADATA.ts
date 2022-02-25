import { gql } from "@apollo/client";

export const UPSERT_CANDIDATE_METADATA = gql`
  mutation UPSERT_CANDIDATE_METADATA(
    $hrId: String = ""
    $candidateFirstName: String = ""
    $linkedIn: String = ""
    $locationCity: String = ""
    $locationState: String = ""
    $candidateEmail: String = ""
    $candidateId: Int
    $privacyId: String = ""
    $status: String = ""
  ) {
    update_candidate_metadata(
      where: { hrId: { _eq: $hrId }, privacyId: { _eq: $privacyId } }
      _set: {
        linkedIn: $linkedIn
        locationCity: $locationCity
        locationState: $locationState
        candidateId: $candidateId
        candidateEmail: $candidateEmail
      }
    ) {
      returning {
        created_at
      }
    }
    update_candidates(
      where: { hrId: { _eq: $hrId }, privacyId: { _eq: $privacyId } }
      _set: {
        candidateFirstName: $candidateFirstName
        candidateId: $candidateId
        candidateEmail: $candidateEmail
      }
    ) {
      returning {
        created_at
      }
    }
    insert_anonymity(
      objects: { candidateId: $candidateId, hrId: $hrId, status: $status }
    ) {
      returning {
        created_at
      }
    }
  }
`;
