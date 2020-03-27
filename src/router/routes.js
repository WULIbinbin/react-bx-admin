import Home from "../pages/Home";
import About from "../pages/About";
import ListDemo from "../pages/List";
import Login from "../pages/Login/Index";

export const routePath = [
  { path: '/', exact: true, name: '首页', component: Home, },
  { path: '/about', name: '关于', component: About, },
  { path: '/list', name: '列表', component: ListDemo, },
  { path: '/login', name: '登录', component: Login, },
]

export const tabPath = [
  { path: '/', name: '首页', component: Home, },
  { path: '/about', name: '关于', component: About, },
  { path: '/list', name: '列表', component: ListDemo, },
]