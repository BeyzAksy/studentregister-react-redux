import React, { Component } from 'react';
import { Text, TextInput, Picker } from 'react-native';
import { connect } from 'react-redux';

import { Card, CardSection, Button, Spinner } from '../ortak';
import { studentChange, studentCreate } from '../actions'

class StudentCreate extends Component {
  clickSave() {
    const { isim,
      soyisim,
      ogrno,
      sube
    } = this.props;
    this.props.studentCreate({ isim, soyisim, ogrno, sube });
  }
  renderButton() {
    if (!this.props.loading) {
      return <Button onPress={this.clickSave.bind(this)}> Kaydet </Button>;
    }
    return <Spinner size="small" />;
  }

  render() {
    const { inputStyle } = styles;
    return (
      <Card>
        <CardSection>
          <TextInput
            placeholder="İsim"
            style={inputStyle}
            value={this.props.isim}
            onChangeText={isim => this.props.studentChange({ props: 'isim', value: isim })}
          />
        </CardSection>
        <CardSection>
          <TextInput
            placeholder="Soyisim"
            style={inputStyle}
            value={this.props.soyisim}
            onChangeText={soyisim => this.props.studentChange({ props: 'soyisim', value: soyisim })}
          />
        </CardSection>

        <CardSection>
          <TextInput
            placeholder="Öğrenci Numarsı"
            style={inputStyle}
            value={this.props.ogrno}
            onChangeText={ogrno => this.props.studentChange({ props: 'ogrno', value: ogrno })}
          />
        </CardSection>

        <CardSection>
        <Text>Şube</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.sube}
            onValueChange={sube => this.props.studentChange({ props: 'sube', value: sube })}
          >
            <Picker.Item label="A şubesi" value="asube" />
            <Picker.Item label="B şubesi" value="bsube" />
            <Picker.Item label="C şubesi" value="csube" />
          </Picker>
        </CardSection>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
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
const mapToStateProps = ({ studentsListResponse }) => {
  const { isim,
    soyisim,
    ogrno,
    sube,
    loading
  } = studentsListResponse;
  return { isim,
    soyisim,
    ogrno,
    sube,
    loading };
};
export default connect(mapToStateProps, { studentChange, studentCreate })(StudentCreate);
