import { setPostData } from './set-post-data';

export const savePostAsync = (requestServer, newPostData) => (dispath) => {
	requestServer('savePost', newPostData).then((updatedPost) => {
		dispath(setPostData(updatedPost.res));
	});
};
