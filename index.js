const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type Book {
        title: String
        author: String
        subjects: [Subject]
    }
    type Subject {
        item: String
    }
    type Person {
        name: String
        address: String
    }
    type Query {
        books: [Book]
        persons: [Person]
        subjects: [Subject]
    }
`;
const books = [
    {
        title: 'my  first book',
        author: 'Omid'
    },
    {
        title: 'this is another book',
        author: 'Parsa'
    }
];
const persons = [
    {
        name: 'Omid Parsa',
        address: 'Some where'
    },
    {
        name: 'Nina Parsa',
        address: 'Some where'
    }
];
const subjects = [
    {
        item: 'item-subject-1'
    },
    {
        item: 'item-subject-2'
    },
    {
        item: 'item-subject-3'
    },
    {
        item: 'item-subject-4'
    }
]
const resolvers = {
    Query: {
        books: () => books,
        persons: () => persons,
        subjects: () => subjects
    }
};
const server = new ApolloServer( { typeDefs, resolvers } );
// server.listen().then(
//     ({ url }) => {console.log(`Server is ready at ${url}`)}
// );
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });