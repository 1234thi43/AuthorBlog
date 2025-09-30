import { transformPost } from '../transformers';

// export const getPosts = async (page, limit) => {
// 	return fetch(`http://localhost:3000/posts?_page=${page}&_limit=${limit}`)
// 		.then((response) => response.json())
// 		.then((loadedPosts) => loadedPosts && loadedPosts.map(transformPost));
// };

export const getPosts = async (page, limit) => {
	return fetch(`http://localhost:3000/posts`)
		.then((response) => response.json())
		.then((res) => {
			const postsArray = Array.isArray(res) ? res : res.data;

			const validPosts = postsArray.filter((post) => post && post.id);

			const start = (page - 1) * limit;
			const end = start + limit;
			const pagedPosts = validPosts.slice(start, end);

			return pagedPosts.map(transformPost);
		});
};
