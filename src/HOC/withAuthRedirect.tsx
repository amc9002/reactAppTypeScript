import React from "react";
import { redirect } from "react-router-dom";

export const WithAuthRedirect = (Component: Function) => {
    class RedirectComponent extends React.Component {
        render(): any {
            if (!this.state) return redirect('/login');
            return <Component {...this.props} />
        }
    }
}


