import Home from "../pages/Home";
import About from "../pages/About";
import ListDemo from "../pages/List";


export const routePath = [
  { path: '/', exact: true, name: '首页', component: Home, },
  { path: '/about', name: '关于', component: About, },
  { path: '/list', name: '列表', component: ListDemo, },
]

export const tabPath = [
  { path: '/', name: '首页', component: Home, },
  { path: '/about', name: '关于', component: About, },
  { path: '/list', name: '列表', component: ListDemo, },
]