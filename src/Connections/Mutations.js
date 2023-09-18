import { gql } from "@apollo/client";

const Mutations = gql`
input LoginInput{
    email:String
    password:String
}
`

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
`