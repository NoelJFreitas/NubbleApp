import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';

const authentication = true;

export function Router() {
  return (
    <NavigationContainer>
      {authentication ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
