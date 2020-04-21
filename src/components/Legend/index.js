import React from 'react';
import { isMobile } from 'react-device-detect';

import { Container, Name, Controls } from './styles';

export default function Legend({ name }) {
	return (
		<Container>
			<Name>{name || 'Jogador sem nome'}</Name>
			<Controls>
				{isMobile ? (
					<>
						<h5>Deslizar para esquerda</h5>
						<h6>Ir para a esquerda</h6>
						<h5>Deslizar para direita</h5>
						<h6>Ir para a direita</h6>
					</>
				) : (
					<>
						<h5>A</h5>
						<h6>Ir para o lado esquerdo</h6>
						<h5>S</h5>
						<h6>Ir para o centro</h6>
						<h5>D</h5>
						<h6>Ir para o lado direito</h6>
						<h5>Seta esquerda</h5>
						<h6>Ir para a esquerda</h6>
						<h5>Seta direita</h5>
						<h6>Ir para a direita</h6>
						<h5>ESC</h5>
						<h6>Pausar jogo</h6>
					</>
				)}
			</Controls>
		</Container>
	);
}
