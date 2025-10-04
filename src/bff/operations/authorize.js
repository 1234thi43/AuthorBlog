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

	const { id, login, role_id, roleId, password } = user;

	if (authPassword.trim() !== password) {
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
			role_id: role_id ?? roleId,
			session: sessions.create(user),
		},
	};
};
