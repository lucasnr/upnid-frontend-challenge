import styled from 'styled-components';

export const Container = styled.form`
	align-items: center;
	display: flex;
	margin-bottom: 1.5rem;
	width: 20rem;

	input {
		border: none;
		border-radius: 0.125rem;
		font-size: 0.75rem;
		flex: 1;
		margin-right: 0.75rem;
		width: 100%;
		padding: 0.375rem 1rem;
	}

	button {
		background-color: #49e;
		border: none;
		border-radius: 0.125rem;
		color: #fff;
		font-size: 0.75rem;
		padding: 0.375rem 1rem;
		text-transform: uppercase;

		span {
			display: none;
		}
	}

	@media (min-width: 576px) {
		width: 30rem;

		input,
		button {
			font-size: 1rem;

			span {
				display: inline;
			}
		}
	}
`;
