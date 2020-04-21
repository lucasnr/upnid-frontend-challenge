import React from 'react';

import { Container } from './styles';

export default function Form({ onSubmit }) {
	return (
		<Container onSubmit={onSubmit}>
			<input id="name" type="text" name="name" placeholder="Nome" />
			<button type="submit">
				Iniciar<span> corrida</span>
			</button>
		</Container>
	);
}
