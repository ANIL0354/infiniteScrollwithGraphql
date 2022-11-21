import {StyleSheet} from 'react-native';
import {hp, wp} from '../../theme/responsive';

// styles
export default styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    height: hp(4),
    marginVertical: hp(3),
  },
  searchBar: {
    flexDirection: 'row',
    width: '95%',
    backgroundColor: '#d9dbda',
    borderRadius: wp(4),
    alignItems: 'center',
  },
  input: {
    marginLeft: hp(1),
    width: '90%',
    color: '#000',
    textAlignVertical: 'top',
    minHeight: hp(6),
  },
});
