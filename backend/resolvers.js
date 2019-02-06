const jwt = require('jsonwebtoken');

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
