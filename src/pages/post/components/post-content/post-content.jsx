import styled from 'styled-components';
import { H2, Icon } from '../../../../components';

const PostContentContainer = ({
	className,
	post: {
		// id,
		title,
		imageUrl,
		content,
		publishedAt,
	},
}) => {
	return (
		<div className={className}>
			{imageUrl && <img src={imageUrl} alt={title} />}
			<H2>{title}</H2>
			<div className="special-panel">
				<div className="published-at">
					<Icon icon_id="fa-calendar-o" size="18px" margin="0 10px 0 0" />
					{publishedAt}
				</div>
				<div className="buttons">
					<Icon
						icon_id="fa-pencil-square-o"
						size="21px"
						margin="4px 15px 0 0"
					/>
					<Icon icon_id="fa-trash-o" size="21px" />
				</div>
			</div>
			<div className="post-text">{content}</div>
		</div>
	);
};

export const PostContent = styled(PostContentContainer)`
	& .special-panel {
		display: flex;
		justify-content: space-between;
		margin: -20px 0 20px 0;
		font-size: 18px;
	}
	& .published-at,
	.buttons {
		display: flex;
		align-items: center;
	}
	& .special-panel div {
		display: flex;
	}
	& img {
		height: 150px;
		width: 280px;
		float: left;
		margin: 0 30px 20px 0;
	}
	& .post-text {
		font-size: 18px;
	}
`;
