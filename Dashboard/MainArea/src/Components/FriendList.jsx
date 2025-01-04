import { useEffect, useState } from "react";

import axios from "axios";

const FriendList = () => {
  const [allFriendList, setAllFriendList] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios.get("http://localhost:3030/allFriendList").then((res) => {
      setAllFriendList(res.data);
    });
  }, []);

  const handleUnfriend = async (id) => {
    try {
      await axios.delete(`http://localhost:3030/unfriend/${id}`);
      setAllFriendList((prevList) =>
        prevList.filter((friend) => friend._id !== id)
      );
    } catch (error) {
      console.error("Error unfriending:", error);
    }
  };

  const searchData = allFriendList
    ? allFriendList.filter((curFriend) =>
        curFriend.name.toLowerCase().includes(search.toLowerCase())
      )
    : [];
  return (
    <div>
      <div
        className="search"
        style={{ display: "flex", marginLeft: "67px", marginBottom: "9px" }}
      >
        <input
          type="text"
          placeholder="SEARCH HERE"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          style={{ backgroundColor: "blue", color: "white", marginLeft: "8px" }}
        >
          Search
        </button>
      </div>
      <div className="Friend-list row">
        <ul>
          {searchData.map((curFriend, index) => (
            <li
              key={index}
              style={{
                listStyleType: "none",
                display: "flex",
                justifyContent: "space-between",
                padding: "12px",
              }}
            >
              <div style={{ fontSize: "15px", fontWeight: "800" }}>
                {curFriend.name}
              </div>
              <button
                className="btn btn-primary follow rounded-5"
                onClick={() => handleUnfriend(curFriend._id)}
              >
                UnFriend
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default FriendList;
