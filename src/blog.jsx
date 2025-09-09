// import viteLogo from '/vite.svg'
import { Routes, Route, Link } from 'react-router-dom';
import { Header } from './components';
import styled from 'styled-components';
import './index.css';

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 100%;
	width: 1000px;
	background-color: white;
	margin: 0 auto;
`;

const Content = styled.div`
	padding: 120px 0px;
	height: 2000px;
`;

const H2 = styled.h2`
	text-align: center;
`;

const Footer = () => <div>Футер страницы</div>;

function Blog() {
	return (
		<AppColumn>
			<Header />
			<Content>
				<H2>Контент страницы</H2>

				<Routes>
					<Route path="/" element={<div>Главная страница</div>} />
					<Route path="/login" element={<div>Авторизация</div>} />
					<Route path="/register" element={<div>Регистрация</div>} />
					<Route path="/users" element={<div>Пользователи</div>} />
					<Route path="/post" element={<div>Новая статья</div>} />
					<Route path="/post/:postId" element={<div>Статья</div>} />
					<Route path="*" element={<div>Страница ошибки</div>} />
				</Routes>
			</Content>
			<Footer />
		</AppColumn>
	);
}

export default Blog;
