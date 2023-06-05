import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import SignUpPage from './pages/SignUpPage/SignUpPage.jsx';
import AdminLoginPage from './pages/AdminLoginPage/AdminLoginPage.jsx'

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="admin/login" element={<AdminLoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}