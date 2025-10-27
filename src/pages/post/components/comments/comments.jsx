import { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components';
import { Comment } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserRole } from '../../../../selectors';
import { addCommentAsync } from '../../../../actions';
import { ROLE, PROP_TYPE } from '../../../../constants';
import propTypes from 'prop-types';

const CommentsContainer = ({ className, comments, postId }) => {
	const [newComment, setNewComment] = useState('');

	const dispatch = useDispatch();
	const userRole = useSelector(selectUserRole);

	const onNewCommentAdd = (postId, content) => {
		dispatch(addCommentAsync(postId, content));
		setNewComment('');
	};

	const isGuest = userRole === ROLE.GUEST;

	console.log(comments);

	return (
		<div className={className}>
			{!isGuest && (
				<div className="new-comment">
					<textarea
						name="comment"
						value={newComment}
						placeholder="Комментарий..."
						onChange={({ target }) => setNewComment(target.value)}
					></textarea>
					<Icon
						icon_id="fa-paper-plane-o"
						size="18px"
						margin="0 0 0 10px"
						onClick={() => onNewCommentAdd(postId, newComment)}
					/>
				</div>
			)}
			<div className="comments">
				{comments.map(({ _id, id, author, content, publishedAt }) => (
					<Comment
						key={_id || id}
						postId={postId}
						id={_id || id}
						author={author?.login || author || 'Unknown'}
						content={content}
						publishedAt={publishedAt}
					/>
				))}
			</div>
		</div>
	);
};

export const Comments = styled(CommentsContainer)`
	/* display: flex; */
	margin: 0 auto;
	width: 580px;

	& .new-comment {
		display: flex;
		width: 100%;
		margin: 20px 0 0 0;
	}

	& .new-comment textarea {
		width: 100%;
		height: 160px;
		resize: none;
		padding: 15px;
		font-size: 15px;
	}
`;

Comments.propTypes = {
	comments: propTypes.arrayOf(PROP_TYPE.COMMENT).isRequired,
	postId: propTypes.string.isRequired,
};
