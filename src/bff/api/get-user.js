import { transformUser } from '../transformers';

export const getUser = async (loginToFind) =>
	fetch(`http://localhost:3000/users?login=${loginToFind.trim()}`)
		.then((createdUser) => createdUser.json())
		.then(([loadedUser]) => loadedUser && transformUser(loadedUser));
