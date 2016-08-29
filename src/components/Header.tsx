import * as React from 'react';

interface IHeaderProps {
    title: string;
}

export default class Header extends React.Component<IHeaderProps, {}> {
    public constructor(props: IHeaderProps) {
        super(props);
    }

    public render() {
        return (
            <header>
                <img src="./img/logo.png" alt="Logo" />
                <h1>{this.props.title}</h1>
                <p className="lead"><em>Home recipes made easy</em></p>
            </header>
        );
    }
}