export const checkAccess = (access = [], userRole) => {
	const roleNum = Number(userRole);
	return access.map(Number).includes(roleNum);
};
