import React from 'react';

import { Container } from './styles';

export default function Form({ onSubmit, value, onChangeText }) {
	return (
		<Container onSubmit={onSubmit}>
			<input
				id="name"
				type="text"
				name="name"
				placeholder="Nome"
				value={value}
				onChange={onChangeText}
			/>
			<button type="submit">
				Iniciar<span> corrida</span>
			</button>
		</Container>
	);
}
