import * as React from 'react';

import * as Http from '../modules/http';

const title = 'Yet Another Infor Grid';
const slogan = 'Home recipes made easy';

export default function(props: {}): JSX.Element {
    return (
        <header>
            <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Přidat <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                        <li className="add-category"><a href="#">Kategorie</a></li>
                        <li className="add-recipe"><a href="#">Recept</a></li>
                    </ul>
                </li>
            </ul>

            <h1>
                <img src={ Http.buildUrl('img/logo.png') } alt="Logo" />{title}
                <p className="lead"><em>{slogan}</em></p>
            </h1>
        </header>
    );
}