const resolvers = {
  Case: {
    population: async (root, args, { WorldPop }) => {
      console.log("root", root);
      console.log("WorldPop", WorldPop);
      return {
        population: {
          records: [
            {
              fields: {
                value: 66987244,
                year: "2018",
                country_name: "France",
              },
            },
          ],
        },
      };
    },
  },
};

module.exports = { resolvers };
