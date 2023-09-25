import { gql } from "@apollo/client";

export const loginMutation = gql`
mutation userLogin($input: LoginInput){
    userLogin(input:$input){
        success
        statusCode
        token
        user{
            ...UserDetail
        }
    }
}
`;

export const registerUserMutation = gql`
  mutation registerUser($input: RegisterInput) {
    registerUser: registerUser(input: $input) {
      _id
      userName
      firstName
      lastName
      email
      passwordVerificationToken
      createdAt
      updatedAt
      verificationToken
      esportsArenaId
      eTeam
      rank
      country
    }
  }
`;

export const forgotPassMutation = gql`
  mutation forgotPassword($email:String){
    forgotPassword(email:$email){
      statusCode
      success
      message
    }
  }
`
