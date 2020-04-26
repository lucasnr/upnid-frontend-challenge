import React from 'react';
import { shallow } from 'enzyme';

import Game from '../components/Game';
import { Message } from '../components/Game/styles';

describe('Testing game component', () => {
	it('renders without crashing and matches snapshot', () => {
		const wrapper = shallow(<Game />);
		expect(wrapper).toMatchSnapshot();

		wrapper.setProps({ start: true });
		expect(wrapper).toMatchSnapshot();

		expect(wrapper.find(Message).text()).toBe('3');
	});
});
