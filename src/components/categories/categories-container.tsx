import * as React from 'react';
import { connect, Dispatch, MapDispatchToPropsObject } from 'react-redux';

import CategoriesView from './categories-view';
import * as categoryApi from '../../api/category-api';
import { ICategory } from '../../api/models/category';
import { IState } from '../../store';

export interface ICategoriesContainerProps {
    categories: ICategory[];
}

interface IDispatchProps extends MapDispatchToPropsObject {
    dispatch: Dispatch<void>; // mapDispatchToProps is called internally
}

class CategoriesContainer extends React.Component<ICategoriesContainerProps & IDispatchProps, {}> {
    public render(): JSX.Element {
        return (
            <CategoriesView categories={this.props.categories} />
        );
    }

    public componentDidMount(): void {
        categoryApi.getCategories(this.props.dispatch);
    }
}

const mapStateToProps = (store: IState): ICategoriesContainerProps => {
    return {
        categories: store.categoryState.categories
    };
};

export default connect(mapStateToProps)(CategoriesContainer);
