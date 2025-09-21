export const sessions = {
	list: {},
	create(user) {
		const hash = Math.random().toFixed(50);

		this.list[hash] = user;

		return hash;
	},
	remove(hash) {
		delete this.list[hash];
	},
	access(hash, accessRoles) {
		const user = this.list[hash];

		// console.log('hash', hash);
		// console.log('accessRoles', accessRoles);
		// console.log('user.role_id', user.role_id);

		return !!user && accessRoles.includes(user.roleId);
	},
};
