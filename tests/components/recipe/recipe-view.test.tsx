import RecipeView from '../../../src/components/recipe/recipe-view';
import * as React from 'react';
import { mount } from 'enzyme';

describe('RecipeView', () => {
    const recipe = { id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara', servings: 2, time: 30, ingredients: [ { text: '4 egg yolks', done: false } ], method: [ { text: 'Start boiling the water.', done: false } ], finish: [ { text: 'Eat it!', done: false } ] };
    const toggledRecipe = { id: 1, category_id: 1, category: 'Pasta', name: 'Spaghetti Carbonara', servings: 2, time: 30, ingredients: [ { text: '4 egg yolks', done: true } ], method: [ { text: 'Start boiling the water.', done: true } ], finish: [ { text: 'Eat it!', done: true } ] };

    it('should render recipe', () => {
        const wrapper = mount(
            <RecipeView toggleFinish={() => {}} toggleIngredient={() => {}} toggleMethod={() => {}} recipe={recipe} />
        );

        const finish = wrapper.find('section.finish li');
        expect(finish.length).toBe(1);
        expect(finish.text()).toBe(recipe.finish[0].text);

        const ingredients = wrapper.find('section.ingredients li');
        expect(ingredients.length).toBe(1);
        expect(ingredients.text()).toBe(recipe.ingredients[0].text);

        const method = wrapper.find('section.method li');
        expect(method.length).toBe(1);
        expect(method.text()).toBe(recipe.method[0].text);
    });

    it('should toggle finish', () => {
        const toggleFinish = jest.fn();
        const wrapper = mount(
            <RecipeView toggleFinish={toggleFinish} toggleIngredient={() => {}} toggleMethod={() => {}} recipe={recipe} />
        );
        const cmp = wrapper.find('section.finish li');
        cmp.simulate('click');

        expect(toggleFinish).toBeCalledWith(0);
    });

    it('should toggle back finish', () => {
        const toggleFinish = jest.fn();
        const wrapper = mount(
            <RecipeView toggleFinish={toggleFinish} toggleIngredient={() => {}} toggleMethod={() => {}} recipe={toggledRecipe} />
        );
        const cmp = wrapper.find('section.finish li');
        cmp.simulate('click');

        expect(toggleFinish).toBeCalledWith(0);
    });

    it('should toggle ingredient', () => {
        const toggleIngredient = jest.fn();
        const wrapper = mount(
            <RecipeView toggleFinish={() => {}} toggleIngredient={toggleIngredient} toggleMethod={() => {}} recipe={recipe} />
        );
        const cmp = wrapper.find('section.ingredients li');
        cmp.simulate('click');

        expect(toggleIngredient).toBeCalledWith(0);
    });

    it('should toggle back ingredient', () => {
        const toggleIngredient = jest.fn();
        const wrapper = mount(
            <RecipeView toggleFinish={() => {}} toggleIngredient={toggleIngredient} toggleMethod={() => {}} recipe={toggledRecipe} />
        );
        const cmp = wrapper.find('section.ingredients li');
        cmp.simulate('click');

        expect(toggleIngredient).toBeCalledWith(0);
    });

    it('should toggle method', () => {
        const toggleMethod = jest.fn();
        const wrapper = mount(
            <RecipeView toggleFinish={() => {}} toggleIngredient={() => {}} toggleMethod={toggleMethod} recipe={recipe} />
        );
        const cmp = wrapper.find('section.method li');
        cmp.simulate('click');

        expect(toggleMethod).toBeCalledWith(0);
    });

    it('should toggle back method', () => {
        const toggleMethod = jest.fn();
        const wrapper = mount(
            <RecipeView toggleFinish={() => {}} toggleIngredient={() => {}} toggleMethod={toggleMethod} recipe={toggledRecipe} />
        );
        const cmp = wrapper.find('section.method li');
        cmp.simulate('click');

        expect(toggleMethod).toBeCalledWith(0);
    });
});