import React, { useState } from 'react';
import Footer from '../Footer/Footer';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Şifre sıfırlama isteğini gönderme işlemlerini burada gerçekleştirebilirsiniz
    console.log('E-posta Adresi:', email);
  };

  return (
    <div>
      <h1>Şifremi Unuttum</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-posta adresi:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br /><br />
        <button type="submit">Şifremi Sıfırla</button>
      </form>
      <Footer />
    </div>
  );
}

export default ForgotPassword;