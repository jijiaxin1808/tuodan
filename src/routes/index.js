import Home from '../pages/home'
import Analysis from '../pages/analysis'
import Test from '../pages/test'
import FemaleTest from '../pages/test/Female'
import MaleTest from '../pages/test/MaleTest'
import Experience from '../pages/experience'
import Login from '../pages/login'
import Res from '../pages/res'
import Create from '../pages/create'
import Notes from '../pages/notes'
import User from '../pages/user'
import Artcile from '../pages/article'
 // 这里是用来配置 前端路由的 把这里的数组export出去后再map一下把组件都展示出来
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
  },
  {
    name: '注册',
    path: '/res',
    component: Res,
    key: 7
  },
  {
    name: '创建内容',
    path: '/create',
    component: Create,
    key: 8
  },
  {
    name: '日记',
    path: '/notes',
    component: Notes,
    key: 9
  },
  {
    name: '用户界面',
    path: '/user',
    component: User,
    key: 10
  },
  {
    name: '文章',
    path: '/article',
    component: Artcile,
    key: 11
  }
]
