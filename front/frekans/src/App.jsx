import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPages';
import Dashboard from './pages/dashboard/Dashboard';
import Header from './components/header/Header';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Dashboard />} />
          </Route>
          
          <Route path="*" element={<div>Sayfa bulunamadı</div>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;