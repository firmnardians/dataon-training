import React, { Fragment, useEffect, useState } from 'react';

let timeoutCache = null;

/**
 *
 * @param {import('react').InputHTMLAttributes} props
 * @return {React.JSX}
 */
const Input = ({ ...props }) => {
	return <input style={{ color: 'black', width: '50%', padding: 10, height: '30px', borderRadius: '10px' }} value={props.value} {...props} />;
};

/**
 *
 * @param {import('react').ButtonHTMLAttributes} props
 * @return {React.JSX}
 */
const Button = ({ ...props }) => {
	return (
		<button style={{ cursor: 'pointer', backgroundColor: 'dodgerblue', width: '20%', height: 40, border: 'none', borderRadius: 10 }} {...props}>
			{props.children}
		</button>
	);
};

const Todo = () => {
	const [loading, setLoading] = useState(true);
	const [value, setValue] = useState('');
	const [todos, setTodos] = useState([]);

	function setCache(data) {
		if (Array.isArray(data)) {
			localStorage.setItem('todos', JSON.stringify(data));
		}
	}

	function onTodoAdd() {
		const inputValue = value?.trim();

		if (inputValue?.length === 0) {
			alert('Value minimal 1 karakter.');
			return;
		}

		const struct = {
			todo: inputValue,
			id: +new Date(),
		};

		const dataTodo = [struct, ...todos];

		setTodos(dataTodo);
		setCache(dataTodo);

		setValue('');
	}

	function onTodoDelete(id) {
		const filterData = todos?.filter((x) => x?.id !== id);

		setTodos(filterData);
		setCache(filterData);
	}

	// component did mount
	useEffect(() => {
		const hasCache = localStorage.getItem('todos');

		if (hasCache) {
			try {
				const parse = JSON.parse(hasCache);
				setTodos(parse);
			} catch (error) {
				console.error('Failed to set the cache');
			}
		}

		clearTimeout(timeoutCache);
		timeoutCache = setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	return (
		<div>
			<div>
				<div style={{ marginBottom: 10 }}>
					<Input placeholder='Mau ngerjain apa hari ini?' value={value} onChange={(e) => setValue(e?.target?.value)} />
				</div>

				<Button onClick={() => onTodoAdd()}>Add Button</Button>
			</div>

			{loading ? (
				<h4>Loading...</h4>
			) : (
				<Fragment>
					{todos?.length > 0 ? (
						<div>
							<h4>My list:</h4>
							<ol>
								{todos?.map((item) => {
									return (
										<div key={item?.id} style={{ display: 'flex', padding: '10px 0px 10px 0px' }}>
											<li style={{ padding: '4px 0px 4px 0px' }}>{item?.todo}</li>
											<button
												onClick={() => onTodoDelete(item?.id)}
												style={{
													paddingLeft: 14,
													paddingRight: 14,
													border: 'none',
													marginLeft: 14,
													backgroundColor: 'red',
													cursor: 'pointer',
													borderRadius: 6,
												}}
											>
												<p style={{ fontSize: 14, fontWeight: 'bold', padding: 0, margin: 0 }}>Delete</p>
											</button>
										</div>
									);
								})}
							</ol>
						</div>
					) : (
						<h4>Empty Todolist.</h4>
					)}
				</Fragment>
			)}
		</div>
	);
};

export default Todo;
