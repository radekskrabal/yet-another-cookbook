import * as React from 'react';
import { Link } from 'react-router';

export default class AppLink extends React.Component<any /* TODO: Use ReactRouter.LinkProps */, {}> {
    public constructor(props: ReactRouter.LinkProps) {
        super(props);
    }

    render() {
        return (
            <Link activeClassName="active-link" {...this.props} />
        );
    }
}