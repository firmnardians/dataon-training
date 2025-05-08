import React, { useEffect, useState } from 'react';
import Container from '../components/Container';

function UsersPage() {
    const [allUsers, setAllUsers] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => {
                setAllUsers(data);
                const orgUsers = data.filter(user => user.website.endsWith('.org'));
                setUsers(orgUsers);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching users:', error);
                setLoading(false);
            });
    }, []);

    const handleToggle = () => {
        if (showAll) {
            const orgUsers = allUsers.filter(user => user.website.endsWith('.org'));
            setUsers(orgUsers);
        } else {
            setUsers(allUsers);
        }
        setShowAll(!showAll);
    };

    return (
        <Container>
            <div>
                <h1>{showAll ? 'All Users' : 'Users with .org Websites'}</h1>

                <button
                    onClick={handleToggle}
                    style={{
                        marginBottom: '16px',
                        padding: '8px 16px',
                        backgroundColor: '#28a745',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    {showAll ? 'Show Only .org' : 'Show All'}
                </button>

                {loading ? (
                    <p>Loading users...</p>
                ) : users.length === 0 ? (
                    <p>No users found.</p>
                ) : (
                    <table style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        marginTop: '10px'
                    }}>
                        <thead>
                            <tr style={{ backgroundColor: '#007bff', color: 'white' }}>
                                <th style={thStyle}>Name</th>
                                <th style={thStyle}>Username</th>
                                {/* <th style={thStyle}>Email</th>
                                <th style={thStyle}>Phone</th>
                                <th style={thStyle}>Company</th>
                                <th style={thStyle}>Website</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id} style={{ borderBottom: '1px solid #ddd' }}>
                                    <td style={tdStyle}>{user.name}</td>
                                    <td style={tdStyle}>{user.username}</td>
                                    {/* <td style={tdStyle}>{user.email}</td>
                                    <td style={tdStyle}>{user.phone}</td>
                                    <td style={tdStyle}>{user.company.name}</td>
                                    <td style={tdStyle}>{user.website}</td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </Container>
    );
}

const thStyle = {
    padding: '12px',
    border: '1px solid #ccc',
    textAlign: 'left'
};

const tdStyle = {
    padding: '10px',
    border: '1px solid #eee'
};

export default UsersPage;