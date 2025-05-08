import React, { useState } from 'react';
import Container from '../components/Container';

function Todolist() {
	const [todos, setTodos] = useState([]);
	const [task, setTask] = useState('');

	const addTodo = () => {
		if (task.trim() === '') {
			alert('Task cannot be empty!');
			return;
		}
		setTodos([...todos, { id: Date.now(), text: task }]);
		setTask('');
	};

	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	return (
		<Container>
			<div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
				<h2>Todolist</h2>
				<input type="text" placeholder="Enter your task" style={{ width: '100%', padding: '10px', backgroundColor: '#f9f9f9', color: '#000' }} value={task} onChange={(e) => setTask(e.target.value)} />
				<button style={{ width: '100%', padding: '10px', backgroundColor: '#007BFF', color: '#fff' }} onClick={addTodo}>Add Todo</button>
				<button style={{ width: '100%', padding: '10px', backgroundColor: '#6c757d', color: '#fff' }} onClick={() => setTodos([])}>Reset Todos</button>
			</div>
			<div style={{ marginTop: '20px' }}>
				<h3>My List:</h3>
				{todos.length === 0 ? (
					<p>Empty Todolist.</p>
				) : (
					<ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
						{todos.map((todo) => (
							<li key={todo.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '5px' }}>
								<span>{todo.text}</span><button style={{ padding: '5px 10px', backgroundColor: '#FF4D4D', color: '#fff', border: 'none', cursor: 'pointer' }}onClick={() => deleteTodo(todo.id)}>Delete</button>
							</li>
						))}
					</ul>
				)}
			</div>
		</Container>
	);
}

export default Todolist;
