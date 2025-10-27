export function request(url, method, data) {
	console.log('Fetch URL:', url, 'method:', method);

	return fetch(url, {
		headers: {
			'content-type': 'application/json',
		},
		method: method || 'GET',
		body: data ? JSON.stringify(data) : undefined,
	}).then((res) => res.json());
}

// export function request(url, method, data) {
// 	return fetch(url, {
// 		headers: { 'content-type': 'application/json' },
// 		method: method || 'GET',
// 		body: data ? JSON.stringify(data) : undefined,
// 		credentials: 'include',
// 	}).then((res) => res.json().catch(() => ({})));
// }
