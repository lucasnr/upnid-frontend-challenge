import React, { useEffect, useState } from 'react';

import { Container, Car } from './styles';

export default function Game() {
	const [left, setLeft] = useState(33.33);
	useEffect(() => {
		document.onkeydown = function (e) {
			e = e || window.event;
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
	}, []);

	return (
		<Container>
			<Car left={left} />
		</Container>
	);
}
