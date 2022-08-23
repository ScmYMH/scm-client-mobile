import {
  Button,
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import CalendarMonthIcon from 'react-native-vector-icons/MaterialIcons';
import {Table, TableWrapper, Row, Rows} from 'react-native-table-component';
const AppMain = ({}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const CONTENT = {
    tableHead: [
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 12, fontWeight: 'bold'}}>번호</Text>
      </View>,
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 12, fontWeight: 'bold'}}>제목</Text>
      </View>,
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 12, fontWeight: 'bold'}}>작성자</Text>
      </View>,
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 12, fontWeight: 'bold'}}>등록일</Text>
      </View>,
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 12, fontWeight: 'bold'}}>조회건수</Text>
      </View>,
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 12, fontWeight: 'bold'}}>메일발송그룹</Text>
      </View>,
      <View style={{alignItems: 'center', height: 25, marginTop: 10}}>
        <Text style={{fontSize: 12, fontWeight: 'bold'}}>메일발송여부</Text>
      </View>,
    ],
    tableData: [
      [
        <View
          style={{
            backgroundColor: '#ced6e0',
            margin: 0,
            height: 38,
            alignItems: 'center',
            alignContent: 'center',
          }}>
          <Text style={{marginTop: 8}}>등록일</Text>
        </View>,

        <TouchableOpacity style={{alignItems: 'flex-end'}}>
          <CalendarMonthIcon
            name="calendar-today"
            size={20}
            onPress={() => setOpen(true)}></CalendarMonthIcon>
        </TouchableOpacity>,

        <TouchableOpacity style={{alignItems: 'flex-end'}}>
          <CalendarMonthIcon
            name="calendar-today"
            size={20}
            onPress={() => setOpen(true)}></CalendarMonthIcon>
        </TouchableOpacity>,
        <View
          style={{
            backgroundColor: '#ced6e0',
            margin: 0,
            height: 38,
            alignItems: 'center',
            alignContent: 'center',
          }}>
          <Text style={{marginTop: 8}}>제목</Text>
        </View>,
        <TextInput style={{width: 1500}}></TextInput>,
      ],
    ],
    row: {height: 220},
  };

  function _onPressButton() {
    Alert.alert('You tapped the button!');
  }
  return (
    <View>
      <Text style={{fontWeight: 'bold', padding: 10, color: '#003366'}}>
        ● 공지문 작성
      </Text>
      <View style={{alignItems: 'flex-end', marginRight: 10}}>
        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
          <TouchableOpacity style={styles.button_1} onPress={_onPressButton}>
            <Text> 조회</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_2} onPress={_onPressButton}>
            <Text>신규등록</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          marginLeft: 20,
          marginTop: 20,
          flexDirection: 'row',
          borderBottomColor: 'black',
        }}></View>
      <Table
        borderStyle={{borderWidth: 1}}
        style={{marginLeft: 10, marginRight: 10, height: 40}}>
        <TableWrapper style={{alignContent: 'center'}}>
          <Rows
            widthArr={[60, 70, 70, 50, 122]}
            data={CONTENT.tableData}
            style={{alignContent: 'center'}}
          />
        </TableWrapper>
      </Table>
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <Table
        borderStyle={{borderWidth: 1}}
        style={{marginTop: 50, marginLeft: 10, marginRight: 10}}>
        <Row
          style={{backgroundColor: 'lightgray'}}
          widthArr={[35, 35, 45, 45, 52, 80, 80]}
          data={CONTENT.tableHead}
        />
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  button_1: {
    width: 50,
    height: 30,
    backgroundColor: 'gray',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_2: {
    width: 70,
    height: 30,
    backgroundColor: 'gray',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});

export default AppMain;
