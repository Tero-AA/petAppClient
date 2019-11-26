import React from 'react';
import { StatusBar, FlatList } from "react-native";
import { Box, Text } from 'react-native-design-utility';
import CategoryCard from '../components/CategoryCard';
import { theme } from '../constants/theme';
import DealCaroussel from '../components/DealCaroussel';

const categories = [
  {
    id: 1,
    title: 'Perros',
    image: require('../../assets/img/perro.png'),
  },
  {
    id: 2,
    title: 'Salud',
    image: require('../../assets/img/medicina.png'),
  },
  {
    id: 3,
    title: 'Gatos',
    image: require('../../assets/img/gato.png'),
  },
  {
    id: 4,
    title: 'Juguetes',
    image: require('../../assets/img/hueso.png'),
  },
];

const NUM_COLUMNS = 2;

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'PetApp'
  }
  state = {};

  renderItem = ({ item, index }) => {
    let style = {};

    if (index % NUM_COLUMNS !== 0) {
      style.borderLeftWidth = 2;
      style.borderLeftColor = theme.color.greyLighter;
    }
    return (
      <Box w={1 / NUM_COLUMNS} bg="white" h={120} style={style}>
        <CategoryCard {...item} />
      </Box>
    );
  };

  keyExtractor = (item) => String(item.id);

  separator = () => <Box h={2} bg="greyLighter" />

  render() {
    return (
      < Box f={1}>
        <StatusBar barStyle="light-content" />
        <Box h={250} bg="white" w="100%">
          <DealCaroussel />
        </Box>
        <Box f={1} p={10}>
          <FlatList
            data={categories}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
            numColumns={NUM_COLUMNS}
            ItemSeparatorComponent={this.separator}
          />
        </Box>
      </Box >
    );
  }
}

export default HomeScreen;
