import React, { useEffect, useState } from 'react';
import { fetchData, postData } from '../services/api';

const DataComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    getData();
  }, []);

  const handleSubmit = async () => {
    const newData = { name: 'New Entry' };

    try {
      const response = await postData(newData);
      console.log('Data posted successfully:', response);
    } catch (error) {
      console.log('Error posting data:', error);
    }
  };

  return (
    <div>
      <h1>Data from Backend</h1>
      {data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
      <button onClick={handleSubmit}>Add Data</button>
    </div>
  );
};

export default DataComponent;
