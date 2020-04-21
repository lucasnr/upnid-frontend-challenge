import React, { useState, useCallback } from 'react';

import GlobalStyle from './styles/GlobalStyle';
import Form from './components/Form';
import Game from './components/Game';

export default function App() {
	const [start, setStart] = useState(false);
	const handleStart = useCallback((event) => {
		event.preventDefault();
		setStart(true);
	}, []);

	return (
		<>
			<GlobalStyle />
			{!start && <Form onSubmit={handleStart} />}
			<Game start={start} />
		</>
	);
}
