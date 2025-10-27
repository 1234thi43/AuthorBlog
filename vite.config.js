import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			'/register': 'http://localhost:3001',
			'/login': 'http://localhost:3001',
			'/logout': 'http://localhost:3001',
			'/posts': 'http://localhost:3001',
			'/users': 'http://localhost:3001',
		},
	},
});
