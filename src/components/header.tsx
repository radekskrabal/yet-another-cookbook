import * as React from 'react';

const title = 'Yet Another Infor Grid';
const slogan = 'Home recipes made easy';

export default function(props: {}): JSX.Element {
    return (
        <header>
            <img src="./img/logo.png" alt="Logo" />
            <h1>{title}</h1>
            <p className="lead"><em>{slogan}</em></p>
        </header>
    );
}