import AuthInput from '../components/AuthInput/AuthInput.jsx'
import logo from '../assets/icons/logo.png'

export default function LoginPage () {
  return (
      <div>
        <img src={logo} alt="AC logo" />
        <h1>登入 Alphitter</h1>
        <AuthInput/>
      </div>
  );
}