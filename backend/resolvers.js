const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const createToken = (user, secret, expiresIn) => {
  const { username, email } = user;
  return jwt.sign({ username, email }, secret, { expiresIn });
};

exports.resolvers = {
  Query: {
    getAllNails: async (root, args, { Nail }) => {
      const allNails = await Nail.find();
      return allNails;
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
