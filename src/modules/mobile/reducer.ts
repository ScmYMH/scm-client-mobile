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
  UPDATE_BID_INFO,
  UPDATE_BID_INFO_SUCCESS,
  UPDATE_BID_INFO_ERROR,
  POST_MAIL,
  POST_MAIL_SUCCESS,
  POST_MAIL_ERROR,
  GET_LSPNM,
  GET_LSPNM_SUCCESS,
  GET_LSPNM_ERROR,
} from './actions';
import {BidInfoAction, BidInfoState} from './types';

const initialState: BidInfoState = {
  bidInfoList: asyncState.initial(),
  bidInfoPostList: asyncState.initial(),
  bidInfoDel: asyncState.initial(),
  bidDetailInfoList: asyncState.initial(),
  updBidInfoList: asyncState.initial(),
  postMail: asyncState.initial(),
  lspgrpnm: asyncState.initial(),
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
  [UPDATE_BID_INFO]: state => ({
    ...state,
    updBidInfoList: asyncState.load(),
  }),
  [UPDATE_BID_INFO_SUCCESS]: (state, action) => ({
    ...state,
    updBidInfoList: asyncState.success(action.payload),
  }),
  [UPDATE_BID_INFO_ERROR]: (state, action) => ({
    ...state,
    updBidInfoList: asyncState.error(action.payload),
  }),
  [POST_MAIL]: state => ({
    ...state,
    postMail: asyncState.load(),
  }),
  [POST_MAIL_SUCCESS]: (state, action) => ({
    ...state,
    postMail: asyncState.success(action.payload),
  }),
  [POST_MAIL_ERROR]: (state, action) => ({
    ...state,
    postMail: asyncState.error(action.payload),
  }),
  [GET_LSPNM]: state => ({
    ...state,
    lspgrpnm: asyncState.load(),
  }),
  [GET_LSPNM_SUCCESS]: (state, action) => ({
    ...state,
    lspgrpnm: asyncState.success(action.payload),
  }),
  [GET_LSPNM_ERROR]: (state, action) => ({
    ...state,
    lspgrpnm: asyncState.error(action.payload),
  }),
});

export default bidInfo;
