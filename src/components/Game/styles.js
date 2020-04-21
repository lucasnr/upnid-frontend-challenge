import styled from 'styled-components';

import bg from '../../assets/img/bg.gif';
import car from '../../assets/img/car.png';

export const Container = styled.main`
	background-image: url(${bg});
	background-position: center;
	background-size: cover;
	border-radius: 0.25rem;
	height: 30rem;
	position: relative;
	width: 30rem;
`;

export const Car = styled.img.attrs((props) => ({
	style: {
		left: `${props.left}%`,
	},
}))`
	bottom: 0px;
	height: 9rem;
	position: absolute;
	transition: left 300ms ease;
	width: 9rem;
`;

Car.defaultProps = {
	src: car,
	alt: 'Car icon',
};
