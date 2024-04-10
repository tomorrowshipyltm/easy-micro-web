import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/custom/list',
    method:'get',
    params:params
  })
}

export function createDataset(data) {
  return request({
    url:'/custom/create',
    method:'post',
    data:data
  })
}
export function updateShowStatus(data) {
  return request({
    url:'/custom/update/showStatus',
    method:'post',
    data:data
  })
}

export function updateFactoryStatus(data) {
  return request({
    url:'/custom/update/factoryStatus',
    method:'post',
    data:data
  })
}

export function getDataset(id) {
  return request({
    url:'/custom/'+id,
    method:'get',
  })
}

export function updateDataset(id,data) {
  return request({
    url: '/custom/update/' + id,
    method: 'post',
    data: data
  })
}

export function deleteDataset(id) {
  return request({
    url:'/custom/delete/'+id,
    method:'get',
  })
}

