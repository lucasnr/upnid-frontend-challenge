import React, { useEffect, useState } from 'react';

import { Container, Car } from './styles';

export default function Game() {
	const [left, setLeft] = useState(33.33);
	useEffect(() => {
		document.onkeydown = function (e) {
			e = e || window.event;
			if (e.key.toLowerCase() === 'd' || e.key === 'ArrowRight')
				setLeft((prev) => (prev === 66.66 ? prev : prev + 33.33));
			else if (e.key.toLowerCase() === 'a' || e.key === 'ArrowLeft')
				setLeft((prev) => (prev === 0 ? prev : prev - 33.33));
		};
	}, []);

	return (
		<Container>
			<Car left={left} />
		</Container>
	);
}
