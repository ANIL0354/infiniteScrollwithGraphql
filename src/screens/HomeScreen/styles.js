import {StyleSheet} from 'react-native';
import {wp, hp, normalize} from '../../theme/responsive';

export default StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  },
  item: {
    paddingVertical: hp(1.6),
    paddingHorizontal: wp(1.6),
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  safeAreaView: {
    flex: 1,
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: hp(2.2),
    paddingHorizontal: wp(2),
  },
  image: {
    width: wp(30),
    height: wp(30),
    borderRadius: wp(30 / 2),
    marginRight: hp(1.4),
  },
  name: {
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    paddingVertical: hp(2),
    maxWidth: '70%',
    paddingHorizontal: wp(1.2),
  },
  species: {
    maxWidth: '100%',
    minWidth: '50%',
    // height: hp(3),
    borderRadius: hp(1.5),
    backgroundColor: '#13988E',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: hp(0.6),
  },
  speciesText: {
    color: '#fff',
  },
  nameText: {
    fontSize: normalize(22),
    // lineHeight: hp(2.5),
    color: '#474747',
    textAlign: 'left',
    paddingBottom: hp(0.8),
  },
  emptyContainerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: normalize(15),
    textTransform: 'capitalize',
  },
});
