import {combineReducers} from 'redux';
import {all} from 'redux-saga/effects';
import {bidNotiSaga} from './src/modules/mobile/saga';
import bidInfo from './src/modules/mobile/reducer';

const rootReducer = combineReducers({
  bidInfo,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([bidNotiSaga()]);
}
