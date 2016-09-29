import * as React from 'react';

interface ISearchBoxProps {
    query: string;
    setQuery(query: string): void;
}

export default class SearchBox extends React.Component<ISearchBoxProps, {}> {
    private searchInput: any;

    public render(): JSX.Element {
        return (
            <div className="input-group search-box">
                <form className="navbar-form" role="search">
                    <input name="search" type="text" ref={(ref) => this.searchInput = ref} className="form-control input-lg" placeholder="Hledat recepty" value={this.props.query || ''} onChange={this.onQueryChange.bind(this)} />
                    <span className="input-group-btn">
                        <button className="btn btn-info btn-lg" type="button">
                            <i className="glyphicon glyphicon-search"></i>
                        </button>
                     </span>
                </form>
            </div>
        );
    }

    private onQueryChange(): void {
        let query = this.searchInput.value || null;
        this.props.setQuery(query);
    }
}