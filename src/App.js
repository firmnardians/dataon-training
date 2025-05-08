import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import TodoChris from './pages/TodoChris';
import Users from './pages/Users';

function App() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/about' element={<AboutPage />} />
			<Route path='/todo-chris' element={<TodoChris />} />
			<Route path='/users' element={<Users />} />
		</Routes>
	);
}

export default App;
