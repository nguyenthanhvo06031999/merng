const postResolvers = require('../resolvers/post');
const userResolvers = require('../resolvers/user');

module.exports = {
	Query: {
		...postResolvers.Query
	},
	Mutation: {
		...userResolvers.Mutation
	}
}
