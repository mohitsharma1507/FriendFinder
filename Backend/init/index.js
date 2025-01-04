const mongoose = require("mongoose");
const initData = require("./friendlist.js");
const { FriendListModel } = require("../model/FriendListModel.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/FriendAdda";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await FriendListModel.deleteMany({});
  await FriendListModel.insertMany(initData.data);

  console.log("data was initialized");
};

initDB();
