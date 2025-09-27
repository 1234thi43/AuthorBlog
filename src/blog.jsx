// import viteLogo from '/vite.svg'
import { Routes, Route, Link } from 'react-router-dom';
import { Header, Footer } from './components';
import { Authorization, Registration, Users, Post } from './pages';
import styled from 'styled-components';
import './index.css';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './actions';
import { Modal } from './components';

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 100%;
	width: 1000px;
	background-color: white;
	margin: 0 auto;
`;

const Page = styled.div`
	padding: 120px 0 20px;
`;

function Blog() {
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem('userData');

		if (!currentUserDataJSON) {
			return;
		}

		const currentUserData = JSON.parse(currentUserDataJSON);

		dispatch(
			setUser({
				...currentUserData,
				id: String(currentUserData.id),
			}),
		);
	}, [dispatch]);

	return (
		<AppColumn>
			<Header />
			<Page>
				<Routes>
					<Route path="/" element={<div>Главная страница</div>} />
					<Route path="/login" element={<Authorization />} />
					<Route path="/register" element={<Registration />} />
					<Route path="/users" element={<Users />} />
					<Route path="/post" element={<div>Новая статья</div>} />
					<Route path="/post/:id" element={<Post />} />
					<Route path="/post/:id/edit" element={<Post />} />
					{/* <Route path="/post/:id/*" element={<div>Страница ошибки</div>} /> */}
					<Route path="*" element={<div>Страница ошибки</div>} />
				</Routes>
			</Page>
			<Footer />
			<Modal />
		</AppColumn>
	);
}

export default Blog;
