import React, { Component } from 'react';
import { Text, TextInput, Picker } from 'react-native';
import { connect } from 'react-redux';

import { Card, CardSection, Button, Spinner } from '../ortak';
import { studentChange, studentCreate } from '../actions'

class StudentUpdate extends Component {
  state = { isim: '', soyisim: '', ogrno: '', sube: '' };

  componentWillMount() {
    const { isim,
      soyisim,
      ogrno,
      sube
    } = this.props.student;
      this.setState({ isim, soyisim, ogrno, sube });
  }
  clickUpdate() {
    const { isim,
      soyisim,
      ogrno,
      sube
    } = this.state;

    this.props.studentCreate({ isim, soyisim, ogrno, sube });
  }

  clickDelete() {

  }
  renderButton() {
    if (!this.props.loading) {
      return <Button onPress={this.clickUpdate.bind(this)}> Güncelle </Button>;
    }
    return <Spinner size="small" />;
  }
  renderDeleteButton() {
    if (!this.props.loading) {
      return <Button onPress={this.clickDelete.bind(this)}> Sil </Button>;
    }
    return <Spinner size="small" />;
  }

  render() {
    console.log('gelen data' + this.props.student.isim);
    const { inputStyle } = styles;
    return (
      <Card>
        <CardSection>
          <TextInput
            placeholder="İsim"
            style={inputStyle}
            value={this.state.isim}
            onChangeText={isim => this.setState({ isim })}
          />
        </CardSection>
        <CardSection>
          <TextInput
            placeholder="Soyisim"
            style={inputStyle}
            value={this.state.soyisim}
            onChangeText={soyisim => this.setState({ soyisim })}
          />
        </CardSection>

        <CardSection>
          <TextInput
            placeholder="Öğrenci Numarsı"
            style={inputStyle}
            value={this.state.ogrno}
            onChangeText={ogrno => this.setState({ ogrno })}
          />
        </CardSection>

        <CardSection>
        <Text>Şube</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.state.sube}
            onValueChange={sube => this.setState({ sube })}
          >
            <Picker.Item label="A şubesi" value="asube" />
            <Picker.Item label="B şubesi" value="bsube" />
            <Picker.Item label="C şubesi" value="csube" />
          </Picker>
        </CardSection>

        <CardSection>
          {this.renderButton()}
        </CardSection>

        <CardSection>
          {this.renderDeleteButton()}
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
  const { loading } = studentsListResponse;
  return { loading };
};
export default connect(mapToStateProps, { studentChange, studentCreate })(StudentUpdate);
