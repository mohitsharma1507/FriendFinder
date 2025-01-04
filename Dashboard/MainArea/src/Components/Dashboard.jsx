import FriendList from "./FriendList";
import RecommendationPage from "./RecommendationPage";
import UserPage from "./UserPage";

function Dashboard() {
  return (
    <div className="row">
      <div className="col-4 p-5">
        <UserPage />
      </div>
      <div className="col-4 p-5" style={{ borderLeft: "5px solid grey" }}>
        <FriendList />
      </div>
      <div className="col-4 p-5" style={{ borderLeft: "5px solid grey" }}>
        <RecommendationPage />
      </div>
    </div>
  );
}

export default Dashboard;
