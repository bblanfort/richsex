const express = require('express'); // did double quotes change after saving?
const mongoose = require('mongoose');
require('dotenv').config({ path: './variables.env' });
const jwt = require('jsonwebtoken'); // add this


// graphql
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');

// models
const Nail = require('./models/Nail');
const User = require('./models/User');

// bring in graphql middleware
const { ApolloServer } = require('apollo-server-express');

const PORT = process.env.PORT || 4444;

//connect to db (add these lines)
mongoose
  .connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true }
  )
  .then(() => console.log('DB connected'))
  .catch(err => {
    console.log('Error on start: ' + err.stack);
    process.exit(1);
  });

mongoose.set('useCreateIndex', true);

// initialize app
const app = express();

// set up JWT authentication middleware
app.use(async (req, res, next) => {
  const token = req.headers.authorization;
  // console.log(token, typeof token);
  // console.log(req.headers);

  if (token !== 'null' && token !== '' && token !== undefined) {
    try {
      // add currentUser to the request object
      req.currentUser = await jwt.verify(token, process.env.SECRET);
      console.log(req.currentUser);
    } catch (err) {
      console.error(err);
    }
  }
  next();
});

// create apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ Nail, User, currentUser: req.currentUser }),
});

server.applyMiddleware({ app });

app.listen(PORT, () => {
  console.log(`Your Server is listening on PORT ${PORT}`);
});
