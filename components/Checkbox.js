import React, {Component} from 'react';
import {
    StyleSheet,
    ScrollView,
    View, Dimensions
} from 'react-native';
import CheckBox from 'react-native-check-box';
import keys from './keys.json';
import Toast from 'react-native-easy-toast';

const { width, height } = Dimensions.get('window');
const checkBoxWidth = width * 0.8;
const checkBoxHeight = height * 0.4;

export default class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: []
    }
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    this.setState({
      dataArray: keys
    })
  }

  onClick(data) {
    data.checked = !data.checked;
    let msg=data.checked? 'you checked ':'you unchecked '
    this.toast.show(msg+data.name);
  }

  renderView() {
    if (!this.state.dataArray || this.state.dataArray.length === 0)return;
    let len = this.state.dataArray.length;
    let views = [];
    for (let i = 0, l = len - 2; i < l; i += 2) {
      views.push(
        <View key={i}>
          <View style={styles.item}>
            {this.renderCheckBox(this.state.dataArray[i])}
            {this.renderCheckBox(this.state.dataArray[i + 1])}
          </View>
          <View style={styles.line}/>
        </View>
      )
    }
    views.push(
      <View key={len - 1}>
        <View style={styles.item}>
          {len % 2 === 0 ? this.renderCheckBox(this.state.dataArray[len - 2]) : null}
          {this.renderCheckBox(this.state.dataArray[len - 1])}
        </View>
      </View>
    )
    return views;

  }

  renderCheckBox(data) {
    let leftText = data.name;
    return (
      <CheckBox
        style={{flex: 1, padding: 10}}
        onClick={() => this.onClick(data)}
        isChecked={data.checked}
        leftText={leftText}
        leftTextStyle={styles.leftText}
        checkBoxColor='white'
      />);
  }

  render() {
    return (
      <View style={styles.checkBox}>
        <ScrollView>
          {this.renderView()}
        </ScrollView>
        <Toast ref={e=>{this.toast=e}}/>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  checkBox: {
    backgroundColor: '#3A4357',
    marginTop:30,
    height: checkBoxHeight,
    width: checkBoxWidth,
    borderRadius: 10,
  },
  item: {
    flexDirection: 'row',
  },
  line: {
    flex: 1,
    height: 0.3,
    backgroundColor: 'darkgray',
  },
  leftText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
})
