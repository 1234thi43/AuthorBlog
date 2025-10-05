import { transformPost } from '../transformers';

export const getPosts = async (searchPhrase, page, limit) => {
	return fetch(`http://localhost:3000/posts`)
		.then((response) => response.json())
		.then((res) => {
			const postsArray = Array.isArray(res) ? res : res.data;

			const validPosts = (postsArray || []).filter((post) => post && post.id);

			const filteredPosts = searchPhrase
				? validPosts.filter((post) =>
						post.title.toLowerCase().includes(searchPhrase.toLowerCase()),
					)
				: validPosts;

			const start = (page - 1) * limit;
			const end = start + limit;
			const pagedPosts = filteredPosts.slice(start, end);

			return pagedPosts.map(transformPost);
		});
};
