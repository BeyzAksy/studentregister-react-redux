import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Header extends Component {

  render() {
    const { textStyle, viewstyle } = styles;
    return (
      <View style={viewstyle}>
        <Text style={textStyle}> {this.props.headerText} </Text>
      </View>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewstyle: {
    backgroundColor: '#f8f8f8',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    elevation: 5, //gölge için
    //android için react-native-shadow yüklenebilir
    //shadowOffSet: { widht: 0, height: 2 },
    //shadowOpacity: 0.2
  }
};

export default Header;
