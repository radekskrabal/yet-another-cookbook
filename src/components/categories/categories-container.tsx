import * as React from 'react';
import { connect } from 'react-redux';

import CategoriesView from './categories-view';
import * as categoryApi from '../../api/category-api';

export interface ICategoriesContainerProps {
    categories: ICategory[];
}

class CategoriesContainer extends React.Component<ICategoriesContainerProps, {}> {
    public render(): JSX.Element {
        return (
            <CategoriesView categories={this.props.categories} />
        );
    }

    public componentDidMount(): void {
        categoryApi.getCategories();
    }
}

const mapStateToProps = (store: IStoreState): ICategoriesContainerProps => {
    return {
        categories: store.categoryState.categories
    };
};

export default connect(mapStateToProps)(CategoriesContainer);