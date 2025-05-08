import React, { useState } from 'react';
import Container from '../components/Container';

function TodoPage() {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);

    const inputStyle = {
        width: '30%',
        padding: '10px',
        marginBottom: '10px',
        boxSizing: 'border-box',
        color: 'black'
    };

    const buttonStyle = {
        width: '30%',
        padding: '10px',
        backgroundColor: inputValue.trim() ? '#007bff' : '#ccc',
        color: '#fff',
        border: 'none',
        cursor: inputValue.trim() ? 'pointer' : 'not-allowed'
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() === '') return;

        const newTodo = {
            todo: inputValue.trim(),
            id: Date.now()
        };

        setTodos([...todos, newTodo]);
        setInputValue('');
    };

    const handleDelete = (id) => {
        const updatedTodos = todos.filter((item) => item.id !== id);
        setTodos(updatedTodos);
    };

    return (
        <Container>
            <div>
                <h1>Todo List Page</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter a todo..."
                        style={inputStyle}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <br />
                    <button type="submit" style={buttonStyle} disabled={!inputValue.trim()}>
                        Add To do
                    </button>
                </form>

                <h4>My List:</h4>
                {todos.length === 0 ? (
                    <p>Empty Todolist</p>
                ) : (
                    <ul style={{ display: 'flex', flexDirection: 'column' }}>
                        {todos.map((item) => (
                            <li key={item.id} style={{ listStyleType: 'disc', marginBottom: '12px'}}>
                                {item.todo}
                                <button
                                    onClick={() => handleDelete(item.id)}
                                    style={{
                                        marginLeft: '10px',
                                        backgroundColor: 'red',
                                        color: 'white',
                                        border: 'none',
                                        padding: '4px 8px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </Container>
    );
}

export default TodoPage;