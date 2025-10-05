import propTypes from 'prop-types';
import { ROLE } from '../bff/constants';

export const PROP_TYPE = {
	ROLE: propTypes.oneOf(Object.values(ROLE)),
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
