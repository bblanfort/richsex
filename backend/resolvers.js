exports.resolvers = {
  Query: {
    getAllExercises: () => {},
  },
  Mutation: {
    addExercise: async (
      root,
      { exerciseName, bodyPartCategory, typeCategory, description, username },
      { Cologne }
    ) => {
      const newExercise = await new Exercise({
        exerciseName,
        bodyPartCategory,
        typeCategory,
        description,
        username,
      }).save();

      return newExercise;
    },
  },
};
