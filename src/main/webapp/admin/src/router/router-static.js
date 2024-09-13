import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import peiyaoxinxi from '@/views/modules/peiyaoxinxi/list'
    import aboutus from '@/views/modules/aboutus/list'
    import discussyaowuxinxi from '@/views/modules/discussyaowuxinxi/list'
    import yaoshi from '@/views/modules/yaoshi/list'
    import yaowufenlei from '@/views/modules/yaowufenlei/list'
    import systemintro from '@/views/modules/systemintro/list'
    import chufangxinxi from '@/views/modules/chufangxinxi/list'
    import yaowuxinxi from '@/views/modules/yaowuxinxi/list'
    import laoren from '@/views/modules/laoren/list'
    import messages from '@/views/modules/messages/list'
    import zhenduanjilu from '@/views/modules/zhenduanjilu/list'
    import zaixianzixun from '@/views/modules/zaixianzixun/list'
    import yaopinzixun from '@/views/modules/yaopinzixun/list'
    import yisheng from '@/views/modules/yisheng/list'
    import config from '@/views/modules/config/list'
    import newstype from '@/views/modules/newstype/list'


//2.配置路由   注意：名字
export const routes = [{
    path: '/',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center', affix: true}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '用药知识',
        component: news
      }
      ,{
	path: '/peiyaoxinxi',
        name: '配药信息',
        component: peiyaoxinxi
      }
      ,{
	path: '/aboutus',
        name: '关于我们',
        component: aboutus
      }
      ,{
	path: '/discussyaowuxinxi',
        name: '药物信息评论',
        component: discussyaowuxinxi
      }
      ,{
	path: '/yaoshi',
        name: '药师',
        component: yaoshi
      }
      ,{
	path: '/yaowufenlei',
        name: '药物分类',
        component: yaowufenlei
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/chufangxinxi',
        name: '处方信息',
        component: chufangxinxi
      }
      ,{
	path: '/yaowuxinxi',
        name: '药物信息',
        component: yaowuxinxi
      }
      ,{
	path: '/laoren',
        name: '老人',
        component: laoren
      }
      ,{
	path: '/messages',
        name: '留言反馈',
        component: messages
      }
      ,{
	path: '/zhenduanjilu',
        name: '诊断记录',
        component: zhenduanjilu
      }
      ,{
	path: '/zaixianzixun',
        name: '在线咨询',
        component: zaixianzixun
      }
      ,{
	path: '/yaopinzixun',
        name: '药品咨询',
        component: yaopinzixun
      }
      ,{
	path: '/yisheng',
        name: '医生',
        component: yisheng
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/newstype',
        name: '用药知识分类',
        component: newstype
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
