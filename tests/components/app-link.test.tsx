import AppLink from '../../src/components/app-link';
import * as React from 'react';
import { mount } from 'enzyme';

describe('AppLink', () => {
   it('should render link', () => {
       const wrapper = mount(
           <AppLink to="/">Vše</AppLink>
       );

       expect(wrapper.find('a').length).toBe(1);
   });

    it('should render text', () => {
        const wrapper = mount(
            <AppLink to="/">Vše</AppLink>
        );

        expect(wrapper.find('a').text()).toBe('Vše');
    });
});