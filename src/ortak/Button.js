import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textSytle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle} >
      <Text style={textSytle}> {children} </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1, //bulunduğun view'i tamamen kapla.
    alignSelf: 'stretch', //kendini genişlet.
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5

  },
  textSytle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600', //bold yapıyor.
    paddingTop: 10,
    paddingBottom: 10
  }
};

export { Button };
