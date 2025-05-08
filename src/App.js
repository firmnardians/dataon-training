import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import TodoChris from './pages/TodoChris';

function App() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/about' element={<AboutPage />} />
			<Route path='/todo-chris' element={<TodoChris />} />
		</Routes>
	);
}

export default App;
