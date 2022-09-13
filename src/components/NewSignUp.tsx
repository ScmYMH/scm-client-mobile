import AppHeader from './AppHeader';
import React, {useEffect} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {Table, TableWrapper, Rows} from 'react-native-table-component';
import SelectDropdown from 'react-native-select-dropdown';
import {useDispatch, useSelector} from 'react-redux';
import {
  deleteBidInfoAsync,
  postBidInfoAsync,
  updateBidInfoAsync,
} from '../modules/mobile/actions';
import {RootState} from '../../saga';
import bidInfo from './../modules/mobile/reducer';

const NewSignUp = ({route}: any) => {
  const dispatch = useDispatch();

  const [subj, setSubj] = React.useState('');
  const [bltnContent, setBltnContent] = React.useState('');
  const [lspGrpNm, setLspGrpNm] = React.useState('');
  const [bltnContentNo, setBltnContentNo] = React.useState('');
  const [forUpdate, setForUpdate] = React.useState(0);
  const bidSeq = useSelector(
    (state: RootState) => state.bidInfo.bidInfoPostList.data,
  );
  console.log('bidSeq', bidSeq);
  const lspName = ['(PD) Spot 해송-Japan'];
  const detailData = route.params.data;
  console.log('detailData >> ', detailData);
  useEffect(() => {
    if (detailData == null) {
      setSubj('');
      setBltnContent('');
    } else if (detailData != null) {
      setSubj(detailData[0].subj);
      setBltnContent(detailData[0].bltn_content);
      setBltnContentNo(detailData[0].bltn_content_no);
      setForUpdate(1);
    }
  }, [detailData]);

  const CONTENT = {
    tableData: [
      [
        <View
          style={{
            backgroundColor: '#ced6e0',
            margin: 0,
            height: 50,
            alignItems: 'center',
            alignContent: 'center',
          }}>
          <Text style={{marginTop: 8}}>LSP POOL 명</Text>
        </View>,
        <View>
          <SelectDropdown
            buttonStyle={{
              borderColor: '#444',
              backgroundColor: '#FFF',
              height: 50,
              width: '100%',
            }}
            buttonTextStyle={{
              color: '#444',
              textAlign: 'left',
              fontSize: 12,
            }}
            data={lspName}
            onSelect={(selectedItem, index) => {}}
            buttonTextAfterSelection={(selectedItem, index) => {
              setLspGrpNm(selectedItem);
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            defaultButtonText={'LSP POOL명 선택'}></SelectDropdown>
        </View>,
      ],
      [
        <View
          style={{
            backgroundColor: '#ced6e0',
            margin: 0,
            height: 40,
            alignItems: 'center',
            alignContent: 'center',
          }}>
          <Text style={{marginTop: 8}}>제목</Text>
        </View>,

        <TextInput
          style={{width: 1500, height: 40}}
          defaultValue={subj}
          onChangeText={subj => setSubj(subj)}></TextInput>,
      ],
      [
        <View
          style={{
            backgroundColor: '#ced6e0',
            margin: 0,
            height: 250,
            alignItems: 'center',
            alignContent: 'center',
          }}>
          <Text style={{marginTop: 8, height: 250}}>내용</Text>
        </View>,
        <TextInput
          style={{width: 1500, height: 250}}
          defaultValue={bltnContent}
          onChangeText={bltnContent =>
            setBltnContent(bltnContent)
          }></TextInput>,
      ],
    ],
  };

  const onSubmitPostNotiInfo = () => {
    // let detailSubj = detailData[0].subj;
    // if (detailSubj != null) {
    //   setSubj(detailSubj);
    // }

    console.log('forUpdate >> ', forUpdate);

    const param = {
      subj: subj,
      bltn_content: bltnContent,
      lsp_grp_nm: lspGrpNm,
    };

    const updParam = {
      subj: subj,
      bltn_content: bltnContent,
      lsp_grp_nm: lspGrpNm,
      bltn_content_no: bltnContentNo,
    };

    if (forUpdate == 0) {
      console.log('보낼때 param값 확인 >> ', param);
      dispatch(postBidInfoAsync.request(param));
    } else if (forUpdate == 1) {
      dispatch(updateBidInfoAsync.request(updParam));
    }
  };

  const onSubmintDeleteNotiInfo = () => {
    console.log('bidSeq 값 확인 >>> ', detailData[0].bltn_content_no);
    if (forUpdate == 1) {
      dispatch(deleteBidInfoAsync.request(detailData[0].bltn_content_no));
    } else {
      dispatch(deleteBidInfoAsync.request(bidSeq));
    }
  };

  return (
    <>
      <AppHeader></AppHeader>
      <View>
        <Text style={{fontWeight: 'bold', padding: 10, color: '#003366'}}>
          ● 공지문 작성
        </Text>
        <View style={{alignItems: 'flex-end', marginRight: 10}}>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <TouchableOpacity
              style={styles.button_1}
              onPress={onSubmitPostNotiInfo}>
              <Text>저장</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button_2}>
              <Text>메일발송</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button_2}
              onPress={onSubmintDeleteNotiInfo}>
              <Text>삭제</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Table
        borderStyle={{borderWidth: 1}}
        style={{marginLeft: 10, marginRight: 10, marginTop: 50}}>
        <TableWrapper style={{alignContent: 'center'}}>
          <Rows
            widthArr={[110, 260]}
            data={CONTENT.tableData}
            style={{alignContent: 'center'}}
          />
        </TableWrapper>
      </Table>
    </>
  );
};

export default NewSignUp;

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
