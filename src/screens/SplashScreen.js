import React from 'react';
import { Box, Text } from 'react-native-design-utility';
import { inject } from "mobx-react/native";

import OnboardingLogo from '../commons/OnboardingLogo';
import { NavigationService } from '../api/NavigationService';

@inject('currentUser')
class SplashScreen extends React.Component {
  state = {};

  componentDidMount() {
    this.checkAuth()
  }

  checkAuth = async () => {
    await this.props.currentUser.setupAuth();
  }

  render() {
    return (
      < Box f={1} center bg="white">
        <OnboardingLogo />
      </Box >
    );
  }
}

export default SplashScreen;
