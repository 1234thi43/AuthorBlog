import styled from 'styled-components';
import propTypes from 'prop-types';

const TableRowContainer = ({ className, children }) => (
	<div className={className}>{children}</div>
);

export const TableRow = styled(TableRowContainer)`
	display: flex;
	align-items: center;
	border: ${({ border }) => (border ? '1px solid black' : 'none')};

	& > div {
		display: flex;
		padding: 0 10px;
	}

	& .login-column {
		width: 170px;
	}

	& .registered-at-column {
		width: 215px;
	}

	& .role-it-column {
		width: auto;
	}
`;

TableRow.propTypes = {
	children: propTypes.node.isRequired,
};
