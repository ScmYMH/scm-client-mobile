import axios from 'axios';

export async function getBidNotiApi(params: any) {
  const response = await axios.get<BidNotiInfo>(
    `http://localhost:9095/bid/noti?ins_start_date=${params.insStartDate}&ins_end_date=${params.insEndDate}&subj=${params.subj}`,
  );

  return response.data;
}

export interface BidNotiInfo {
  lsp_grp_nm: string;
  lsp_grp_cd: string;
  subj: string;
  ins_person_id: string;
  ins_date: string;
  ins_time: string;
  dw_mail_send_f: string;
  ins_start_date: string;
  ins_end_date: string;
  ins_person_nm: string;
}
