import React from 'react';
import { useAuth } from '../../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard">
      <h2>Hoş Geldiniz, {user.email}</h2>
      <p>Bu sayfa sadece giriş yapmış kullanıcılar tarafından görülebilir.</p>
      
      <div className="user-info">
        <p><strong>Kullanıcı ID:</strong> {user.id}</p>
        <p><strong>Kayıt Tarihi:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
      </div>
      
      <button onClick={logout} className="logout-btn">
        Çıkış Yap
      </button>
    </div>
  );
};

export default Dashboard;