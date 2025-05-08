import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import TodolistPage from './pages/Todolist';
import FollowersPage from './pages/Followers';

function App() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/about' element={<AboutPage />} />
			<Route path='/todolist' element={<TodolistPage />} />
			<Route path='/followers' element={<FollowersPage />} />
		</Routes>
	);
}

export default App;
