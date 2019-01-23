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
  },
};
