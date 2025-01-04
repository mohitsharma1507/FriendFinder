import { Link } from "react-router-dom";

function RecommendationPage() {
  return (
    <div className="container d-none d-lg-flex flex-column mt-4">
      <div className="d-flex align-items-center justify-content-between gap-2 text-capitalize mb-3">
        <span style={{ fontSize: "31px", fontWeight: "800" }}>
          Suggested for you
        </span>
        <Link
          to="/"
          className="btn  follow rounded-5"
          style={{ fontSize: "15px", fontWeight: "800" }}
        >
          See All
        </Link>
      </div>
      <div className="d-flex flex-column gap-4">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <div
              className="text-wrapper"
              style={{ fontSize: "15px", fontWeight: "800" }}
            >
              Leisure
            </div>
          </div>
          <a to="/" className="btn btn-primary follow rounded-5">
            Friend
          </a>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <div
              className="text-wrapper"
              style={{ fontSize: "15px", fontWeight: "800" }}
            >
              Hook
            </div>
          </div>
          <a to="/" className="btn btn-primary follow rounded-5">
            Friend
          </a>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <div
              className="text-wrapper"
              style={{ fontSize: "15px", fontWeight: "800" }}
            >
              Leo
            </div>
          </div>
          <a to="/" className="btn btn-primary follow rounded-5">
            Friend
          </a>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <div
              className="text-wrapper"
              style={{ fontSize: "15px", fontWeight: "800" }}
            >
              Andy
            </div>
          </div>
          <a to="/" className="btn btn-primary follow rounded-5">
            Friend
          </a>
        </div>
      </div>
      <button className="btn text-end mt-5 text-primary text-capitalized">
        See more.....
      </button>
    </div>
  );
}
export default RecommendationPage;
