import * as React from 'react';

export const disclaimer = `developed by Radek Skrabal, ${new Date().getFullYear()}`;

export default function(props: {}): JSX.Element {
    return (
        <footer className="navbar text-center">
            <p>{disclaimer}</p>
        </footer>
    );
}
