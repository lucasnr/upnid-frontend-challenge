import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0px;
		outline: none;
		padding: 0px;
	}

	ul {
		list-style: none;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	body {
		background-color: #efefef;
	}

	#root {
		align-items: center;
		display: flex;
		justify-content: center;
		min-height: 100vh;
	}
`;

export default GlobalStyle;
