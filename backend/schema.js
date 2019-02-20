exports.typeDefs = `
type Nail {
  _id: ID,
  nailName: String!
  nailCategory: String!
  description: String!
  createdDate: String
  likes: Int
  username: String
}

type User {
  _id: ID,
  username: String!
  password: String!
  email: String!
  joinDate: String
  favorites: [Nail]
}

type Query {
  getAllNails: [Nail]
}

type Token {
  token: String!
}

type Mutation {
 addNail(nailName: String!, 
 nailCategory: String!, 
 description: String!, 
 username: String): Nail
 
 
 signinUser(username: String!, password: String!): Token
  signupUser(username: String!, email: String!, password: String!): Token
}
`;
