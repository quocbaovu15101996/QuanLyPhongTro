import {LayoutRoot, Navigation} from 'react-native-navigation';
import { Screens } from '../../screens/Screens';

const layoutAuthenticate: LayoutRoot = {
  root: {
    stack: {
      id: "StackLogin",
      children: [
        {
          component: {
            name: Screens.Login,
            options: {
              topBar: {
                visible: false,
                height: 0,
              },
              statusBar: {
                visible: false,
                drawBehind: false,
              },
            },
          },
        },
      ],
    },
  },
};

export function startLogin(): void {
  Navigation.setRoot(layoutAuthenticate);
}

const layoutRoot: LayoutRoot = {
  root: {
    bottomTabs: {
      id: 'BOTTOM_TABS_LAYOUT',
      children: [
        {
          stack: {
            id: 'HOME_TAB',
            children: [
              {
                component: {
                  id: 'HOME_SCREEN',
                  name: 'home_screen',
                },
              },
            ],
            options: {
              bottomTab: {
                testID: 'HOME_SCREEN_TAB',
                text: 'Trang chủ',
                selectedTextColor: '#009FE0',
                icon: require('../../../asset/bottomTabs/home.png'),
                selectedIcon: require('../../../asset/bottomTabs/selected_home.png'),
              },
            },
          },
        },
        {
          stack: {
            id: 'PROFILE_TAB',
            children: [
              {
                component: {
                  id: 'PROFILE_SCREEN',
                  name: 'profile_screen',
                },
              },
            ],
            options: {
              bottomTab: {
                testID: 'PROFILE_SCREEN_TAB',
                text: 'Cá nhân',
                selectedTextColor: '#009FE0',
                icon: require('../../../asset/bottomTabs/me.png'),
                selectedIcon: require('../../../asset/bottomTabs/selected_me.png'),
              },
            },
          },
        },
      ],
    },
  },
};

export function startApp(): void {
  Navigation.setRoot(layoutRoot);
}