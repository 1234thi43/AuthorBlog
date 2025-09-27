import styled from 'styled-components';
import { H2, Icon, Input } from '../../../../components';
import { SpecialPanel } from '../special-panel/special-panel';
import { useRef } from 'react';
import { sanitizeContent } from './utils/sanitize-content';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { savePostAsync } from '../../../../actions';
import { useServerRequest } from '../../../../hooks';

const PostFormContainer = ({
	className,
	post: { id, title, imageUrl, content, publishedAt },
}) => {
	const imageRef = useRef(null);
	const titleRef = useRef(null);
	const contentRef = useRef(null);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const requestServer = useServerRequest();

	const onSave = () => {
		const newImageUrl = imageRef.current.value;
		const newTitle = titleRef.current.value;
		const newContent = sanitizeContent(contentRef.current.innerHTML);

		const dispatched = dispatch(
			savePostAsync(requestServer, {
				id,
				imageUrl: newImageUrl,
				title: newTitle,
				content: newContent,
			}),
		);

		if (dispatched && typeof dispatched.then === 'function') {
			dispatched
				.then(() => navigate(`/post/${id}`))
				.catch((err) => {
					console.error('Ошибка при сохранении поста:', err);
				});
		} else {
			navigate(`/post/${id}`);
		}
	};

	return (
		<div className={className}>
			<Input ref={imageRef} defaultValue={imageUrl} placeholder="Изображение..." />
			<Input
				ref={titleRef}
				defaultValue={title}
				placeholder="Заголовок статьи..."
			/>
			<SpecialPanel
				publishedAt={publishedAt}
				margin="20px 0"
				editButton={
					<Icon
						icon_id="fa-floppy-o"
						size="21px"
						margin="1px 15px 0 0"
						onClick={onSave}
					/>
				}
			/>
			<div
				ref={contentRef}
				className="post-text"
				contentEditable={true}
				suppressContentEditableWarning={true}
			>
				{content}
			</div>
		</div>
	);
};

export const PostForm = styled(PostFormContainer)`
	& img {
		height: 150px;
		width: 280px;
		float: left;
		margin: 0 30px 20px 0;
	}
	& .post-text {
		font-size: 18px;
		white-space: pre-line;
	}
`;
