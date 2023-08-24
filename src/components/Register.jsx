import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login({ onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }
  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onRegister({ password, email });
  }
  return (
    <div className="register">
      <h3 className="register__title">Регистрация</h3>
      <form className="register__form" onSubmit={handleSubmit}>
        <input
          className="register__input"
          placeholder="Email"
          type="email"
          required
          onChange={handleChangeEmail}
          value={email}
        ></input>
        <input
          className="register__input"
          placeholder="Пароль"
          type="password"
          onChange={handleChangePassword}
          value={password}
        ></input>
        <button className="register__button" type="submit">
          Зарегистрироваться
        </button>
      </form>

      <h4 className="register__question">
        Уже зарегистрированы?{" "}
        <Link to="/sign-in" className="register__link">
          <span> Войти</span>
        </Link>
      </h4>
    </div>
  );
}
