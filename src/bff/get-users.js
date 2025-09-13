export const getUsers = async () =>
	fetch('http://localhost:3000/users')
		.then((loadedUsers) => loadedUsers.json())
		// .then((users) => {
		// 	users.forEach((user) => {
		// 		console.log('Логин:', user.login);
		// 		console.log('Пароль:', user.password);
		// 	});
		// 	return users;
		// });
