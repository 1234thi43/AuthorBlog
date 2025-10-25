import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { PostCard, Pagination, Search } from './components';
import { PAGINATION_LIMIT } from '../../constants';
import { debounce } from './utils/debounce';
import { request } from '../../utils/request';

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const [shouldSearch, setShouldSearch] = useState(false);
	const [searchPhrase, setSearchPhrase] = useState('');

	useEffect(() => {
		request(
			`/posts?search${searchPhrase}&page=${page}&limit=${PAGINATION_LIMIT}`,
		).then(({ data: { lastPage, posts } }) => {
			setPosts(posts);
			setLastPage(lastPage);
		});
	}, [page, searchPhrase]);

	const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 2000), []);

	const onSearch = ({ target }) => {
		setSearchPhrase(target.value);
		startDelayedSearch(!shouldSearch);
	};

	return (
		<div className={className}>
			<div className="posts-and-search">
				<Search searchPhrase={searchPhrase} onChange={onSearch} />
				{posts.length > 0 ? (
					<div className="post-list">
						{posts.map(({ id, title, imageUrl, publishedAt, comments }) => (
							<PostCard
								key={id}
								id={id}
								title={title}
								imageUrl={imageUrl}
								publishedAt={publishedAt}
								commentsCount={comments.length}
							/>
						))}
					</div>
				) : (
					<div className="no-posts-found">Статьи не найдены</div>
				)}
			</div>

			{lastPage > 1 && posts.length > 0 && (
				<Pagination page={page} lastPage={lastPage} setPage={setPage} />
			)}
		</div>
	);
};

export const Main = styled(MainContainer)`
	padding: 20px;
	& .posts-and-search {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	& .post-list {
		padding: 0 0 50px 0;
		display: flex;
		flex-wrap: wrap;
	}
	& .no-posts-found {
		text-align: center;
		font-size: 18px;
		margin-top: 40px;
	}
`;
