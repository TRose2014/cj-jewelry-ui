import React, { useState, useContext, useEffect } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { ItemContext } from '../../context/itemsContext';

function Items() {
  const [loading, setLoading] = useState(true);
  // const [defaultImage, setdefaultImage] = `${process.env.REACT_APP_S3_URL}/Default`;
  const context = useContext(ItemContext);

  useEffect(() => {
    context.getItems();
    setLoading(false);
  }, []);

  const handleImageError = e => { 
    e.target.src = `${process.env.REACT_APP_S3_URL}/Default`;
    e.target.alt = 'Default Image';
  }

  const styles = {
    display: 'flex',
    margin: '7%'
  };

  return (
    <div>
      {loading ? (
        <div>
          <h1>Nothing to display</h1>
        </div>
      ) : (

        <div style={styles}>
        <GridList cellHeight={160} cols={3}>
          {context.items.map((item) => (
            <GridListTile key={item.name} cols={1}>
              <img onError={handleImageError} src={`${process.env.REACT_APP_S3_URL}/${item.name.split(' ').join('+')}`} alt={`${item.name}`} />
            </GridListTile>
          ))}
        </GridList>
      </div>

      )}
    </div>
  );
}

export default Items;