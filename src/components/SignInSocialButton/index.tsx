import React from 'react';
import { View } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

import { Button, ImageContainer, Text } from './styles';

interface Props extends RectButtonProps {
  title: string;
  Svg: React.FC<SvgProps>
}

export const SignInSocialButton: React.FC<Props> = ({title, Svg}) => {
  return (
    <Button>
      <ImageContainer>
        <Svg></Svg>
      </ImageContainer>
      <Text>
        {title}
      </Text>
    </Button>
  );
}