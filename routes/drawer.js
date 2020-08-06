import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import LoginStack from './loginStack';
import RssStack from './rssStack';
import NewsFeedStack from './newsfeedStack';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  About: {
    screen: AboutStack,
  },
  Forum: {
    screen: HomeStack,
  },
  Login: {
    screen: LoginStack,
  },
  Rss:{
    screen: RssStack,
  },
  NewsFeed: {
    screen: NewsFeedStack,
  },
});

export default createAppContainer(RootDrawerNavigator);