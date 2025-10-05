export const debounce = (fn, delay) => {
	let timeoutId;

	return (...args) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(fn, delay, ...args);

		// setTimeout(fn, delay, ...args);
		// равнозначно записи - setTimeout(() => fn(...args), delay);
	};
};
