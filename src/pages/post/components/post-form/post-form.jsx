import styled from 'styled-components';
import { Icon, Input } from '../../../../components';
import { SpecialPanel } from '../special-panel/special-panel';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { sanitizeContent } from './utils/sanitize-content';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { savePostAsync } from '../../../../actions';
import { useServerRequest } from '../../../../hooks';

const PostFormContainer = ({
	className,
	post: { id, title, imageUrl, content, publishedAt },
}) => {
	const [imageUrlValue, setImageUrlValue] = useState(imageUrl);
	const [titleValue, setTitleValue] = useState(title);
	const contentRef = useRef(null);

	useLayoutEffect(() => {
		setImageUrlValue(imageUrl);
		setTitleValue(title);
	}, [imageUrl, title]);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const requestServer = useServerRequest();

	const onSave = () => {
		const newContent = sanitizeContent(contentRef.current.innerHTML);

		const dispatched = dispatch(
			savePostAsync(requestServer, {
				id,
				imageUrl: imageUrlValue,
				title: titleValue,
				content: newContent,
			}),
		);

		if (dispatched && typeof dispatched.then === 'function') {
			dispatched.then(({ id }) => navigate(`/post/${id}`));
		} else {
			navigate(`/post/${id}`);
		}
	};

	const prevIdRef = useRef(id);

	useEffect(() => {
		if (prevIdRef.current !== id && id) {
			navigate(`/post/${id}`);
		}
		prevIdRef.current = id;
	}, [id, navigate]);

	const onImageChange = ({ target }) => setImageUrlValue(target.value);
	const onTitleChange = ({ target }) => setTitleValue(target.value);

	return (
		<div className={className}>
			<Input
				value={imageUrlValue}
				placeholder="Изображение..."
				onChange={onImageChange}
			/>
			<Input
				value={titleValue}
				placeholder="Заголовок статьи..."
				onChange={onTitleChange}
			/>
			<SpecialPanel
				id={id}
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

		min-height: 80px;
		border: 1px solid black;
		border-radius: 10px;
		padding: 15px;
	}
`;
