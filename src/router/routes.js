import Index from "../pages/index/index";
import Home from "../pages/index/home";
import About from "../pages/index/about";
import List from "../pages/index/list";
import Login from "../pages/login/index";

export const routePath = [
  { path: '/', exact: true, name: '首页', component: Index },
  { path: '/login', name: '登录', component: Login, },
]

export const IndexRoute = [
  { path: '/home', exact: true, name: '首页', component: Home, },
  { path: '/about', name: '关于', component: About, },
  { path: '/list', name: '列表', component: List, },
]

export const tabPath = [
  { path: '/', name: '首页', component: Index, },
  { path: '/about', name: '关于', component: About, },
  { path: '/list', name: '列表', component: List, },
]