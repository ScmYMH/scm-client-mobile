import {State} from 'react-native-gesture-handler';
import {createReducer} from 'typesafe-actions';
import {BidNotiInfo} from '../../api/bidNotiAxios';
import {asyncState} from '../../lib/reducerUtils';
import {
  GET_BID_INFO,
  GET_BID_INFO_SUCCESS,
  GET_BID_INFO_ERROR,
  POST_BID_INFO,
  POST_BID_INFO_SUCCESS,
  POST_BID_INFO_ERROR,
  DELETE_BID_INFO,
  DELETE_BID_INFO_SUCCESS,
  DELETE_BID_INFO_ERROR,
  GET_BID_DETAIL_INFO,
  GET_BID_DETAIL_INFO_SUCCESS,
  GET_BID_DETAIL_INFO_ERROR,
} from './actions';
import {BidInfoAction, BidInfoState} from './types';

const initialState: BidInfoState = {
  bidInfoList: asyncState.initial(),
  bidInfoPostList: asyncState.initial(),
  bidInfoDel: asyncState.initial(),
  bidDetailInfoList: asyncState.initial(),
};

const bidInfo = createReducer<BidInfoState, BidInfoAction>(initialState, {
  [GET_BID_INFO]: state => ({
    ...state,
    bidInfoList: asyncState.load(),
  }),
  [GET_BID_INFO_SUCCESS]: (state, action) => ({
    ...state,
    bidInfoList: asyncState.success(action.payload),
  }),
  [GET_BID_INFO_ERROR]: (state, action) => ({
    ...state,
    bidInfoList: asyncState.error(action.payload),
  }),
  [POST_BID_INFO]: state => ({
    ...state,
    bidInfoPostList: asyncState.load(),
  }),
  [POST_BID_INFO_SUCCESS]: (state, action) => ({
    ...state,
    bidInfoPostList: asyncState.success(action.payload),
  }),
  [POST_BID_INFO_ERROR]: (state, action) => ({
    ...state,
    bidInfoPostList: asyncState.error(action.payload),
  }),
  [DELETE_BID_INFO]: state => ({
    ...state,
    bidInfoDel: asyncState.load(),
  }),
  [DELETE_BID_INFO_SUCCESS]: (state, action) => ({
    ...state,
    bidInfoDel: asyncState.success(action.payload),
  }),
  [DELETE_BID_INFO_ERROR]: (state, action) => ({
    ...state,
    bidInfoDel: asyncState.error(action.payload),
  }),
  [GET_BID_DETAIL_INFO]: state => ({
    ...state,
    bidDetailInfoList: asyncState.load(),
  }),
  [GET_BID_DETAIL_INFO_SUCCESS]: (state, action) => ({
    ...state,
    bidDetailInfoList: asyncState.success(action.payload),
  }),
  [GET_BID_DETAIL_INFO_ERROR]: (state, action) => ({
    ...state,
    bidDetailInfoList: asyncState.error(action.payload),
  }),
});

export default bidInfo;
