import { useSelector } from "react-redux"
import { State } from "../../redux/reducers"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoutes = () => {
  const {user} = useSelector((state:State)=>state.user)


  return (
    <>
    {
      user ? <Outlet /> :<Navigate to={"/auth/login"} />
    }
    </>
  )
}

export default ProtectedRoutes