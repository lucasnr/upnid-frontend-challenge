import React from 'react';
import { shallow } from 'enzyme';

import Form from '../components/Form';

describe('Testing form component', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<Form />);

		expect(wrapper).toMatchSnapshot();
	});
});
