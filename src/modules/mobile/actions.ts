import {AxiosError} from 'axios';
import {createAsyncAction} from 'typesafe-actions';
import {BidNotiInfo} from '../../api/bidNotiAxios';

export const GET_BID_INFO = 'mobile/GET_BID_INFO';
export const GET_BID_INFO_SUCCESS = 'mobile/GET_BID_INFO_SUCCESS';
export const GET_BID_INFO_ERROR = 'mobile/GET_BID_INFO_ERROR';

export const getBidInfoAsync = createAsyncAction(
  GET_BID_INFO,
  GET_BID_INFO_SUCCESS,
  GET_BID_INFO_ERROR,
)<any, Array<BidNotiInfo>, AxiosError>();
