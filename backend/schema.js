exports.typeDefs = `
type Nail {
  nailName: String!
  nailCategory: String!
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
  favorites: [Nail]
}

type Query {
  getAllNails: [Nail]
}

type Mutation {
 addNail(nailName: String!, 
 nailCategory: String!, 
 description: String!, 
 username: String): Nail
}
`;
