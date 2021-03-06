import { Platform } from 'react-native';

export default {
  statusBar: {
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  },
  flex: {
    flex: 1
  },
  verticalCenter: {
    flex: 1,
    justifyContent: 'center',
    height: '100%'
  },
  show: {
    display: 'flex'
  },
  hidden: {
    display: 'none'
  },
  column: {
    flex: 1,
    flexDirection: 'column'
  },
  rowSpaceBetween: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
};
