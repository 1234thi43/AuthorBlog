import styled from 'styled-components';
import { Icon } from '../../../../../../components';

const CommentContainer = ({ className, id, author, publishedAt, content }) => {
	return (
		<div className={className}>
			<div className="comment">
				<div className="information-panel">
					<div className="author">
						<Icon
							icon_id="fa-user-circle-o"
							size="18px"
							margin="0 10px 0 0"
						/>{' '}
						{author}
					</div>
					<div className="publishedAt">
						<Icon icon_id="fa-calendar-o" size="18px" margin="0 10px 0 0" />{' '}
						{publishedAt}
					</div>{' '}
				</div>
				<div className="comment-text">{content}</div>
			</div>
			<Icon icon_id="fa-trash-o" size="18px" margin="20px 0 0 10px" />
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	display: flex;

	& .comment {
		width: 552px;
		min-height: 80px;
		border: 1px solid black;
		padding: 20px;
		margin-top: 20px;
	}
	& .information-panel {
		display: flex;
		justify-content: space-between;
	}
	& .author {
		display: flex;
		margin-bottom: 10px;
	}
	& .publishedAt {
		display: flex;
	}
`;
