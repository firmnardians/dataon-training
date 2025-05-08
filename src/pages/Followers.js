import React from "react";
import Container from '../components/Container';

function FollowersPage() {

    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    if (users.length === 0) {
        return <p>Loading...</p>;
    }

    return (
        <Container>
            <div>
                <h1>List Followers</h1>
            </div>
            <div>
                <ul style={{ display: 'block' }}>
                    {users
                        .filter(user => user.website.includes('.org'))
                        .map(user => (
                            <li key={user.id}>
                                Username: {user.username}
                                <br />
                                Name: {user.name}
                                <br />
                                <br />
                            </li>
                        ))}
                </ul>
            </div>
        </Container>
    );
}

export default FollowersPage;