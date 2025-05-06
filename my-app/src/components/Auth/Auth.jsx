import "./styles.css";
import { useLocation } from "react-router-dom";
export default function Auth() {
  const location = useLocation();

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-card-image">
          <img src="https://www.candere.com/media/singup_image/default/Sign-in-3_1.jpg"></img>
        </div>
        <div className="auth-card-buttons">
          <p className="auth-card-buttons-title">Login</p>
          <p className="auth-card-buttons-subtitle">
            To enjoy a seamless experience while shopping
          </p>

          <button
            className="auth-card-button-google"
            onClick={() => {
              window.location.href = `http://localhost:3000/api/auth/google${location.search}`;
            }}
          >
            <img
              className="google-logo"
              src="https://www.candere.com/static/version1744086940/frontend/Codilar/candere_desktop/en_US/Codilar_SocialLogin/images/google.svg"
            />
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
}
