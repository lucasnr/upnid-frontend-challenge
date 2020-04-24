import React from 'react';
import { shallow } from 'enzyme';

import Form from '../components/Form';

describe('Testing form component', () => {
	it('renders without crashing and matches snapshot', () => {
		const wrapper = shallow(<Form />);

		expect(wrapper).toMatchSnapshot();
	});

	it('executes callback on submit', () => {
		const callback = jest.fn();

		const wrapper = shallow(<Form onSubmit={callback} />);
		wrapper.simulate('submit');
		expect(callback).toHaveBeenCalled();
	});

	it('renders input with prop value', () => {
		const value = 'Some value that should be in the input';
		const wrapper = shallow(<Form value={value} />);

		expect(wrapper.find('input').props().value).toBe(value);
	});

	it('executes callback on input change', () => {
		let text;
		const value = 'Some random value';
		const callback = jest.fn((event) => {
			text = event.target.value;
		});

		const wrapper = shallow(<Form onChangeText={callback} />);
		wrapper.find('input').simulate('change', { target: { value } });

		expect(callback).toHaveBeenCalled();
		expect(text).toBe(value);
	});
});
