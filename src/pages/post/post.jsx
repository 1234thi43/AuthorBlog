import styled from 'styled-components';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PostContent, Comments, PostForm } from './components';
import { useParams, useMatch } from 'react-router-dom';
import { loadPostAsync } from '../../actions/load-post-async';
import { useServerRequest } from '../../hooks';
import { selectPost } from '../../selectors';

const PostContainer = ({ className }) => {
	const dispatch = useDispatch();
	const params = useParams();
	const isEditing = useMatch('/post/:id/edit');
	const requestServer = useServerRequest();
	const post = useSelector(selectPost);

	useEffect(() => {
		dispatch(loadPostAsync(requestServer, params.id));
	}, [requestServer, params.id, dispatch]);

	return (
		<div className={className}>
			{isEditing ? (
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
