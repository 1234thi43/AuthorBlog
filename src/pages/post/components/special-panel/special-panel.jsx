import styled from 'styled-components';
import { Icon } from '../../../../components';
import { useDispatch } from 'react-redux';
import { openModal, CLOSE_MODAL, removePostAsync } from '../../../../actions';
import { useServerRequest } from '../../../../hooks';
import { useNavigate } from 'react-router-dom';

const SpecialPanelContainer = ({ className, id, publishedAt, editButton }) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const navigate = useNavigate();

	const onPostRemove = (id) => {
		dispatch(
			openModal({
				text: 'Удалить статью?',
				onConfirm: () => {
					dispatch(removePostAsync(requestServer, id)).then(() => {
						navigate(`/`);
					});
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	return (
		<div className={className}>
			<div className="published-at">
				{publishedAt && (
					<Icon icon_id="fa-calendar-o" size="18px" margin="0 10px 0 0" />
				)}
				{publishedAt}
			</div>
			<div className="buttons">
				{editButton}
				{publishedAt && (
					<Icon
						icon_id="fa-trash-o"
						size="21px"
						onClick={() => onPostRemove(id)}
					/>
				)}
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
