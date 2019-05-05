import request from '@/utils/request';

const join = {
  postJoinData(data) {
    return request({
      method: 'post',
      url: '/api/partner/apply_partner',
      data,
    });
  },
}
;

export default join;
