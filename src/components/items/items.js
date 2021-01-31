import React, { useState, useContext, useEffect } from 'react';

function Items() {
  const [items, setItems] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getItems() {
      try {
        const response = await fetch('/api/v1/items');
        console.log('response', response);
        // setItems(response.data);
        // setLoading(false);
      } catch(err) {
        console.error(`There was an error: ${err}`);
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
        <div key={items[0].id}>
          <h1>{items[0].name}</h1>
          <h1>{items[0].description}</h1>
          <h1>{items[0].price}</h1>
        </div>
      )}
    </div>
  );
}

export default Items;