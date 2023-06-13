import { adminLogin } from '../api/admin.js'
import { userLogin/*, getUser*/ } from '../api/user.js'
import * as jwt from 'jsonwebtoken'
import { useEffect, useState, createContext, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router'

const defaultAuthContext = {
  isAuthenticated: false, 
  currentUser: null,
  login: null,
  logout: null,
}
const AuthContext = createContext(defaultAuthContext)
export const useAuth = () => useContext(AuthContext);
export function AuthContextProvider({ children }) {
  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [payload, setPayload] = useState(null)
  const { pathname } = useLocation()
  

  // check authToken when route switch
  useEffect(() => {
    const checkToken = async () => {
      // get token
      const authToken = localStorage.getItem('token')
      if (!authToken) {
        setIsAuthenticated(false)
        setPayload(null)
        return
      }
      // decode token, and get currentUser data
      const tempPayload = jwt.decode(authToken)
      if (!tempPayload) {
        setIsAuthenticated(false)
        setPayload(null)
        return
      }
      if (tempPayload) {
        setPayload(tempPayload);
      }
      // const { data } = await getUser(temPayload.id)
      // if (data) {
      //   setIsAuthenticated(true)
      //   setPayload(data)
      // } else {
      //   console.error(message)
      //   setIsAuthenticated(false)
      //   setPayload(null)
      // }
    }
    checkToken()
  }, [pathname, navigate])

  function logout() {
    localStorage.removeItem('token')
    setIsAuthenticated(false)
    setPayload(null)
  }

  async function login(data) {
    const loginFunc = data.role ==='admin' ? adminLogin : userLogin
    const { success, token } = await loginFunc({
      account: data.account,
      password: data.password,
    })
    const tempPayload = jwt.decode(token);
    if (tempPayload) {
      setIsAuthenticated(true)
      setPayload(tempPayload)
      localStorage.setItem('token', token)
    } else {
      setIsAuthenticated(false)
      setPayload(null)
    }
    return success 
  }
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        currentUser: payload,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
