import * as React from 'react';

export default class Footer extends React.Component<{}, {}> {
    public render() {
        return (
            <footer className="navbar navbar-fixed-bottom text-center">
                <p className="text-muted">developed by <a href="http://skrabal.me/">Radek Skrabal</a>, Mid-2016</p>
            </footer>
        );
    }
}