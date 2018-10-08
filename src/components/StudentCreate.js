import React, { Component } from 'react';
import { Text, TextInput, View, Picker } from 'react-native';
import { CardSection, Button } from '../ortak';

class StudentCreate extends Component {
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
            onChangeText={soyisim => this.props.studentChange(soyisim)}
          />
        </CardSection>

        <CardSection>
          <TextInput
            placeholder="Öğrenci Numarsı"
            style={inputStyle}
            value={this.props.ogrno}
            onChangeText={ogrno => this.props.studentChange(ogrno)}
          />
        </CardSection>

        <CardSection>
        <Text>Şube</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.sube}
            onValueChange={sube => this.props.studentChange(sube)}
          >
            <Picker.Item label="A şubesi" value="asube" />
            <Picker.Item label="B şubesi" value="bsube" />
            <Picker.Item label="C şubesi" value="csube" />
          </Picker>
        </CardSection>

        <CardSection>
          <Button onPress={this.clickSave.bind(this)}> Giriş Yap </Button>
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
export default StudentCreate;
