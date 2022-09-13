import axios from 'axios';

export async function getBidNotiApi(params: any) {
  const response = await axios.get<BidNotiInfo>(
    `http://192.168.0.67:9095/bid/noti?ins_start_date=${params.ins_start_date}&ins_end_date=${params.ins_end_date}&subj=${params.subj}`,
  );

  return response.data;
}

export async function postBidNotiApi(params: any) {
  const response = await axios.post<BidNotiPostInfo>(
    `http://192.168.0.67:9095/bid/noti`,
    params,
  );

  return response.data;
}

export async function deleteBidNotiApi(bltn_content_no: any) {
  const response = await axios.put<any>(
    `http://192.168.0.67:9095/bid/noti/${bltn_content_no}`,
  );

  return response.data;
}

export async function getDetailBidInfoApi(bltn_content_no: any) {
  const response = await axios.get<BidNotiInfo>(
    `http://192.168.0.67:9095/bid/noti/detail/${bltn_content_no}`,
  );

  return response.data;
}

export async function updateBidNotiApi(params: any) {
  const response = await axios.put<BidNotiInfo>(
    `http://192.168.0.67:9095/bid/noti`,
    params,
  );

  return response.data;
}

export async function sendEmailApi(mail: any) {
  const response = await axios.post<MailInfo>(
    `http://192.168.0.67:9095/mail/send`,
    mail,
  );

  return response.data;
}

export interface BidNotiInfo {
  lsp_grp_nm: string; //메일발송그룹 이름
  lsp_grp_cd: string; //메일발송그룹 코드
  subj: string; //제목
  ins_person_id: string; //작성자 id
  ins_date: string; //등록일 날짜
  ins_time: string; //등록일 시간
  dw_mail_send_f: string; //메일발송여부
  ins_start_date: string; //from date
  ins_end_date: string; //to date
  ins_person_nm: string; //작성자 이름
  bltn_content_no: string;
}

export interface BidNotiPostInfo {
  subj: string;
  bltn_content: string;
  lsp_grp_nm: string;
  bltn_content_no: string; //게시글 번호(seq)
  lsp_grp_cd: string;
}

export interface MailInfo {
  lsp_grp_cd: string;
  subj: string;
  bltn_content: string;
}
