import React, { useState, useContext, useEffect } from 'react';
import { ItemContext } from '../../context/itemsContext';

function Items() {
  const [loading, setLoading] = useState(true);
  const context = useContext(ItemContext);

  useEffect(() => {
    context.getItems();
    setLoading(false);
  }, []);


  return (
    <div>
      {loading ? (
        <div>
          <h1>Nothing to display</h1>
        </div>
      ) : (
        <div>
        {context.items.map((item) => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <h1>{item.description}</h1>
            <h1>{item.price}</h1>
            <img src={`${process.env.REACT_APP_S3_URL}/${item.name.split(' ').join('+')}`} alt={`${item.name}`} />
          </div>
        ))}
        </div>
      )}
    </div>
  );
}

export default Items;