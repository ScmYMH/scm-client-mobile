import {ActionType} from 'typesafe-actions';
import {BidNotiInfo} from '../../api/bidNotiAxios';
import {AsyncState} from '../../lib/reducerUtils';
import * as actions from './actions';

export type BidInfoAction = ActionType<typeof actions>;

export type BidInfoState = {
  bidInfoList: AsyncState<Array<BidNotiInfo>, Error>;
};
