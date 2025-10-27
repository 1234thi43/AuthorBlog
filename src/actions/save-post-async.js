import { request } from '../utils/request';
import { setPostData } from './set-post-data';

// export const savePostAsync = (id, newPostData) => (dispatch) => {
// 	const saveRequest = id
// 		? request(`/posts/${id}`, 'PATCH', newPostData)
// 		: request(`/posts`, 'POST', newPostData);

// 	console.log('savePostAsync id =', id);

// 	return saveRequest.then((updatedPost) => {
// 		dispatch(setPostData(updatedPost.data));

// 		return updatedPost.data;
// 	});
// };

export const savePostAsync = (id, newPostData) => (dispatch) => {
	const saveRequest = id
		? request(`/posts/${id}`, 'PATCH', newPostData)
		: request(`/posts`, 'POST', newPostData);

	return saveRequest.then((updatedPost) => {
		// проверим, где именно лежат данные
		const postData = updatedPost.data || updatedPost;

		dispatch(setPostData(postData));

		return postData; // возвращаем уже нормализованный пост
	});
};
