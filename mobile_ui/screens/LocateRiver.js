import React from 'react';
import {Text, Button} from 'react-native';
import {ScreenContainer} from '../styles/screenContainer';
import LocateRiverComponent from '../components/LocateRiverComponent';

export const LocateRiver = ({navigation}) => {
  return (
    <ScreenContainer>
      <Text>Locate River Screen</Text>
      <LocateRiverComponent />
      <Button
        title="select river"
        onPress={() => navigation.push('ChooseRiver')}
      />
    </ScreenContainer>
  );
};
