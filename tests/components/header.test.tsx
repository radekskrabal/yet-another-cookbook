import Header, { slogan, title } from '../../src/components/header';
import * as React from 'react';
import { mount } from 'enzyme';

describe('Header', () => {
    it('should render title', () => {
        const wrapper = mount(
            <Header />
        );

        expect(wrapper.find('h1').text()).toContain(title); // contains both text and slogan
    });

    it('should render slogan', () => {
        const wrapper = mount(
            <Header />
        );

        expect(wrapper.find('p.lead').text()).toBe(slogan);
    });
});