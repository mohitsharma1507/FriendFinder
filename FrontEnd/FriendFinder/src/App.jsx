import "./App.css";
import { Link } from "react-router-dom";
import ChatLogo from "./assets/Chat-logo.jpg";

function App() {
  return (
    <div className="Container">
      <div className="innerContainer">
        <h1>Friend Adda</h1>
        <img src={ChatLogo} alt="Photo" />
        <div className="btns">
          <button
            className="Login"
            style={{
              backgroundColor: "blue",
              color: "white",
              fontSize: "24px",
            }}
          >
            <Link
              to="/login"
              className="nav-link "
              style={{ color: "white" }}
              aria-current="page"
            >
              Login
            </Link>
          </button>
          <button
            className="SignUp"
            style={{
              backgroundColor: "blue",
              color: "white",
              fontSize: "24px",
            }}
          >
            <Link
              to="/signup"
              className="nav-link "
              style={{ color: "White" }}
              aria-current="page"
            >
              Signup
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
