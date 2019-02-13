import { gql } from 'apollo-boost';

// Nail Queries
export const GET_ALL_NAILS = gql`
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
export const SIGNUP_USER = gql`
  mutation SIGNUP_USER($username: String!, $email: String!, $password: String!) {
    signupUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`;
