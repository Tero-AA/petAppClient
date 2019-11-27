import React from 'react';
import { StatusBar, FlatList, TouchableOpacity } from "react-native";
import { Box, Text } from 'react-native-design-utility';
import { inject, observer } from 'mobx-react/native';
import CartItem from '../components/CartItem';
import { theme } from '../constants/theme';




@inject('shoppingCartStore')
@observer
class ShoppingCartScreen extends React.Component {
  static navigationOptions = {
    title: 'Carrito de compras',
  }
  state = {};

  renderItem = ({ item }) => <CartItem product={item} />

  keyExtractor = item => String(item.id)

  renderList = () => {
    const { shoppingCartStore } = this.props;

    if (shoppingCartStore.totalProducts === 0) {
      return (
        <Box center f={1}>
          <Text>
            El carrito está vacio
          </Text>
        </Box>
      )
    }

    return (
      <FlatList
        data={shoppingCartStore.productList}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        extraData={shoppingCartStore}
      />
    )
  }

  renderCheckoutBtn = () => {
    const { shoppingCartStore } = this.props;

    if (shoppingCartStore.totalProducts === 0) {
      return null;
    }

    return (
      <Box bg="white" p="xs">
        <TouchableOpacity>
          <Box h={45} bg="redLightest" center radius={6} position="relative">
            <Text bold color="white">
              Completar la orden
            </Text>

            <Box
              position="absolute"
              bg="redLight"
              radius={6}
              center
              p="xs"
              style={{ right: theme.space.xs }}
            >
              <Text color="white" size="xs">
                ${shoppingCartStore.totalAmount}
              </Text>
            </Box>
          </Box>
        </TouchableOpacity>
      </Box>
    );
  };

  render() {
    return (
      < Box f={1}>
        <StatusBar barStyle="dark-content" />
        {this.renderList()}
        {this.renderCheckoutBtn()}
      </Box >
    );
  }
}

export default ShoppingCartScreen;