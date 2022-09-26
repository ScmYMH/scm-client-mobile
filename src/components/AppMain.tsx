import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import CalendarMonthIcon from 'react-native-vector-icons/MaterialIcons';
import {Table, TableWrapper, Row, Rows} from 'react-native-table-component';
import DateTimePicker from 'react-native-modal-datetime-picker';
import AppHeader from './AppHeader';
import {useDispatch, useSelector} from 'react-redux';
import {
  getBidDetailInfoAsync,
  getBidInfoAsync,
  getLspGrpNmAsync,
} from '../modules/mobile/actions';
import {RootState} from '../../saga';
import {useEffect} from 'react';

const AppMain = ({navigation}: any) => {
  const [isDatePickerVisible_1, setDatePickerVisibility_1] = useState(false);
  const [isDatePickerVisible_2, setDatePickerVisibility_2] = useState(false);
  const showDatePicker_1 = () => {
    setDatePickerVisibility_1(true);
  };
  const showDatePicker_2 = () => {
    setDatePickerVisibility_2(true);
  };

  const hideDatePicker_1 = () => {
    setDatePickerVisibility_1(false);
  };
  const hideDatePicker_2 = () => {
    setDatePickerVisibility_2(false);
  };

  const [selectedDate_1, setSelectedDate_1] = useState(new Date());
  const [selectedDate_2, setSelectedDate_2] = useState(new Date());

  const handleConfirm_1 = (date: Date) => {
    setSelectedDate_1(date);

    hideDatePicker_1();
  };

  const handleConfirm_2 = (date: Date) => {
    setSelectedDate_2(date);

    hideDatePicker_2();
  };

  const [text, setText] = React.useState('');

  const CONTENT = {
    tableHead: [
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>번호</Text>
      </View>,
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>제목</Text>
      </View>,
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>작성자</Text>
      </View>,
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>등록일</Text>
      </View>,
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>메일발송그룹</Text>
      </View>,
      <View style={{alignItems: 'center', height: 25, marginTop: 10}}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>메일발송여부</Text>
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
          <Text style={{marginTop: 8, fontWeight: 'bold'}}>등록일</Text>
        </View>,

        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Text>
            {selectedDate_1.getFullYear() +
              '/' +
              (selectedDate_1.getMonth() + 1) +
              '/' +
              selectedDate_1.getDate()}
          </Text>
          <TouchableOpacity>
            <CalendarMonthIcon
              name="calendar-today"
              size={20}
              onPress={showDatePicker_1}></CalendarMonthIcon>
          </TouchableOpacity>
        </View>,
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
          }}>
          <Text>
            {selectedDate_2.getFullYear() +
              '/' +
              (selectedDate_2.getMonth() + 1) +
              '/' +
              selectedDate_2.getDate()}
          </Text>
          <TouchableOpacity style={{alignItems: 'flex-end'}}>
            <CalendarMonthIcon
              name="calendar-today"
              size={20}
              onPress={showDatePicker_2}></CalendarMonthIcon>
          </TouchableOpacity>
        </View>,
        <View
          style={{
            backgroundColor: '#ced6e0',
            margin: 0,
            height: 38,
            alignItems: 'center',
            alignContent: 'center',
          }}>
          <Text style={{marginTop: 8, fontWeight: 'bold'}}>제목</Text>
        </View>,
        <TextInput
          style={{width: 1500}}
          onChangeText={text => setText(text)}
          value={text}></TextInput>,
      ],
    ],

    row: {height: 220},
  };

  const [insdate, setInsDate] = useState([]);

  const {data: bidInfoData} = useSelector(
    (state: RootState) => state.bidInfo.bidInfoList,
  );

  const {data: bidDetailInfoData} = useSelector(
    (state: RootState) => state.bidInfo.bidDetailInfoList,
  );
  const dispatch = useDispatch();

  const onSubmitSearch = () => {
    let start_m = (selectedDate_1.getMonth() + 1).toString();
    let start_d;
    let end_m = (selectedDate_2.getMonth() + 1).toString();
    let end_d;

    if (start_m.length == 1) {
      start_m = '0' + start_m;
    }

    if (selectedDate_1.getDate().toString().length == 1) {
      start_d = '0' + selectedDate_1.getDate().toString();
    } else {
      start_d = selectedDate_1.getDate().toString();
    }

    if (end_m.length == 1) {
      end_m = '0' + end_m;
    }

    if (selectedDate_2.getDate().toString().length == 1) {
      end_d = '0' + selectedDate_2.getDate().toString();
    } else {
      end_d = selectedDate_2.getDate().toString();
    }

    const param = {
      subj: text,
      ins_start_date:
        selectedDate_1.getFullYear().toString() + start_m + start_d,

      ins_end_date: selectedDate_2.getFullYear().toString() + end_m + end_d,
    };

    dispatch(getBidInfoAsync.request(param));
  };

  function forNavagiate() {
    navigation.navigate('NewSignUp', {
      data: bidDetailInfoData,
    });
  }
  function forNavagiategggggggg() {
    navigation.navigate('NewSignUp', {});
  }

  const detailInfo = (param: any) => {
    dispatch(getBidDetailInfoAsync.request(param));
  };

  useEffect(() => {
    if (bidDetailInfoData) forNavagiate();
  }, [bidDetailInfoData]);

  return (
    <>
      <AppHeader></AppHeader>
      <ScrollView>
        <Text
          style={{
            fontWeight: 'bold',
            padding: 15,
            color: '#003366',
            fontSize: 18,
          }}>
          ● 공지문 목록
        </Text>
        <View style={{alignItems: 'flex-end', marginRight: 10}}>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <TouchableOpacity style={styles.button_1} onPress={onSubmitSearch}>
              <Text> 조회</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button_2}
              onPress={forNavagiategggggggg}>
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
              widthArr={[42, 100, 100, 30, 100]}
              data={CONTENT.tableData}
              style={{alignContent: 'center'}}
            />
          </TableWrapper>
        </Table>
        <DateTimePicker
          isVisible={isDatePickerVisible_1}
          mode="date"
          onConfirm={handleConfirm_1}
          onCancel={hideDatePicker_1}
          date={selectedDate_1}
        />
        <DateTimePicker
          isVisible={isDatePickerVisible_2}
          mode="date"
          onConfirm={handleConfirm_2}
          onCancel={hideDatePicker_2}
          date={selectedDate_2}
        />
        <ScrollView style={{marginVertical: 20}}>
          <ScrollView horizontal>
            <Table
              borderStyle={{borderWidth: 1}}
              style={{
                marginTop: 30,
                marginLeft: 10,
                marginRight: 10,
              }}>
              <Row
                style={{backgroundColor: 'lightgray'}}
                widthArr={[40, 160, 55, 140, 170, 60]}
                data={CONTENT.tableHead}
              />
              {bidInfoData
                ? bidInfoData.map((content, i) => {
                    return [
                      <TouchableOpacity
                        onPress={() => detailInfo(content.bltn_content_no)}>
                        <Row
                          data={[
                            '  ' + (i + 1),
                            ' ' + content.subj + ' ',
                            ' ' + content.ins_person_nm + ' ',
                            content.ins_date +
                              ' ' +
                              content.ins_time.substring(0, 2) +
                              ':' +
                              content.ins_time.substring(2, 4),
                            content.lsp_grp_nm,
                            '      ' + content.dw_mail_send_f,
                          ]}
                          widthArr={[40, 160, 55, 140, 170, 60]}
                          style={{
                            flex: 1,
                            borderWidth: 0.5,
                            height: 50,
                          }}
                        />
                      </TouchableOpacity>,
                    ];
                  })
                : []}
            </Table>
          </ScrollView>
        </ScrollView>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  button_1: {
    width: 50,
    height: 30,
    backgroundColor: '#A0A0A0',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_2: {
    width: 70,
    height: 30,
    backgroundColor: '#A0A0A0',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});

export default AppMain;
