import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

function Items() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getItems() {
      const url = 'http://localhost:3200/api/v1/items';
      try {
        const response = await axios.get(url);
        console.log('response', response.data.results);
        setItems(response.data.results);
        setLoading(false);
      } catch (e) {
        console.log(`There was an error ${e}`);
      }
    }
    getItems();
  }, []);


  return (
    <div>
      {loading ? (
        <div>
          <h1>Nothing to display</h1>
        </div>
      ) : (
        <div>
        {items.map((item) => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <h1>{item.description}</h1>
            <h1>{item.price}</h1>
          </div>
        ))}
        </div>
      )}
    </div>
  );
}

export default Items;