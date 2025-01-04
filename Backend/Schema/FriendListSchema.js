const { Schema } = require("mongoose");

const FriendListSchema = new Schema({
  name: String,
  bio: String,
});

module.exports = { FriendListSchema };
