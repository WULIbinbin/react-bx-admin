import Index from "../pages/index/index";
import Register from "../pages/index/register";

export const IndexRoute = [
  { path: '/', exact:true, name: '首页', component: Index, },
  { path: '/index', name: '首页', component: Index, },
  { path: '/register', name: '注册', component: Register, },
]
