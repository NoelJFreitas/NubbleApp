import {useNavigation} from '@react-navigation/native';

import {RootStackParamList} from '../routes/router';

export function useResetNavigationSuccess() {
  const navigation = useNavigation();

  function reset(params: RootStackParamList['SuccessScreen']) {
    navigation.reset({
      index: 1,
      routes: [
        {name: 'LoginScreen'},
        {
          name: 'SuccessScreen',
          params,
        },
      ],
    });
  }

  return {
    reset,
  };
}
