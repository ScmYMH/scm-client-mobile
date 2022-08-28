import {BidNotiInfo, getBidNotiApi} from '../../api/bidNotiAxios';
import {getBidInfoAsync, GET_BID_INFO} from './actions';
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

export function* bidNotiSaga() {
  yield takeLatest(GET_BID_INFO, getBidNotiSaga);
}
