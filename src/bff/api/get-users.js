import { transformUser } from '../transformers';

export const getUsers = async () =>
	fetch('http://localhost:3000/users')
		.then((loadedUsers) => loadedUsers.json())
		.then((loadedUsers) => loadedUsers && loadedUsers.map(transformUser));
