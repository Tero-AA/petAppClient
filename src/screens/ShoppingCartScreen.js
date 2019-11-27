import React from 'react';
import { StatusBar } from "react-native";
import { Box, Text } from 'react-native-design-utility';
import { inject } from 'mobx-react/native';


@inject('shoppingCartStore')
class ShoppingCartScreen extends React.Component {
  static navigationOptions = {
    title: 'Carrito de compras',
  }
  state = {};

  renderList = () => {
    const { products } = this.props.shoppingCartStore;

    if (products.length === 0) {
      return (
        <Box>
          <Text>
            El carrito está vacio
          </Text>
        </Box>
      )
    }

    return products.map(product => (
      <Box key={product.id} dir="row" align="center">
        <Text mr="sm">{product.name}</Text>
        <Text>Cantidad: {product.cartQty}</Text>
      </Box>
    ))
  }
  render() {
    return (
      < Box f={1} center>
        <StatusBar barStyle="dark-content" />
        {this.renderList()}
      </Box >
    );
  }
}

export default ShoppingCartScreen;