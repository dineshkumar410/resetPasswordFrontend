import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./../index.css";

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const baseURL = "https://resetpassword-urre.onrender.com/api/auth";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { password };
      await fetch(`${baseURL}/reset-password/${token}`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setMessage("Password reset successful!");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      setMessage(error?.message || "Error resetting password");
    }
  };

  return (
    <div className="container">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <label>New Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;
