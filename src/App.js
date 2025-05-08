import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import TodoPage from './pages/Todo';
import UsersPage from './pages/Users';

function App() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/about' element={<AboutPage />} />
			<Route path='/todo' element={<TodoPage />} />
			<Route path='/users' element={<UsersPage />} />
		</Routes>
	);
}

export default App;
