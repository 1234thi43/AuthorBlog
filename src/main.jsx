import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Blog from './blog';
import './index.css';

createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<BrowserRouter>
			<Blog />
		</BrowserRouter>
	</Provider>,
);
