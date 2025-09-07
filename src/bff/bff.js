import { getUser } from './get-user';
import { addUser } from './add-user';
import { createSession } from './create-session';

export const server = {
	async authorize(authLogin, authPassword) {
		const user = getUser(authLogin);

		if (!user) {
			return {
				error: 'Такой пользователь не найден',
				response: null,
			};
		}

		if (authPassword !== user.password) {
			return {
				error: 'Неверный пароль',
				response: null,
			};
		}

		return {
			error: null,
			response: createSession(user.role_id),
		};
	},
	async register(regLogin, regPassword) {
		const user = getUser(regLogin);

		if (user) {
			return {
				error: 'Пользователь с таким логином уже существует',
				response: null,
			};
		}

		await addUser(regLogin, regPassword);

		return {
			error: null,
			response: createSession(user.role_id),
		};
	},
};
