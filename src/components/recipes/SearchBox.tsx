import * as React from 'react';

interface ISearchBoxProps {
    query: string;
    setQuery(query: string): void;
}

export default class SearchBox extends React.Component<ISearchBoxProps, {}> {
    private searchInput: any;

    public render(): JSX.Element {
        return <input type="text" ref={(ref) => this.searchInput = ref} placeholder="Search all recipes" value={this.props.query || ''} onChange={this.onQueryChange.bind(this)} />;
    }

    private onQueryChange(): void {
        let query = this.searchInput.value || null;
        this.props.setQuery(query);
    }
}