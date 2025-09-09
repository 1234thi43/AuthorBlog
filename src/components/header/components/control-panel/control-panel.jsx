import { Link } from 'react-router-dom';
import { Icon } from '../../../../components';
import styled from 'styled-components';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 10px;
`;

const StyledLink = styled(Link)`
	display: flex;
	justify-content: center;
	text-align: center;
	border: 1px solid black;
	border-radius: 3px;
	font-size: 18px;
	width: 100px;
	height: 25px;
`;

const ControlPanelContainer = ({ className }) => {
	return (
		<div className={className}>
			<RightAligned>
				<div>username 123</div>
				<StyledLink to="/login">Вход</StyledLink>
			</RightAligned>
			<RightAligned>
				<Link to={-1}>
					<Icon icon_id="fa-backward" margin="0 0 0 15px" />
				</Link>
				<Link to="/post">
					<Icon icon_id="fa-file-text-o" margin="0 0 0 15px" />
				</Link>
				<Link to="/users">
					<Icon icon_id="fa-users" margin="0 0 0 15px" />
				</Link>
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;
