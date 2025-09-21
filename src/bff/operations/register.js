import { getUser, addUser } from "../api";
import { sessions } from "../sessions";

export const register = async (regLogin, regPassword) => {
	const existedUser = await getUser(regLogin);

	if (existedUser) {
		return {
			error: 'Пользователь с таким логином уже существует',
			res: null,
		};
	}

	await addUser(regLogin, regPassword);

	const user = await getUser(regLogin);

	if (!user) {
		return {
			error: 'Ошибка при регистрации: пользователь не найден после создания',
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
};
