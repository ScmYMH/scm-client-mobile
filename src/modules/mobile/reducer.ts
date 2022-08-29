import {State} from 'react-native-gesture-handler';
import {createReducer} from 'typesafe-actions';
import {BidNotiInfo} from '../../api/bidNotiAxios';
import {asyncState} from '../../lib/reducerUtils';
import {
  GET_BID_INFO,
  GET_BID_INFO_SUCCESS,
  GET_BID_INFO_ERROR,
} from './actions';
import {BidInfoAction, BidInfoState} from './types';

const initialState: BidInfoState = {
  bidInfoList: asyncState.initial(),
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
});

export default bidInfo;
