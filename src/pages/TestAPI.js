import React, { useEffect, useState } from 'react';
import Container from '../components/Container';

function TestAPI() {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((data) => {
				setUsers(data);
				setIsLoading(false);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
				setIsLoading(false);
			});
	}, []);

	return (
		<Container>
			<div>
				{isLoading ? (
					<p>Loading...</p>
				) : (
					<>
						<p>Data Users:</p>
						<ol>
							{users
								.filter((user) => user.website.includes('.org'))
								.map((user) => (
									<li key={user.id}>
										<p>Name: {user.username}</p>
										<p>Email: {user.name}</p>
									</li>
								))}
						</ol>
					</>
				)}
			</div>
		</Container>
	);
}

export default TestAPI;
