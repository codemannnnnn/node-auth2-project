const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
// const sessions = require("express-sessions");
// const knexSessionStore = require("connect-session-knex");
// const sessionConfig = {
//   name: "mmm",
//   secret: "secret",
//   cookie: {
//     maxAge: 1000 * 60 * 10 * 6,
//     secure: false,
//     httpOnly: true,
//   },
//   resave: false,
//   saveUninitialized: true,
//   store: new KnexSessionStore({
//     knex: dbConnection,
//     createtable: true,
//     clearInterval: 1000 * 60 * 60 * 24, // one day
//   }),
// };

const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");

const server = express();
// server.us(session(sessionConfig));
server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;
