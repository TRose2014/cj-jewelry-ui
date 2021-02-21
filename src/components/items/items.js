import React, { useState, useContext, useEffect } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
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
        // <div>
        // {context.items.map((item) => (
        //   <div key={item.id}>
        //     <h1>{item.name}</h1>
        //     <h1>{item.description}</h1>
        //     <h1>{item.price}</h1>
        //     <img src={`${process.env.REACT_APP_S3_URL}/${item.name.split(' ').join('+')}`} alt={`${item.name}`} />
        //   </div>
        // ))}
        // </div>

        <div>
        <GridList cols={2.5}>
          {context.items.map((item) => (
            <GridListTile key={item.name}>
              <img src={`${process.env.REACT_APP_S3_URL}/${item.name.split(' ').join('+')}`} alt={`${item.name}`} />
              <GridListTileBar
                title={item.name}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
      )}
    </div>
  );
}

export default Items;