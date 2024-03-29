import {AxiosError} from 'axios';
import {createAsyncAction} from 'typesafe-actions';
import {BidNotiInfo, BidNotiPostInfo, MailInfo} from '../../api/bidNotiAxios';
import {LspGrpNm} from './../../api/bidNotiAxios';

export const GET_BID_INFO = 'mobile/GET_BID_INFO';
export const GET_BID_INFO_SUCCESS = 'mobile/GET_BID_INFO_SUCCESS';
export const GET_BID_INFO_ERROR = 'mobile/GET_BID_INFO_ERROR';

export const POST_BID_INFO = 'mobile/POST_BID_INFO';
export const POST_BID_INFO_SUCCESS = 'mobile/POST_BID_INFO_SUCCESS';
export const POST_BID_INFO_ERROR = 'mobile/POST_BID_INFO_ERROR';

export const DELETE_BID_INFO = 'mobile/DELETE_BID_INFO';
export const DELETE_BID_INFO_SUCCESS = 'mobile/DELETE_BID_INFO_SUCCESS';
export const DELETE_BID_INFO_ERROR = 'mobile/DELETE_BID_INFO_ERROR';

export const GET_BID_DETAIL_INFO = 'mibile/GET_BID_DETAIL_INFO';
export const GET_BID_DETAIL_INFO_SUCCESS = 'mobile/GET_BID_DETAIL_INFO_SUCCESS';
export const GET_BID_DETAIL_INFO_ERROR = 'mobile/GET_BID_DETAIL_INFO_ERROR';

export const UPDATE_BID_INFO = 'mobile/UPDATE_BID_INFO';
export const UPDATE_BID_INFO_SUCCESS = 'mobile/UPDATE_BID_INFO_SUCCESS';
export const UPDATE_BID_INFO_ERROR = 'mobile/UPDATE_BID_INFO_ERROR';

export const POST_MAIL = 'mobile/POST_MAIL';
export const POST_MAIL_SUCCESS = 'mobile/POST_MAIL_SUCCESS';
export const POST_MAIL_ERROR = 'mobile/POST_MAIL_ERROR';

export const GET_LSPNM = 'mobile/GET_LSPNM';
export const GET_LSPNM_SUCCESS = 'mobile/GET_LSPNM_SUCCESS';
export const GET_LSPNM_ERROR = 'mobile/GET_LSPNM_ERROR';

export const getBidInfoAsync = createAsyncAction(
  GET_BID_INFO,
  GET_BID_INFO_SUCCESS,
  GET_BID_INFO_ERROR,
)<any, Array<BidNotiInfo>, AxiosError>();

export const postBidInfoAsync = createAsyncAction(
  POST_BID_INFO,
  POST_BID_INFO_SUCCESS,
  POST_BID_INFO_ERROR,
)<any, BidNotiPostInfo, AxiosError>();

export const deleteBidInfoAsync = createAsyncAction(
  DELETE_BID_INFO,
  DELETE_BID_INFO_SUCCESS,
  DELETE_BID_INFO_ERROR,
)<any, Number, AxiosError>();

export const getBidDetailInfoAsync = createAsyncAction(
  GET_BID_DETAIL_INFO,
  GET_BID_DETAIL_INFO_SUCCESS,
  GET_BID_DETAIL_INFO_ERROR,
)<any, Array<BidNotiInfo>, AxiosError>();

export const updateBidInfoAsync = createAsyncAction(
  UPDATE_BID_INFO,
  UPDATE_BID_INFO_SUCCESS,
  UPDATE_BID_INFO_ERROR,
)<any, Array<BidNotiInfo>, AxiosError>();

export const sendEmailAsync = createAsyncAction(
  POST_MAIL,
  POST_MAIL_SUCCESS,
  POST_MAIL_ERROR,
)<any, MailInfo, AxiosError>();

export const getLspGrpNmAsync = createAsyncAction(
  GET_LSPNM,
  GET_LSPNM_SUCCESS,
  GET_LSPNM_ERROR,
)<any, LspGrpNm, AxiosError>();
