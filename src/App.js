import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import TodolistPage from './pages/Todolist';

function App() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/about' element={<AboutPage />} />
			<Route path='/todolist' element={<TodolistPage />} />
		</Routes>
	);
}

export default App;
