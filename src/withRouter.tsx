import { useLocation, useNavigate, useParams } from "react-router-dom";

function withRouter(Component: any): Function {
    function ComponentWithRouterProp(props: any): JSX.Element {
        const location = useLocation();
        const navigate = useNavigate();
        const params = useParams();

        return (
            <div>
                <Component {...props}
                    router={{
                        location, navigate, params
                    }} />
            </div>
        )
    }
    return ComponentWithRouterProp;
}

export type RouterDataType = {
    location: string;
    navigate: string;
    params: any;
}

export default withRouter;