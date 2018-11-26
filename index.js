const { GraphQLServer } = require('graphql-yoga');
const data = require('./data');

// 1
const typeDefs = `
type Query {
  cms: Cms
}
type Cms {
    homepage: Homepage,
    faqs: [Faq]
}
type Homepage {
  heading: String,
  subheading: String,
  heroImageUrl: String
}
type Faq {
    title: String,
    body: String
}
`;

// 2
const resolvers = {
  Query: {
    cms: () => data
  }
};

// 3
const server = new GraphQLServer({
  typeDefs,
  resolvers
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
