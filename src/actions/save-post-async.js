import { request } from '../utils/request';
import { setPostData } from './set-post-data';

export const savePostAsync = (id, newPostData) => (dispatch) => {
	const saveRequest = id
		? request(`/posts/${id}`, 'PATCH', newPostData)
		: request(`/posts`, 'POST', newPostData);

	return saveRequest.then((updatedPost) => {
		const postData = updatedPost.data || updatedPost;

		const normalizedPostData = {
			...postData,
			imageUrl: postData.imageUrl || postData.image,
		};

		dispatch(setPostData(normalizedPostData));

		return normalizedPostData;
	});
};
