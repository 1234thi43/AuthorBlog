import styled from 'styled-components';
import { useEffect, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PostContent, Comments, PostForm } from './components';
import { useParams, useMatch } from 'react-router-dom';
import { loadPostAsync, RESET_POST_DATA } from '../../actions';
import { useServerRequest } from '../../hooks';
import { selectPost } from '../../selectors';
// import { initialPostState } from '../../reducers/post-reducer';

const PostContainer = ({ className }) => {
	const dispatch = useDispatch();
	const params = useParams();
	const isCreating = useMatch('/post');
	const isEditing = useMatch('/post/:id/edit');
	const requestServer = useServerRequest();
	const post = useSelector(selectPost);

	useLayoutEffect(() => {
		dispatch(RESET_POST_DATA);
	}, [dispatch, isCreating]);

	useEffect(() => {
		if (isCreating) {
			return;
		}

		dispatch(loadPostAsync(requestServer, params.id));
	}, [dispatch, requestServer, params.id, isCreating]);

	return (
		<div className={className}>
			{isCreating || isEditing ? (
				<PostForm post={post} />
			) : (
				<>
					<PostContent post={post} />
					<Comments comments={post.comments} postId={post.id} />
				</>
			)}
		</div>
	);
};

export const Post = styled(PostContainer)`
	margin: 40px 0;
	padding: 0 80px;
`;
