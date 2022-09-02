import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
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
} from '../modules/mobile/actions';
import {RootState} from '../../saga';
import {useNavigation} from '@react-navigation/native';
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

  const [text, setText] = React.useState('중국');

  const CONTENT = {
    tableHead: [
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 10, fontWeight: 'bold'}}>번호</Text>
      </View>,
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 10, fontWeight: 'bold'}}>제목</Text>
      </View>,
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 10, fontWeight: 'bold'}}>작성자</Text>
      </View>,
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 10, fontWeight: 'bold'}}>등록일</Text>
      </View>,
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 10, fontWeight: 'bold'}}>메일발송그룹</Text>
      </View>,
      <View style={{alignItems: 'center', height: 25, marginTop: 10}}>
        <Text style={{fontSize: 10, fontWeight: 'bold'}}>메일발송여부</Text>
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
        `${selectedDate_1}`,
        <View>
          <TouchableOpacity style={{alignItems: 'flex-end'}}>
            <CalendarMonthIcon
              name="calendar-today"
              size={20}
              onPress={showDatePicker_1}></CalendarMonthIcon>
          </TouchableOpacity>
        </View>,
        `${selectedDate_2}`,
        <TouchableOpacity style={{alignItems: 'flex-end'}}>
          <CalendarMonthIcon
            name="calendar-today"
            size={20}
            onPress={showDatePicker_2}></CalendarMonthIcon>
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
        <TextInput
          style={{width: 1500}}
          onChangeText={text => setText(text)}
          value={text}></TextInput>,
      ],
    ],

    row: {height: 220},
  };

  const [search, setSearch] = useState({
    ins_start_date: '', //selectedDate_1,
    ins_end_date: '20220829', //selectedDate_2,
    subj: '중국',
  });

  const {data: bidInfoData} = useSelector(
    (state: RootState) => state.bidInfo.bidInfoList,
  );

  const {data: bidDetailInfoData} = useSelector(
    (state: RootState) => state.bidInfo.bidDetailInfoList,
  );

  console.log('받아온 값 확인 >>> ', bidDetailInfoData);

  const dispatch = useDispatch();

  const onSubmitSearch = ({navigation}: any) => {
    const param = {
      subj: text,
      ins_start_date:
        selectedDate_1.getFullYear().toString() +
        selectedDate_1.getMonth().toString() +
        selectedDate_1.getDate().toString(),
      ins_end_date:
        selectedDate_2.getFullYear().toString() +
        selectedDate_2.getMonth().toString() +
        selectedDate_2.getDate().toString(),
    };
    dispatch(getBidInfoAsync.request(param));
  };

  function forNavagiate() {
    console.log('bidDetailInfoData 확인입니다 >> ', bidDetailInfoData);
    navigation.navigate('NewSignUp', {
      data: bidDetailInfoData,
    });
  }

  const detailInfo = (param: any) => {
    dispatch(getBidDetailInfoAsync.request(param));
  };

  useEffect(() => {
    forNavagiate();
  }, [bidDetailInfoData]);

  return (
    <>
      <AppHeader></AppHeader>
      <View>
        <Text style={{fontWeight: 'bold', padding: 10, color: '#003366'}}>
          ● 공지문 작성
        </Text>
        <View style={{alignItems: 'flex-end', marginRight: 10}}>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <TouchableOpacity style={styles.button_1} onPress={onSubmitSearch}>
              <Text> 조회</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button_2} onPress={forNavagiate}>
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
              widthArr={[50, 60, 20, 60, 20, 40, 120]}
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
        <ScrollView>
          <ScrollView horizontal>
            <Table
              borderStyle={{borderWidth: 1}}
              style={{
                marginTop: 50,
                marginLeft: 10,
                marginRight: 10,
              }}>
              <Row
                style={{backgroundColor: 'lightgray'}}
                widthArr={[25, 160, 45, 140, 150, 70]}
                data={CONTENT.tableHead}
              />
              {bidInfoData
                ? bidInfoData.map((content, i) => {
                    return [
                      <TouchableOpacity
                        onPress={() => detailInfo(content.bltn_content_no)}>
                        <Row
                          data={[
                            i + 1,
                            content.subj,
                            content.ins_person_nm,
                            content.ins_date + ' ' + content.ins_time,
                            content.lsp_grp_nm,
                            content.dw_mail_send_f,
                          ]}
                          widthArr={[25, 160, 45, 140, 150, 70]}
                        />
                      </TouchableOpacity>,
                    ];
                  })
                : []}
              {/* <TouchableOpacity>
                <Rows
                  data={
                    bidInfoData
                      ? bidInfoData.map((content, i) => {
                          return [
                            i + 1,
                            content.subj,
                            content.ins_person_nm,
                            content.ins_date + ' ' + content.ins_time,
                            content.lsp_grp_nm,
                            content.dw_mail_send_f,
                          ];
                        })
                      : []
                  }
                  widthArr={[25, 160, 45, 140, 150, 70]}
                />
              </TouchableOpacity> */}
            </Table>
          </ScrollView>
        </ScrollView>
      </View>
    </>
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
