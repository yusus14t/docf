import { Navigate, useNavigate } from "react-router-dom";

const Logout = () => {
    // const navigate = useNavigate()
    localStorage.clear();
    // navigate('/login')
    return(
        <Navigate to={'/login'} />
    )
}

export default Logout;