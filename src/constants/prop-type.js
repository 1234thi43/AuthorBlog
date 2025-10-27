import propTypes from 'prop-types';

export const PROP_TYPE = {
	ERROR: propTypes.oneOfType([propTypes.string, propTypes.exact(null)]),
	COMMENT: propTypes.shape({
		id: propTypes.number.isRequired,
		author: propTypes.string.isRequired,
		content: propTypes.string.isRequired,
		publishedAt: propTypes.string.isRequired,
	}),
	POST: propTypes.shape({
		id: propTypes.string.isRequired,
		title: propTypes.string.isRequired,
		imageUrl: propTypes.string.isRequired,
		content: propTypes.string.isRequired,
		publishedAt: propTypes.string.isRequired,
	}),
};
