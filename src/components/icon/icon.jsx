import styled from 'styled-components';

const IconContainer = ({ className, icon_id }) => (
	<div className={className}>
		<i className={`fa ${icon_id}`} aria-hidden="true"></i>
	</div>
);

export const Icon = styled(IconContainer)`
	font-size: ${({ size = '24px' }) => size};
	margin: ${({ margin = 0 }) => margin};
`;
