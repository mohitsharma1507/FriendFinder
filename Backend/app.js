require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3030;
const authRoute = require("./Routes/AuthRoutes");
const { FriendListModel } = require("./model/FriendListModel");
const dbUrl = "mongodb://127.0.0.1:27017/FriendAdda";

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.json());

main()
  .then((res) => {
    console.log("successfull");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
}

//Route for FriendList data
app.get("/allFriendList", async (req, res) => {
  let allFriendList = await FriendListModel.find({});
  res.json(allFriendList);
});

//Route for UnFriend data
app.delete("/unfriend/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedFriend = await FriendListModel.findByIdAndDelete(id);

    if (!deletedFriend) {
      return res.status(404).json({ message: "Friend not found" });
    }

    res
      .status(200)
      .json({ message: "Friend removed successfully", deletedFriend });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error });
  }
});

app.use("/", authRoute);

app.listen(PORT, () => {
  console.log("server listening port number 3030");
});
