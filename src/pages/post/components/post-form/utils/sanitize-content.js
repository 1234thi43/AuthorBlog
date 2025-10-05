export const sanitizeContent = (content) =>
	content
		.replaceAll('&nbsp;', '')
		// .replaceAll(/\s+/g, ' ')
		.replace(/ +/, ' ')
		.replaceAll('<div><br></div>', '\n')
		.replaceAll('<div>', '\n')
		.replaceAll('</div>', '');
