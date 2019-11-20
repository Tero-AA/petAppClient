import React from 'react';
import { Box, Text } from 'react-native-design-utility';
import { Image } from 'react-native';

import { images } from '../constants/images';

const OnboardingLogo = () => {
  return (
    < Box center>
      <Box>
        <Image source={images.logo} />
      </Box>
      <Box>
        <Text size="xl" color="redLightest">PetApp</Text>
      </Box>
    </Box >
  )
};

export default OnboardingLogo;