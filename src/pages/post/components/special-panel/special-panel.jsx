import styled from 'styled-components';
import { Icon } from '../../../../components';

const SpecialPanelContainer = ({ className, publishedAt, editButton }) => {
	return (
		<div className={className}>
			<div className="published-at">
				<Icon icon_id="fa-calendar-o" size="18px" margin="0 10px 0 0" />
				{publishedAt}
			</div>
			<div className="buttons">
				{editButton}
				<Icon icon_id="fa-trash-o" size="21px" />
			</div>
		</div>
	);
};

export const SpecialPanel = styled(SpecialPanelContainer)`
	display: flex;
	justify-content: space-between;
	margin: ${({ margin }) => margin};
	font-size: 18px;

	& div {
		display: flex;
	}

	& .published-at,
	.buttons {
		display: flex;
		align-items: center;
	}
`;
