import styled from 'styled-components';
import propTypes from 'prop-types';

const ButtonContainer = ({ children, className, ...props }) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonContainer)`
	width: ${({ width = '100%' }) => width};
	height: ${({ height = '25px' }) => height};
	padding: ${({ padding }) => padding};
	margin: ${({ margin }) => margin};
	display: flex;
	justify-content: center;
	text-align: center;
	border: 1px solid black;
	border-radius: 3px;
	font-size: 18px;

	&:hover {
		cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
		background-color: #dddddd;
	}
`;

Button.propTypes = {
	children: propTypes.node.isRequired,
};
