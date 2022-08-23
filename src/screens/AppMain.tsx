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
const AppMain = ({}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

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
            <Text>조회</Text>
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
        }}>
        <View style={{backgroundColor: 'lightgray', width: 50, height: 30}}>
          <Text style={{textAlign: 'center'}}>등록일</Text>
        </View>
        <TextInput></TextInput>
        <TouchableOpacity>
          <CalendarMonthIcon
            name="calendar-today"
            size={20}
            onPress={() => setOpen}></CalendarMonthIcon>
        </TouchableOpacity>
      </View>

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
