const users = require("../data/users");
const { findRelationshipDistance } = require("../utils/relationshipUtils");

const getAllUsers = (req, res) => {
  res.json(users);
};

const getUserById = (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
};

const createUser = (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
};

const updateUser = (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });
  Object.assign(user, req.body);
  res.json(user);
};

const deleteUser = (req, res) => {
  const index = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "User not found" });
  users.splice(index, 1);
  res.status(204).send();
};

const getRelationshipDistance = (req, res) => {
  const user1 = users.find((u) => u.id === parseInt(req.params.id1));
  const user2 = users.find((u) => u.id === parseInt(req.params.id2));
  if (!user1 || !user2) {
    return res.status(404).json({ message: "One or both users not found" });
  }
  const distance = findRelationshipDistance(user1, user2, users);
  res.json({ distance });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getRelationshipDistance,
};
