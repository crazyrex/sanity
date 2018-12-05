import Icon from 'part:@sanity/base/plugin-icon'
import {route} from 'part:@sanity/base/router'
import RootContainer from './containers/Root'

export default {
  router: route('/'),
  title: 'Welcome',
  name: 'welcome',
  icon: Icon,
  component: RootContainer
}
