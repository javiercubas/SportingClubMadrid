import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";
import {useTranslation} from "react-i18next";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/ligas");
  }, [user, loading]);
  const [t] = useTranslation("global");

  return (
    <div className="login">
      <div className="login__container">
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("login.email")}
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={t("login.password")}
        />
        <button
          className="login__btn"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          {t("login.login")}
        </button>
        <button className="login__btn login__google" onClick={signInWithGoogle}>
        {t("login.login-google")}
        </button>
        <div>
          <Link to="/reset">{t("login.forgot-password")}</Link>
        </div>
        <div>
        {t("login.signup")} <Link to="/register">{t("login.signup-link")}</Link> {t("login.signup2")}.
        </div>
      </div>
    </div>
  );
}

export default Login;