// import viteLogo from '/vite.svg'
import styled from 'styled-components';

const Div = styled.div`
	display: flex;
	text-align: center;
	justify-content: center;
	color: red;
`;

function App() {
	return (
		<Div>
			<i className="fa fa-meetup fa-3x"></i>
			<div>123</div>
		</Div>
	);
}

export default App;
