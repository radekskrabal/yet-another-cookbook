import * as React from 'react';

export const disclaimer = 'developed by Radek Skrabal, 2016';

export default function(props: {}): JSX.Element {
    return (
        <footer className="navbar text-center">
            <p>{disclaimer}</p>
        </footer>
    );
}