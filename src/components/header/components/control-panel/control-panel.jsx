import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Icon } from '../../../../components';
import { ROLE } from '../../../../constants';
import styled from 'styled-components';
import {
	// selectUserRole,
	selectUserLogin,
	selectUserSession,
} from '../../../../selectors';
import { logout } from '../../../../actions';

const RightAligned = styled.div`
	height: 36px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const UserName = styled.div`
	font-size: 18px;
	font-weight: bold;
`;

const ControlPanelContainer = ({ className }) => {
	// const role_id = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const session = useSelector(selectUserSession);

	const dispatch = useDispatch();

	// console.log('role_id', role_id);
	// console.log('ROLE.GUEST', ROLE.GUEST);

	const onLogout = () => {
		dispatch(logout(session));
		sessionStorage.removeItem('userData');
	};

	return (
		<div className={className}>
			<RightAligned>
				{!session ? (
					<Button padding="2px 0">
						<Link to="/login">Вход</Link>
					</Button>
				) : (
					<>
						<UserName>{login}</UserName>
						<Link onClick={onLogout}>
							<Icon icon_id="fa-sign-out" margin="0 0 0 10px" />
						</Link>
					</>
				)}
			</RightAligned>
			<RightAligned>
				<Link to={-1}>
					<Icon icon_id="fa-backward" margin="0 10px 0 0" />
				</Link>
				<Link to="/post">
					<Icon icon_id="fa-file-text-o" margin="0 10px" />
				</Link>
				<Link to="/users">
					<Icon icon_id="fa-users" margin="0 0 0 10px" />
				</Link>
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;
