import Home from '../pages/home'
import Analysis from '../pages/analysis'
import Test from '../pages/test'
import FemaleTest from '../pages/test/Female'
import MaleTest from '../pages/test/MaleTest'
import Experience from '../pages/experience'
import Login from '../pages/login'
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
  },
  {
    name: '恋爱经验',
    path: '/experience',
    component: Experience,
    key: 5
  },
  {
    name: '登录',
    path: '/login',
    component: Login,
    key: 6
  }
]
