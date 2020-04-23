import React from 'react';
import { shallow } from 'enzyme';

import Form from '../components/Form';

it('renders without crashing', () => {
	shallow(<Form />);
});
