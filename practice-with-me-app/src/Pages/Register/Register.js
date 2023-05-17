import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kayıt işlemini gerçekleştirebilirsiniz
    // Örneğin, bir API çağrısı yapabilirsiniz.
    console.log('Kullanıcı Adı:', username);
    console.log('E-posta:', email);
    console.log('Şifre:', password);
  };

  return (
    <div>
      <h1>Kayıt Ol</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Kullanıcı Adı:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        /><br /><br />

        <label htmlFor="email">E-posta:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />

        <label htmlFor="password">Şifre:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br /><br />

        <input type="submit" value="Kayıt Ol" /><br /><br />
        Zaten hesabın var mı? <Link to="/login">Giriş yap!</Link><br /><br />
      </form>
      <Footer />
    </div>
  );
}

export default Register;