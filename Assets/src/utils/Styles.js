import {StyleSheet} from 'react-native';
const primaryColor = 'black';
const secondaryColor = 'red';

const Btns = StyleSheet.create({
  Login: {
    backgroundColor: 'purple',
    paddingVertical: 15,
    textAlign: 'center',
    marginHorizontal: 22,
    borderRadius: 12,
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginVertical: 5,
  },
  Signup: {
    backgroundColor: 'purple',
    paddingVertical: 15,
    textAlign: 'center',
    marginHorizontal: 22,
    borderRadius: 12,
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginVertical: 5,
  },
});

const inputs = StyleSheet.create({
  textinput: {
    backgroundColor: 'lightgrey',
    width: 330,
    left: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
  Paper: {
    height: 50,
    marginHorizontal: 20,
    marginVertical: 7,
  },
});
const texts = StyleSheet.create({
  Con: {
    fontSize: 35,
    fontFamily: 'DancingScript-VariableFont_wght',
    color: 'purple',
    textAlign: 'center',
  },
});

export {primaryColor, secondaryColor, Btns, inputs, texts};
