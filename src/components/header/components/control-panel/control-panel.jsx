import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Icon } from '../../../../components';
import { ROLE } from '../../../../constants';
import styled from 'styled-components';
import { selectUserLogin, selectUserRole } from '../../../../selectors';
import { logout } from '../../../../actions';
import { checkAccess } from '../../../../utils';

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
	const login = useSelector(selectUserLogin);
	const roleId = useSelector(selectUserRole);

	const dispatch = useDispatch();

	const onLogout = () => {
		dispatch(logout());
		sessionStorage.removeItem('userData');
	};

	const isAdmin = checkAccess([ROLE.ADMIN], roleId);

	return (
		<div className={className}>
			<RightAligned>
				{!login ? (
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
				{isAdmin && (
					<>
						<Link to="/post">
							<Icon icon_id="fa-file-text-o" margin="0 10px" />
						</Link>
						<Link to="/users">
							<Icon icon_id="fa-users" margin="0 0 0 10px" />
						</Link>
					</>
				)}
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)`
	min-width: 108.6px;

	& i:hover {
		cursor: pointer;
	}
`;
