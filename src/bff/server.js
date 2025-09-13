import { getUser } from './get-user';
import { addUser } from './add-user';
import { sessions } from './sessions';

export const server = {
	async logout(session) {
		sessions.remove(session);
	},

	async authorize(authLogin, authPassword) {
		const user = await getUser(authLogin.trim());

		// console.log('authPassword:', JSON.stringify(authPassword));
		// console.log('user.password:', JSON.stringify(user.password));
		// console.log('equals:', authPassword === user.password);

		if (!user) {
			return {
				error: 'Такой пользователь не найден',
				res: null,
			};
		}

		if (authPassword.trim() !== user.password) {
			return {
				error: 'Неверный пароль',
				res: null,
			};
		}

		return {
			error: null,
			res: {
				id: user.id,
				login: user.login,
				role_id: user.role_id,
				session: sessions.create(user),
			},
		};
	},

	async register(regLogin, regPassword) {
		const user = getUser(regLogin);

		if (user) {
			return {
				error: 'Пользователь с таким логином уже существует',
				res: null,
			};
		}

		await addUser(regLogin, regPassword);

		return {
			error: null,
			res: {
				id: user.id,
				login: user.login,
				role_id: user.role_id,
				session: sessions.create(user),
			},
		};
	},
};
