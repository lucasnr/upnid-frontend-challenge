import React from 'react';
import { shallow } from 'enzyme';

import Legend from '../components/Legend';
import { Name } from '../components/Legend/styles';

describe('Testing legend component', () => {
	it('renders without crashing and matches snapshot', () => {
		const wrapper = shallow(<Legend />);

		expect(wrapper).toMatchSnapshot();
	});

	it('renders default value without prop value', () => {
		const defaultValue = 'Jogador sem nome';
		const wrapper = shallow(<Legend />);

		expect(wrapper.find(Name).text()).toBe(defaultValue);
	});

	it('renders prop value', () => {
		const value = 'Some value that should be rendered';
		const wrapper = shallow(<Legend name={value} />);

		expect(wrapper.find(Name).text()).toBe(value);
	});
});
