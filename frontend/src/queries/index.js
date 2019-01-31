import { gql } from 'apollo-boost';

export const GET_ALL_EXERCISES = gql`
  query {
    getAllExercises {
      exerciseName
      likes
      createdDate
    }
  }
`;
