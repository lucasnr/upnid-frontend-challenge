import React, { useState, useCallback } from 'react';

import GlobalStyle from './styles/GlobalStyle';
import Form from './components/Form';
import Game from './components/Game';
import Legend from './components/Legend';

export default function App() {
	const [start, setStart] = useState(false);
	const [name, setName] = useState('');
	const handleStart = useCallback((event) => {
		event.preventDefault();
		setStart(true);
	}, []);

	return (
		<>
			<GlobalStyle />
			{!start && (
				<Form
					onSubmit={handleStart}
					value={name}
					onChangeText={(event) => setName(event.target.value)}
				/>
			)}
			<Game start={start} />
			{start && <Legend name={name} />}
		</>
	);
}
