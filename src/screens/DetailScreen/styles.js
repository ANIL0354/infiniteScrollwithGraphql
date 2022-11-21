import {StyleSheet} from 'react-native';
import {wp, hp, normalize} from '../../theme/responsive';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(2),
    backgroundColor: '#3A8891',
  },
  text: {
    color: 'white',
    fontSize: normalize(24),
    fontWeight: 'bold',
    marginTop: hp(2),
  },
  username: {
    fontSize: normalize(18),
    fontWeight: 'bold',
    marginBottom: hp(-1),
  },
  tweetsCount: {
    fontSize: normalize(13),
  },
  tweet: {
    flexDirection: 'row',
    paddingVertical: wp(1),
    paddingHorizontal: wp(2),
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(255, 255, 255, 0.25)',
  },
  image: {
    width: wp(30),
    height: wp(30),
    borderRadius: wp(30 / 2),
    borderWidth: 1,
    borderColor: 'black',
    marginTop: wp(10),
  },
  species: {
    fontSize: normalize(15),
    color: 'black',
    marginBottom: hp(1),
  },
  details: {
    marginBottom: hp(1.5),
    fontSize: normalize(15),
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: normalize(18),
    color: '#17282F',
  },
  header: {
    alignItems: 'center',
  },
});
