import React from 'react';
import { StatusBar } from "react-native";
import { Box, Text } from 'react-native-design-utility';

class ListScreen extends React.Component {
  state = {}
  render() {
    return (
      < Box f={1} center>
        <StatusBar barStyle="light-content" />
        <Text>
          Esta zona esta en construcción, ¡Dispculpanos por la molestia!
        </Text>
      </Box >
    );
  }
}

export default ListScreen;
