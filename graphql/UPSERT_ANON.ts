import { gql } from "@apollo/client";

export const UPSERT_ANON = gql`
  mutation Update_Anon($candidateId: Int, $hrId: String = "") {
    update_anonymity(
      where: { candidateId: { _eq: $candidateId }, hrId: { _eq: $hrId } }
      _set: { status: "available" }
    ) {
      returning {
        created_at
      }
    }
  }
`;
