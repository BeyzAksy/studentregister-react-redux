import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { CardSection } from '../ortak';

class ListItem extends Component {
  render() {
    const { isim, soyisim } = this.props.ogrenci;
    return (
      <View>
        <CardSection>
          <Text>
            {isim} {soyisim}
          </Text>
        </CardSection>
      </View>
    );
  }
}

export default ListItem;
