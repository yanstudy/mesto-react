import { useState } from "react";

export default function Login({ onLogin }) {
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
    onLogin({ password, email });
  }

  return (
    <div className="login">
      <h3 className="login__title">Вход</h3>
      <form className="login__form" onSubmit={handleSubmit}>
        <input
          className="login__input"
          placeholder="Email"
          type="email"
          required
          onChange={handleChangeEmail}
          value={email}
        ></input>
        <input
          className="login__input"
          placeholder="Пароль"
          type="password"
          onChange={handleChangePassword}
          value={password}
        ></input>
        <button className="login__button" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}
