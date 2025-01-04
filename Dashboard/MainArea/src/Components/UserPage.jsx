import Person from "../assets/Person.png";
import "../App.css";

function UserPage() {
  return (
    <div className="UserContainer">
      <img
        src={Person}
        alt="Photo"
        style={{
          width: "30vh",
          borderRadius: "50%",
          border: "5px solid Black",
          boxShadow: "5px 5px grey",
        }}
      />
      <p
        style={{
          marginLeft: "42px",
          marginTop: "44px",
          fontSize: "31px",
          fontWeight: "800",
        }}
      >
        User
      </p>
    </div>
  );
}
export default UserPage;
