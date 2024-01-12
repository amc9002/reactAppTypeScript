import { Navigate } from "react-router-dom";
import { RootStateType } from "../Redux/redux-store";

const WithAuthRedirect = (Component: any): any => {
    const WithAuthRedirectComponentProp = (props: any, state: RootStateType): JSX.Element => {
        if (!state.auth.isAuth) return <Navigate to='/login' />;
        return <Component { ...props}/>
    }
    return WithAuthRedirectComponentProp;
}
export default WithAuthRedirect;



