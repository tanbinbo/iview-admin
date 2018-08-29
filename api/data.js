import axios from '@/libs/api.request'

export const getTableData = () => {
  return axios.request({
    url: 'get_table_data',
    method: 'get'
  })
}

export const getOrderList = () => {
  return axios.request({
    url: 'get_full_order',
    method: 'get'
  })
}

export const searchOrderList = (params) => {
  return axios.request({
    url: 'get_full_order',
    method: 'get',
    data: params
  })
}

