import Footer, { disclaimer } from '../../src/components/footer';
import * as React from 'react';
import { mount } from 'enzyme';

describe('Footer', () => {
    it('should render disclaimer', () => {
        const wrapper = mount(
            <Footer />
        );

        expect(wrapper.find('footer').text()).toContain(disclaimer);
    });
});