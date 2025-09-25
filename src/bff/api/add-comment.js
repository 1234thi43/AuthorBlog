export const addComment = (userId, postId, content) =>
	fetch('http://localhost:3000/comments', {
		method: 'POST',
		headers: {
			'Content-type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			author_id: userId,
			post_id: postId,
			published_at: new Date().toISOString().split('T')[0],
			content,
		}),
	});
