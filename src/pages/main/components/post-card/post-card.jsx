import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Icon } from '../../../../components';

const PostCardContainer = ({
	className,
	id,
	title,
	imageUrl,
	publishedAt,
	commentsCount,
}) => {
	return (
		<div className={className}>
			<Link to={`/post/${id}`}>
				<img src={imageUrl} alt={title} />
				<div className="post-card-footer">
					<h4>{title}</h4>
					<div className="post-card-info">
						<div>
							<Icon
								icon_id="fa-calendar-o"
								margin="0 10px 0 0"
								size="18px"
							/>
							{publishedAt}
						</div>
						<div>
							<Icon
								icon_id="fa-comment-o"
								margin="0 10px 0 0"
								size="18px"
							/>
							{commentsCount}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export const PostCard = styled(PostCardContainer)`
	display: flex;
	flex-direction: column;
	width: 280px;
	min-height: 220px;
	border: 1px solid black;
	margin: 20px;

	& img {
		display: block;
		height: 160px;
		width: 100%;
	}
	& h4 {
		margin: 0;
	}
	& .post-card-footer {
		border-top: 1px solid black;
		padding: 10px;
	}
	& .post-card-info {
		display: flex;
		justify-content: space-between;
		margin-top: 10px;
	}
	& .post-card-info > div {
		display: flex;
	}
`;
