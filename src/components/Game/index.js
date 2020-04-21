import React, { useEffect, useState } from 'react';

import { Container, Car, Obstacle, Message } from './styles';

export default function Game({ start }) {
	const [paused, setPaused] = useState(false);
	const [counter, setCounter] = useState(3);
	const [left, setLeft] = useState(33.33);
	const [obstacle, setObstacle] = useState();

	useEffect(() => {
		if (!start || counter > 0) return;

		document.onkeydown = function (e) {
			e = e || window.event;
			if (e.key === 'Escape') setPaused((prev) => !prev);
			if (paused) return;

			if (e.key === 'ArrowRight')
				setLeft((prev) => (prev === 66.66 ? prev : prev + 33.33));
			else if (e.key === 'ArrowLeft')
				setLeft((prev) => (prev === 0 ? prev : prev - 33.33));
			else if (e.key.toLowerCase() === 'd') setLeft(66.66);
			else if (e.key.toLowerCase() === 'a') setLeft(0);
			else if (e.key.toLowerCase() === 's') setLeft(33.33);
		};

		let xDown = null;
		let yDown = null;

		document.addEventListener('touchstart', handleTouchStart, false);
		document.addEventListener('touchmove', handleTouchMove, false);

		const getTouches = (evt) => evt.touches || evt.originalEvent.touches;
		function handleTouchStart(evt) {
			const firstTouch = getTouches(evt)[0];
			xDown = firstTouch.clientX;
			yDown = firstTouch.clientY;
		}

		function handleTouchMove(evt) {
			if (!xDown || !yDown) return;

			let xUp = evt.touches[0].clientX;
			let yUp = evt.touches[0].clientY;

			let xDiff = xDown - xUp;
			let yDiff = yDown - yUp;

			if (Math.abs(xDiff) > Math.abs(yDiff)) {
				if (xDiff > 0) setLeft((prev) => (prev === 0 ? prev : prev - 33.33));
				else setLeft((prev) => (prev === 66.66 ? prev : prev + 33.33));
			}

			xDown = null;
			yDown = null;
		}
	}, [counter, paused, start]);

	useEffect(() => {
		if (start) {
			if (counter > 0)
				setTimeout(() => {
					setCounter((prev) => prev - 1);
				}, 1000);
		}
	}, [counter, start]);

	useEffect(() => {
		if (!start) return;

		setInterval(() => {
			const obstacles = [
				{ initalPosition: 33.33, toPosition: -33.33 },
				{ initalPosition: 45, toPosition: 33.33 },
				{ initalPosition: 66.66, toPosition: 99.99 },
			];
			const random = Math.floor(Math.random() * 3);
			setObstacle(obstacles[random]);
		}, 3000);
	}, [start]);

	return (
		<Container paused={paused || !start}>
			{!paused && obstacle && (
				<Obstacle initial={obstacle.initialPosition} to={obstacle.toPosition} />
			)}
			<Car left={left} />

			{paused && <Message>Paused</Message>}
			{start && counter > 0 && <Message>{counter}</Message>}
		</Container>
	);
}
