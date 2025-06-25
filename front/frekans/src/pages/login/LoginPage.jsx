import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Giriş başarısız. Bilgilerinizi kontrol edin.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Giriş Yap</h2>
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Şifre</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <button type="submit" className="btn">Giriş Yap</button>
      </form>
      
      <div className="auth-footer">
        <p>Hesabınız yok mu? <Link to="/register">Kayıt Ol</Link></p>
        <button 
          className="google-btn"
          onClick={() => window.location.href = '/api/auth/google'}
        >
          Google ile Giriş Yap
        </button>
      </div>
    </div>
  );
};

export default LoginPage;