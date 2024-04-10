import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/dataset/list',
    method:'get',
    params:params
  })
}

export function createDataset(data) {
  return request({
    url:'/dataset/create',
    method:'post',
    data:data
  })
}
export function updateShowStatus(data) {
  return request({
    url:'/dataset/update/showStatus',
    method:'post',
    data:data
  })
}

export function updateFactoryStatus(data) {
  return request({
    url:'/dataset/update/factoryStatus',
    method:'post',
    data:data
  })
}

export function getDataset(id) {
  return request({
    url:'/dataset/'+id,
    method:'get',
  })
}

export function updateDataset(id,data) {
  return request({
    url: '/dataset/update/' + id,
    method: 'post',
    data: data
  })
}

export function deleteDataset(id) {
  return request({
    url:'/dataset/delete/'+id,
    method:'get',
  })
}

