import styled from 'styled-components';
import { Icon, Input } from '../../../../components';

const SearchContainer = ({ className, searchPhrase, onChange }) => {
	return (
		<div className={className}>
			<Input
				value={searchPhrase}
				type="text"
				placeholder="Поиск по заголовкам..."
				onChange={onChange}
			/>
			<Icon icon_id="fa-search" margin="0 10px 0 0" size="21px" />
		</div>
	);
};

export const Search = styled(SearchContainer)`
	height: 42px;
	width: 350px;
	display: flex;
	align-items: center;
	margin: 20px auto 20px;
	position: relative;

	& input {
		height: 40px;
		padding: 10px 33px 10px 10px;
	}

	& i {
		position: absolute;
		right: 20px;
		bottom: 15px;
		cursor: pointer;
	}
`;
