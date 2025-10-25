import { request } from '../utils/request';
import { setPostData } from './set-post-data';

export const savePostAsync = (id, newPostData) => (dispatch) => {
	const saveRequest = id
		? request(`/posts/${id}`, 'PATCH', newPostData)
		: request(`/posts`, 'POST', newPostData);

	// return saveRequest.then((updatedPost) => {
	// 	dispatch(setPostData(updatedPost.data));

	// 	return updatedPost.data;
	// });

	return saveRequest.then((updatedPost) => {
		const postWithId = {
			...updatedPost.data,
			id: updatedPost.data._id, // добавляем id для фронта
		};
		dispatch(setPostData(postWithId));
		return postWithId;
	});
};
