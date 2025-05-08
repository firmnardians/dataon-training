import React, { useState, useEffect } from 'react';
import Container from '../components/Container';
import { v4 as uuidv4 } from 'uuid';

function Fetchapi() {
  const [ArrayData, setData] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false); 
      });
  }, []);

  const filteredData = ArrayData.filter((user) => user.website.includes('.org'));

  return (
    <Container>
      <div className="mx-2">
        <p>Daftar list user email .org:</p>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <ol>
            {filteredData.map((user) => (
              <li key={uuidv4()}>
                {user.username} - {user.name}
              </li>
            ))}
          </ol>
        )}
      </div>
    </Container>
  );
}

export default Fetchapi;
