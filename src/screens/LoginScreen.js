import React from 'react';
import { Box, Text } from 'react-native-design-utility';
import { TouchableOpacity, Alert, Animated } from 'react-native';


import OnboardingLogo from '../commons/OnboardingLogo';
import LoginButton from '../commons/LoginButton'

const BoxAnimated = Animated.createAnimatedComponent(Box);

class LoginScreen extends React.Component {
  state = {
    opacity: new Animated.Value(0),
    position: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.parallel([this.positionAnim(), this.opacityAnin()]).start();
  }

  opacityAnin = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 200,
      delay: 150,
    }).start()
  };

  positionAnim = () => {
    Animated.timing(this.state.position, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start()
  }

  onGooglePress = () => {
    Alert.alert('Google OAuth')
  };

  onFacebookPress = () => {
    Alert.alert('Facebook OAuth')
  };

  render() {
    const { opacity } = this.state;

    const logoTranslate = this.state.position.interpolate({
      inputRange: [0, 1],
      outputRange: [150, 0],
    })
    return (
      < Box f={1} center bg="white">
        <BoxAnimated f={1} style={{
          transform: [{
            translateY: logoTranslate,
          }]
        }}>
          <Box f={1} center>
            <OnboardingLogo />
          </Box>
        </BoxAnimated>
        <BoxAnimated f={0.5} w="100%" style={{ opacity }}>
          <LoginButton onPress={this.onGooglePress} type="google"> Continue with Google</LoginButton>
          <LoginButton onPress={this.onFacebookPress} type="facebook"> Continue with Facebook</LoginButton>
        </BoxAnimated>
      </Box >
    );
  }
}

export default LoginScreen;
