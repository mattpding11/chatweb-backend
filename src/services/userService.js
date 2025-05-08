const users = require("../models/user");

const findByUsername = async (username) => {
  return users.find((u) => u.username === username);
};

const addUser = async (username, passwordHash, avatar) => {
  users.push({ id: users.length+1, username, passwordHash, avatar});
  console.log(users)
  return users.length;
};

const getUsers = async () => {
  return users;
};

module.exports = { findByUsername, addUser, getUsers};
