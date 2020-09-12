import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
  row: {
    marginTop: 24,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  buttonCard: {
    alignItems: 'center',
    marginHorizontal: 12,
    justifyContent: 'center',
    width: 72,
    height: 72,
    backgroundColor: colors.astral,
    borderRadius: 12,
  },
  labelButton: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
