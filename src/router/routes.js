import Home from "../pages/home";
import About from "../pages/about";
import List from "../pages/list";
import Login from "../pages/login/index";

export const routePath = [
  { path: '/', exact: true, name: '首页', component: Home, },
  { path: '/about', name: '关于', component: About, },
  { path: '/list', name: '列表', component: List, },
  { path: '/login', name: '登录', component: Login, },
]

export const tabPath = [
  { path: '/', name: '首页', component: Home, },
  { path: '/about', name: '关于', component: About, },
  { path: '/list', name: '列表', component: List, },
]