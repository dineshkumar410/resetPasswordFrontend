import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../index.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const baseURL = "https://resetpassword-urre.onrender.com/api/auth";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { email };
      await fetch(`${baseURL}/forgot-password`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setMessage("Password reset link sent to your email");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      setMessage(error?.message || "Error sending reset link");
    }
  };

  return (
    <div className="container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPassword;
