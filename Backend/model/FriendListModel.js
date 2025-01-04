const { model } = require("mongoose");

const { FriendListSchema } = require("../Schema/FriendListSchema");

const FriendListModel = new model("FriendList", FriendListSchema);

module.exports = { FriendListModel };
