exports.resolvers = {
  Query: {
    getAllNails: () => {},
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
