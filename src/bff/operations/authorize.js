import { getUser } from '../api/get-user';
import { sessions } from '../sessions';

export const authorize = async (authLogin, authPassword) => {
	const user = await getUser(authLogin.trim());

	if (!user) {
		return {
			error: 'Такой пользователь не найден',
			res: null,
		};
	}

	const { id, login } = user;

	if (authPassword.trim() !== user.password) {
		return {
			error: 'Неверный пароль',
			res: null,
		};
	}

	return {
		error: null,
		res: {
			id,
			login,
			role_id: user.role_id,
			session: sessions.create(user),
		},
	};
};
