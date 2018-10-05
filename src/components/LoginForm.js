import React, { Component } from 'react';
import { TextInput, Alert } from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';

import { Button, Card, CardSection, Spinner } from '../ortak';
import { emailChanged, passwordChanged } from '../actions';

class LoginForm extends Component {
  state ={ email: '', password: '', loading: false }

  clickLogin() {
    this.setState({ loading: true });
    const { email, password } = this.state;

    if (email === '' || password === '') {
      this.setState({ loading: false });
      Alert.alert(
        'Mesaj',
        'Her iki alan da dolu olamalıdır.',
        [
          { text: 'tamam', onpress: () => null }
        ]
      );
    } else {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.loginSucces.bind(this))
        .catch(() => {
          firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.loginSucces.bind(this))
          .catch(this.loginFail.bind(this));
        });
    }
    }


  loginSucces() {
    console.log('başarılı');
    this.setState({ loading: false });
  }

  loginFail() {
    console.log('başarısız');
    this.setState({ loading: false });
    Alert.alert(
      'Mesaj',
      'Kullanıcı adı veya şifreniz hatalı.',
      [
        { text: 'tamam', onpress: () => null }
      ]
    );
  }

  renderButton() {
    if (!this.state.loading) {
      return <Button onPress={this.clickLogin.bind(this)}> Giriş Yap </Button>;
    }
    return <Spinner size="small" />;
  }

  render() {
    console.log('response-email' + this.props.email);
    console.log('response-password' + this.props.password);
    const { inputStyle } = styles;
    return (
      <Card>
        <CardSection>
          <TextInput
            placeholder="E-mail"
            style={inputStyle}
            value={this.props.email}
            onChangeText={email => this.props.emailChanged(email)}
          />
        </CardSection>

        <CardSection>
          <TextInput
            secureTextEntry
            placeholder="Password"
            style={inputStyle}
            value={this.props.password}
            onChangeText={password => this.props.passwordChanged(password)}
          />
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
const mapStateToProps = ({ kimlikdogrulamaResponse }) => {
  const { email, password } = kimlikdogrulamaResponse;
  return {
    email,
    password
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
