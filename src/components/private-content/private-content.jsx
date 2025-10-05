import { ERROR, PROP_TYPE } from '../../constants';
import { selectUserRole } from '../../selectors';
import { Error } from '../error/error';
import { useSelector } from 'react-redux';
import propTypes from 'prop-types';
import { checkAccess } from '../../utils';

export const PrivateContent = ({ children, access, serverError = null }) => {
	const userRole = useSelector(selectUserRole);

	const accessError = checkAccess(access, userRole) ? null : ERROR.ACCESS_DENIED;
	const error = serverError || accessError;

	return error ? <Error error={error} /> : children;
};

PrivateContent.propTypes = {
	children: propTypes.node.isRequired,
	access: propTypes.arrayOf(PROP_TYPE.ROLE).isRequired,
	serverError: PROP_TYPE.ERROR,
};
