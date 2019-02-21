import { gql } from 'apollo-boost';

// Nail Queries
export const GET_ALL_NAILS_QUERY = gql`
  query GET_ALL_NAILS {
    getAllNails {
      nailName
      description
      likes
      createdDate
    }
  }
`;

// Nail Mutations

// User Queries

// User Mutations
export const SIGNIN_USER_MUTATION = gql`
  mutation SIGNIN_USER_MUTATION($username: String!, $password: String!) {
    signinUser(username: $username, password: $password) {
      token
    }
  }
`;

export const SIGNUP_USER_MUTATION = gql`
  mutation SIGNUP_USER_MUTATION($username: String!, $email: String!, $password: String!) {
    signupUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`;
