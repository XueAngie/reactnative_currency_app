import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    marginRight: 11,
  },
  text: {
    color: '$white',
    fontSize: 16,
    paddingVertical: 10,
    fontWeight: '600',
  },
});
