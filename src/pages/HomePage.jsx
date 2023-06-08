const { useEffect } = require("react")
const { useNavigate } = require("react-router-dom")

const HomePage = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/login')
  },[navigate])
}

export default HomePage