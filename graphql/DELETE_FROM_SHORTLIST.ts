import { gql } from "@apollo/client";

export const DELETE_SHORTLIST_ITEM = gql`
  mutation MyMutation($hrId: String = "", $candidateId: Int) {
    delete_shortlist(
      where: { hrId: { _eq: $hrId }, candidateId: { _eq: $candidateId } }
    ) {
      returning {
        candidateId
      }
    }
  }
`;
