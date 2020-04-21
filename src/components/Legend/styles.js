import styled from 'styled-components';

export const Container = styled.section`
	margin-top: 1rem;
	width: 20rem;

	@media (min-width: 576px) {
		width: 30rem;
	}
`;

export const Name = styled.h2`
	font-size: 1rem;
	font-weight: normal;
	text-align: center;
`;

export const Controls = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	margin-top: 1rem;

	& > * {
		font-size: 0.75rem;

		&:nth-child(even) {
			text-align: right;
		}
	}
`;
