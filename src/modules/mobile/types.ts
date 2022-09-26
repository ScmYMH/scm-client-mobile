import {ActionType} from 'typesafe-actions';
import {
  BidNotiInfo,
  BidNotiPostInfo,
  LspGrpNm,
  MailInfo,
} from '../../api/bidNotiAxios';
import {AsyncState} from '../../lib/reducerUtils';
import * as actions from './actions';

export type BidInfoAction = ActionType<typeof actions>;

export type BidInfoState = {
  bidInfoList: AsyncState<Array<BidNotiInfo>, Error>;
  bidInfoPostList: AsyncState<BidNotiPostInfo, Error>;
  bidInfoDel: AsyncState<Number, Error>;
  bidDetailInfoList: AsyncState<Array<BidNotiInfo>, Error>;
  updBidInfoList: AsyncState<Array<BidNotiInfo>, Error>;
  postMail: AsyncState<MailInfo, Error>;
  lspgrpnm: AsyncState<LspGrpNm, Error>;
};
