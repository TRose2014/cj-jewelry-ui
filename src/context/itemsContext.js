import React from 'react';
import axios from 'axios';

export const ItemContext = React.createContext();

const API = process.env.REACT_APP_API;

class ItemProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      getItems:  this.getItems,
    };
  }

  getItems = async() => {
    const url = `${API}/api/v1/items`;
    try {
      const response = await axios.get(url);
      console.log('response', response.data.results);
      this.setState({items: response.data.results })
    } catch (e) {
      console.log(`There was an error ${e}`);
    }
  }


  render() {
    return (
      <ItemContext.Provider value={this.state}>
        {this.props.children}
      </ItemContext.Provider>
    );
  }
}

export default ItemProvider;