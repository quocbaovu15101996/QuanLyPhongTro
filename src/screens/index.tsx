import {Navigation} from 'react-native-navigation';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import {Screens} from './Screens';

function registerScreens(): void {
  Navigation.registerComponent(Screens.Home, () => Home);
  Navigation.registerComponent(Screens.Profile, () => Profile);
}

export {registerScreens};
