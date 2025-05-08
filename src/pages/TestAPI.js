import React, { useEffect, useState } from 'react';
import Container from '../components/Container';

function TestAPI() {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(true); // State untuk loading

	useEffect(() => {
		// Fetch data dari API
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((data) => {
				setUsers(data);
				setIsLoading(false); // Set loading ke false setelah data diterima
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
				setIsLoading(false); // Set loading ke false meskipun ada error
			});
	}, []);

	return (
		<Container>
			<div>
				{isLoading ? ( // Tampilkan loading jika isLoading true
					<p>Loading...</p>
				) : (
					<>
						<p>Data Users:</p>
						<ol>
							{users
								.filter((user) => user.website.includes('.org')) // Filter email yang mengandung ".org"
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
