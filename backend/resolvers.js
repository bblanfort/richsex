exports.resolvers = {
  Query: {
    getAllNail: () => {},
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
