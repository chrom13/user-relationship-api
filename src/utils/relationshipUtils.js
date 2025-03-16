const findRelationshipDistance = (user1, user2, users) => {
  const queue = [{ id: user1.id, distance: 0 }];
  const visited = new Set();

  while (queue.length > 0) {
    const current = queue.shift();
    if (current.id === user2.id) return current.distance;

    if (!visited.has(current.id)) {
      visited.add(current.id);
      const currentUser = users.find((u) => u.id === current.id);
      currentUser.friends.forEach((friendId) => {
        queue.push({ id: friendId, distance: current.distance + 1 });
      });
    }
  }

  return -1; // No relationship found
};

module.exports = { findRelationshipDistance };
