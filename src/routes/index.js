import Home from '../pages/home'
import Analysis from '../pages/analysis'
import Test from '../pages/test'
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
  }
]
