import fetchT from '../lib/fetch'

// 获取分类列表
export const getList = (params) => {
  return fetchT({
    url: '/webtest/pages',
    method: 'GET',
    data: params
  })
}