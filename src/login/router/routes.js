import Index from "../pages/index/index";
import Home from "../pages/index/home";
import About from "../pages/index/about";
import List from "../pages/index/list";

export const IndexRoute = [
  { path: '/', exact:true, name: '首页', component: Home, },
  { path: '/index', name: '首页', component: Home, },
  { path: '/about', name: '关于', component: About, },
  { path: '/list', name: '列表', component: List, },
]

export const tabPath = [
  { path: '/index', name: '首页',  },
  { path: '/about', name: '关于', },
  { path: '/list', name: '列表', },
]

export const otherPath = [
  //{path: '/404', name: '404', component: NotFound,},
  //{ path: '/login', name: '登录', component: Login, },
]

export const mainPath = [
  { path: '/', exact:true, name: '首页', component: Index, },
  //{ path: '/login',exact:true, name: '登录', component: Login, },
]