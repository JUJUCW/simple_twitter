import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx'
import MainPage from 'pages/MainPage';

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="main" element={<MainPage/>} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}