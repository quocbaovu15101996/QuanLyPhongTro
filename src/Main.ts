import {Navigation} from 'react-native-navigation';
import {layoutRoot} from './libs/navigation/Utils';
import {registerScreens} from './screens';

const start = () => {
  registerScreens();
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot(layoutRoot);
  });
};

export {start};
