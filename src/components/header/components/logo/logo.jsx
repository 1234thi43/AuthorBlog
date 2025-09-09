import { Link } from 'react-router-dom';
import { Icon } from '../../../../components';
import styled from 'styled-components';

const LargeText = styled.div`
	font-size: 32px;
	font-weight: bold;
	margin-top: 5px;
`;

const SmallText = styled.div`
	font-size: 24px;
	font-weight: bold;
`;

const LogoContainer = ({ className }) => (
	<Link className={className} to="/">
		<Icon icon_id="fa-code" size="70px" margin="0 10px 0 0" />
		<div>
			<LargeText>Блог</LargeText>
			<SmallText>веб-разработчика</SmallText>
		</div>
	</Link>
);

export const Logo = styled(LogoContainer)`
	display: flex;
`;
