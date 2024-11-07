import { useNavigate } from "react-router-dom";
import "./../index.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to Password Application</h1>
      <button onClick={() => navigate("/signup")} className="home-button">
        Sign Up
      </button>
      <button
        onClick={() => navigate("/forgot-password")}
        className="home-button"
      >
        Forgot Password
      </button>
    </div>
  );
};

export default Home;
