import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Screen, Icon, Text, Button} from '@components';

import {RootStackParamList} from '../../../routes/router';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;
export function SuccessScreen({route, navigation}: ScreenProps) {
  function returnToBegin() {
    navigation.goBack();
  }

  return (
    <Screen>
      <Icon size={48} {...route.params.icon} />
      <Text preset="headingLarge" mt="s24">
        {route.params.title}
      </Text>
      <Text preset="paragraphLarge" mt="s16">
        {route.params.description}
      </Text>
      <Button
        onPress={returnToBegin}
        title="voltar ao início"
        marginTop="s40"
      />
    </Screen>
  );
}
