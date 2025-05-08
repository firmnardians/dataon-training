import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import Todolist from './pages/Todolist';
import TestAPI from './pages/TestAPI';

function App() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/about' element={<AboutPage />} />
			<Route path='/todolist' element={<Todolist />} />
			<Route path='/testapi' element={<TestAPI />} />
		</Routes>
	);
}

export default App;
