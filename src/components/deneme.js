import React, { Component } from 'react';
import { TextInput, View, Button } from 'react-native';
import { CardSection } from '../ortak';

class deneme extends Component {
  clickSave() {

  }
  render() {
    const { inputStyle } = styles;
    return (
      <View>
        <CardSection>
          <TextInput
            placeholder="İsim"
            style={inputStyle}
            value={this.props.isim}
            onChangeText={isim => this.props.stdNameChanged(isim)}
          />
        </CardSection>

        <CardSection>
          <TextInput
            placeholder="Soyisim"
            style={inputStyle}
            value={this.props.soyisim}
            onChangeText={soyisim => this.props.stdNameChanged(soyisim)}
          />
        </CardSection>

        <CardSection>
          <TextInput
            placeholder="Öğrenci Numarsı"
            style={inputStyle}
            value={this.props.ogrno}
            onChangeText={ogrno => this.props.stdNameChanged(ogrno)}
          />
        </CardSection>
        <CardSection>
          <Button onPress={this.clickSave.bind(this)}> Kaydet </Button>
        </CardSection>
      </View>
    );
  }
}
const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  }
};
export default deneme;
