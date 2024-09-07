import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie';
export default function PrivateRoute({ children, requiredToken }) { 
    const token = Cookies.get('token');
    if (token === requiredToken) {
    return children;
    }
    else {
        return <Navigate to='/' />
    }
}
