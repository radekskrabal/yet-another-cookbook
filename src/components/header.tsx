import * as React from 'react';

import * as Http from '../modules/http';

export const title = 'Yet Another Cookbook';
export const slogan = 'Home recipes made easy';

export default function(props: {}): JSX.Element {
    return (
        <header>
            <h1>
                <img src={ Http.buildUrl('img/logo.png') } alt="Logo" />{title}
                <p className="lead"><em>{slogan}</em></p>
            </h1>
        </header>
    );
}
