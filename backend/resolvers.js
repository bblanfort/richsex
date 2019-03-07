const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');
const { ObjectID } = require('mongoose').mongo.ObjectID;

const createToken = (user, secret, expiresIn) => {
  const { username, email } = user;
  return jwt.sign({ username, email }, secret, { expiresIn });
};

exports.resolvers = {
  ObjectID: new GraphQLScalarType({
    name: 'ObjectID',
    description:
      'The `ObjectID` scalar type represents a [`BSON`](https://en.wikipedia.BSON) commonly used in `mongodb`',
    serialize(_id) {
      if (_id instanceof ObjectID) {
        return _id.toHexString();
      }
      if (typeof _id === 'string') {
        return _id;
      }
      throw new Error(
        `${Object.getPrototypeOf(_id).constructor.name} not convertible to `
      );
    },
    parseValue(_id) {
      if (typeof _id === 'string') {
        return ObjectID.createFromHexString(_id);
      }
      throw new Error(`${typeof _id} not convertible to ObjectID`);
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.STRING) {
        return ObjectID.createFromHexString(ast.value);
      }
      throw new Error(`${ast.kind} not convertible to ObjectID`);
    },
  }),
  Query: {
    getAllNails: async (root, args, { Nail }) => {
      const allNails = await Nail.find();
      return allNails;
    },
    getCurrentUser: async (root, args, { currentUser, User }) => {
      // check if user is logged in
      if (!currentUser) {
        return null;
      }
      // user is logged in
      // find them in the database
      const user = await User.findOne({
        username: currentUser.username,
      }).populate({
        path: 'favorites',
        model: 'Nail', // make sure this is singular
      });
      return user; // if you leave this out you won't get the user
    },
  },



  Mutation: {
    addNail: async (
      root,
      { nailName, nailCategory, typeCategory, description, username },
      { Nail }
    ) => {
      const newNail = await new Nail({
        nailName,
        nailCategory,
        typeCategory,
        description,
        username,
      }).save();

      return newNail;
    },

    signinUser: async (root, { username, password }, { User }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new Error('User not found');
      }
      // check to make sure password matches with user
      // that is found
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        throw new Error('Invalid Password');
      }
      // all good? return token
      return { token: createToken(user, process.env.SECRET, '1hr') };
    },


    signupUser: async (root, { username, email, password }, { User }) => {
      // check if user already exists
      const user = await User.findOne({ username });
      if (user) {
        throw new Error('User already exists');
      }
      // user doesn't exist, create one
      const newUser = await new User({
        username,
        email,
        password,
      }).save();
      return { token: createToken(newUser, process.env.SECRET, '1hr') };
    },
  },
};
