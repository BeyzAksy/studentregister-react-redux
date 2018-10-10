import _ from 'lodash';
import React, { Component } from 'react';
import { View, ListView } from 'react-native';
import { connect } from 'react-redux';

import { studentListData } from '../actions';
import ListItem from './ListItem';

class StudentsList extends Component {
  componentWillMount() {
    this.props.studentListData();
    this.createDataSource(this.props);
  }
  componentWillReceiveProps(nextProps) {
  this.createDataSource(nextProps);
}
  createDataSource({ studentsArray }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(studentsArray);
  }
  renderRow(ogrenci) {
    return <ListItem ogrenci={ogrenci} />;
  }
  render() {
    console.log(this.props.studentsArray);
    return (
      <View>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}
const mapStateToProps = ({ studentDataResponse }) => {
  const studentsArray = _.map(studentDataResponse, (val, uid) => {
    return { ...val, uid }; // { isim: 'Ayşe', syoisim: 'asda', sube: 'asube', uid: 'kq9aasdfdf'  }
  });
  return { studentsArray };
};
export default connect(mapStateToProps, { studentListData })(StudentsList);
