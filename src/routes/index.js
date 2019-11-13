import Home from '../pages/home'
import Analysis from '../pages/analysis'
import Test from '../pages/test'
import FemaleTest from '../pages/test/Female'
import MaleTest from '../pages/test/MaleTest'
export default [
  {
    name: '首页',
    path: '/',
    component: Home,
    key: 0
  },
  {
    name: '案例分析',
    path: '/analysis',
    component: Analysis,
    key: 1
  },
  {
    name: '趣味测试',
    path: '/test',
    component: Test,
    key: 2
  },
  {
    name: '男生测试',
    path: '/maletest',
    component: MaleTest,
    key: 3
  },
  {
    name: '女生测试',
    path: '/femaletest',
    component: FemaleTest,
    key: 4
  }
]
