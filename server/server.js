const express = require("express")
const { ApolloServer } = require("apollo-server-express")

const mongoose = require('./config/database')

const typeDefs = require("./modules/post/graphqlSchema")

const resolvers = require("./modules/post/resolvers")

const server = new ApolloServer({ typeDefs, resolvers})

const app = express();

server.applyMiddleware({ app })

app.listen({port: 3000}, () => 
	console.log(`Server running on http://localhost:${port}${server.graphqlPath}`))