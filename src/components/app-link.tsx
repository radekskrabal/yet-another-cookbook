import * as React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

export default class AppLink extends React.Component<NavLinkProps, {}> {
    public constructor(props: NavLinkProps) {
        super(props);
    }

    render() {
        return (
            <NavLink activeClassName="active-link" {...this.props} />
        );
    }
}
