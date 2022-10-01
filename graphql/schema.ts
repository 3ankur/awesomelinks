import { gql } from "apollo-server-micro";

export const typeDefs = gql`
    type Link{
    title: String
    id: String
    description: String
    url: String
    imageUrl: String
    category: String
    User: [String]
    createdAt: String
    }

    type Query{
        links:[Link]!
    }
`;