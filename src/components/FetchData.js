import React, { useState, useEffect } from 'react';

const FetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching data from an API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty array means the effect runs once when the component mounts

  if (loading) return <p>Loading data...</p>;

  return (
    <div>
      <h2>Fetched Data</h2>
      <ul>
        {data.slice(0, 5).map(item => (
          <li key={item.id}>
            <strong>{item.title}</strong>: {item.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
