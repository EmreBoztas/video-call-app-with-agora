import React, { useState } from "react";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Burada giriş işlemini gerçekleştirebilirsiniz
    // Örneğin, bir API çağrısı yapabilirsiniz.
    console.log("Kullanıcı Adı:", username);
    console.log("Şifre:", password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Kullanıcı Adı:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <br />
        <label htmlFor="password">Şifre:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <br />
        <input type="submit" value="Giriş Yap" />
        <br />
        <br />
        Hesabın yok mu? 
        <Link to="/register">
          Kayıt Ol
        </Link>
        <br />
        <br />
        <Link to="/forgotpassword">
          Şifreni mi unuttun?
        </Link>
      </form>
      <Footer />
    </div>
  );
}

export default LoginForm;
