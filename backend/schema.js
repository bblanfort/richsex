exports.typeDefs = `
  type Exercise {
    exerciseName: String!
    bodyPartCategory: String!
    typeCategory: String!
    description: String!
    createdDate: String
    likes: Int
    username: String
  }

  type User {
    username: String!
    password: String!
    email: String!
    joinDate: String
    favorites: [Exercise]
  }

  type Query {
    getAllExercises: [Exercise]
  }

  type Mutation {
   addExercise(exerciseName: String!, bodyPartCategory: String!, description: String!, username: String): Exercise
  }
`;
