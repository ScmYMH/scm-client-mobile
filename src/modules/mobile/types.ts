import {ActionType} from 'typesafe-actions';
import {BidNotiInfo, BidNotiPostInfo} from '../../api/bidNotiAxios';
import {AsyncState} from '../../lib/reducerUtils';
import * as actions from './actions';

export type BidInfoAction = ActionType<typeof actions>;

export type BidInfoState = {
  bidInfoList: AsyncState<Array<BidNotiInfo>, Error>;
  bidInfoPostList: AsyncState<BidNotiPostInfo, Error>;
  bidInfoDel: AsyncState<Number, Error>;
  bidDetailInfoList: AsyncState<Array<BidNotiInfo>, Error>;
};
