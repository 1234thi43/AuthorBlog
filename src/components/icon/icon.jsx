import styled from 'styled-components';

const IconContainer = ({ className, icon_id, onClick, ...props }) => (
	<div className={className} onClick={onClick} {...props}>
		<i className={`fa ${icon_id}`} aria-hidden="true"></i>
	</div>
);

export const Icon = styled(IconContainer)`
	display: flex;
	justify-content: space-between;
	font-size: ${({ size = '24px' }) => size};
	margin: ${({ margin = 0 }) => margin};
	color: ${({ disabled }) => (disabled ? '#ccc' : '#000')};

	&:hover {
		cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
	}
`;
