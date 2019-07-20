import Home from "../pages/Home";
import About from "../pages/About";

export const routePath = [
  { path: '/', exact: true, name: '首页', component: Home, },
  { path: '/about', name: '关于', component: About, },
]

export const tabPath = [
  { path: '/', name: '首页', component: Home, },
  { path: '/about', name: '关于', component: About, },
]