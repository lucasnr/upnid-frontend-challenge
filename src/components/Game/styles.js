import styled, { keyframes } from 'styled-components';

import bg from '../../assets/img/bg.gif';
import bgPaused from '../../assets/img/bg-pause.png';
import car from '../../assets/img/car.png';
import obstacle from '../../assets/img/obstacle.png';

export const Container = styled.main`
	background-image: url(${(props) => (props.paused ? bgPaused : bg)});
	background-position: center;
	background-size: cover;
	border-radius: 0.25rem;
	height: 20rem;
	overflow: hidden;
	position: relative;
	width: 20rem;

	@media (min-width: 576px) {
		height: 30rem;
		width: 30rem;
	}
`;

export const Car = styled.img.attrs((props) => ({
	alt: 'Car icon',
	style: {
		left: `${props.left}%`,
	},
	src: car,
}))`
	bottom: 0px;
	height: 6rem;
	position: absolute;
	transition: left 300ms ease;
	width: 6rem;

	@media (min-width: 576px) {
		height: 9rem;
		width: 9rem;
	}
`;

const obstacleAnimation = (props) => keyframes`
	0% {
		height: .625rem;
		top: 45%;
		width: 1rem;
	}

	100% {
		height: 7.25rem;
		left: ${props.to}%;
		top: 100%;
		width: 8rem;
	}
`;

export const Obstacle = styled.img.attrs((props) => ({
	alt: 'Obstacle icon',
	style: {
		left: `${props.initial || 45}%`,
	},
	src: obstacle,
}))`
	animation: ${(props) => obstacleAnimation(props)} 2s linear forwards;
	position: absolute;
	transition: left 300ms ease;
`;

export const Paused = styled.span.attrs((props) => ({
	children: 'Paused',
}))`
	background-color: rgba(0, 0, 0, 0.75);
	border-radius: 0.25rem;
	color: #fff;
	font-size: 1.5rem;
	font-weight: bold;
	left: 50%;
	padding: 1rem 2rem;
	position: absolute;
	top: 50%;
	text-transform: uppercase;
	transform: translate(-50%, -50%);
`;
