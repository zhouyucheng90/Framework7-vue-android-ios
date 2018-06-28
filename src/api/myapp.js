import request from '@/utils/request'
// 商机列表
export function getUserList() {
  return request({
    url: '/business/business/index?page=1&page_size=50',
    method: 'GET',
    headers: {
        'access-token':''
    }
  })
}
// 商机详情
export function getUserDetail(id) {
  return request({
    url: '/business/business/view',
    params: id,
    method: 'GET',
    headers: {
        'access-token':''
    }
  })
}
// 商机详情---跟进记录
export function getGoodList(id) {
  return request({
    url: '/business/business/fllow-up?&page=1&page_size=10000',
    params: id,
    method: 'GET',
    headers: {
        'access-token':''
    }
  })
}