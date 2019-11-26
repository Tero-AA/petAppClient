import React from 'react';
import { StatusBar } from "react-native";
import { Box, Text } from 'react-native-design-utility';

class HomeScreen extends React.Component {
  state = {}
  render() {
    return (
      < Box f={1} center>
        <StatusBar barStyle="light-content" />
        <Text>
          Home Screen
        </Text>
      </Box >
    );
  }
}

export default HomeScreen;
