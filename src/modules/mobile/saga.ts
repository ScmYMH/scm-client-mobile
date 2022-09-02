import {
  BidNotiInfo,
  BidNotiPostInfo,
  deleteBidNotiApi,
  getBidNotiApi,
  getDetailBidInfoApi,
  postBidNotiApi,
} from '../../api/bidNotiAxios';
import {
  deleteBidInfoAsync,
  DELETE_BID_INFO,
  getBidDetailInfoAsync,
  getBidInfoAsync,
  GET_BID_DETAIL_INFO,
  GET_BID_INFO,
  postBidInfoAsync,
  POST_BID_INFO,
} from './actions';
import {call, put, takeLatest} from 'redux-saga/effects';

function* getBidNotiSaga(action: ReturnType<typeof getBidInfoAsync.request>) {
  try {
    const bidInfo: Array<BidNotiInfo> = yield call(
      getBidNotiApi,
      action.payload,
    );
    yield put(getBidInfoAsync.success(bidInfo));
  } catch (e: any) {
    yield put(getBidInfoAsync.failure(e));
  }
}

function* postBidNotiSaga(action: ReturnType<typeof postBidInfoAsync.request>) {
  try {
    const bidPostInfo: BidNotiPostInfo = yield call(
      postBidNotiApi,
      action.payload,
    );
    yield put(postBidInfoAsync.success(bidPostInfo));
  } catch (e: any) {
    yield put(postBidInfoAsync.failure(e));
  }
}

function* delBidNotiSaga(
  action: ReturnType<typeof deleteBidInfoAsync.request>,
) {
  try {
    const bidDelInfo: Number = yield call(deleteBidNotiApi, action.payload);
    yield put(deleteBidInfoAsync.success(bidDelInfo));
  } catch (e: any) {
    yield put(deleteBidInfoAsync.failure(e));
  }
}

function* getDetailBidInfoSaga(
  action: ReturnType<typeof getBidDetailInfoAsync.request>,
) {
  try {
    const bidDetailInfo: Array<BidNotiInfo> = yield call(
      getDetailBidInfoApi,
      action.payload,
    );
    yield put(getBidDetailInfoAsync.success(bidDetailInfo));
  } catch (e: any) {
    yield put(getBidDetailInfoAsync.failure(e));
  }
}

export function* bidNotiSaga() {
  yield takeLatest(GET_BID_INFO, getBidNotiSaga);
  yield takeLatest(POST_BID_INFO, postBidNotiSaga);
  yield takeLatest(DELETE_BID_INFO, delBidNotiSaga);
  yield takeLatest(GET_BID_DETAIL_INFO, getDetailBidInfoSaga);
}
