import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Messages from '../pages/messages/list'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import laorenList from '../pages/laoren/list'
import laorenDetail from '../pages/laoren/detail'
import laorenAdd from '../pages/laoren/add'
import yishengList from '../pages/yisheng/list'
import yishengDetail from '../pages/yisheng/detail'
import yishengAdd from '../pages/yisheng/add'
import yaoshiList from '../pages/yaoshi/list'
import yaoshiDetail from '../pages/yaoshi/detail'
import yaoshiAdd from '../pages/yaoshi/add'
import yaowufenleiList from '../pages/yaowufenlei/list'
import yaowufenleiDetail from '../pages/yaowufenlei/detail'
import yaowufenleiAdd from '../pages/yaowufenlei/add'
import yaowuxinxiList from '../pages/yaowuxinxi/list'
import yaowuxinxiDetail from '../pages/yaowuxinxi/detail'
import yaowuxinxiAdd from '../pages/yaowuxinxi/add'
import chufangxinxiList from '../pages/chufangxinxi/list'
import chufangxinxiDetail from '../pages/chufangxinxi/detail'
import chufangxinxiAdd from '../pages/chufangxinxi/add'
import zaixianzixunList from '../pages/zaixianzixun/list'
import zaixianzixunDetail from '../pages/zaixianzixun/detail'
import zaixianzixunAdd from '../pages/zaixianzixun/add'
import peiyaoxinxiList from '../pages/peiyaoxinxi/list'
import peiyaoxinxiDetail from '../pages/peiyaoxinxi/detail'
import peiyaoxinxiAdd from '../pages/peiyaoxinxi/add'
import yaopinzixunList from '../pages/yaopinzixun/list'
import yaopinzixunDetail from '../pages/yaopinzixun/detail'
import yaopinzixunAdd from '../pages/yaopinzixun/add'
import zhenduanjiluList from '../pages/zhenduanjilu/list'
import zhenduanjiluDetail from '../pages/zhenduanjilu/detail'
import zhenduanjiluAdd from '../pages/zhenduanjilu/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'
import discussyaowuxinxiList from '../pages/discussyaowuxinxi/list'
import discussyaowuxinxiDetail from '../pages/discussyaowuxinxi/detail'
import discussyaowuxinxiAdd from '../pages/discussyaowuxinxi/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'messages',
					component: Messages
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'laoren',
					component: laorenList
				},
				{
					path: 'laorenDetail',
					component: laorenDetail
				},
				{
					path: 'laorenAdd',
					component: laorenAdd
				},
				{
					path: 'yisheng',
					component: yishengList
				},
				{
					path: 'yishengDetail',
					component: yishengDetail
				},
				{
					path: 'yishengAdd',
					component: yishengAdd
				},
				{
					path: 'yaoshi',
					component: yaoshiList
				},
				{
					path: 'yaoshiDetail',
					component: yaoshiDetail
				},
				{
					path: 'yaoshiAdd',
					component: yaoshiAdd
				},
				{
					path: 'yaowufenlei',
					component: yaowufenleiList
				},
				{
					path: 'yaowufenleiDetail',
					component: yaowufenleiDetail
				},
				{
					path: 'yaowufenleiAdd',
					component: yaowufenleiAdd
				},
				{
					path: 'yaowuxinxi',
					component: yaowuxinxiList
				},
				{
					path: 'yaowuxinxiDetail',
					component: yaowuxinxiDetail
				},
				{
					path: 'yaowuxinxiAdd',
					component: yaowuxinxiAdd
				},
				{
					path: 'chufangxinxi',
					component: chufangxinxiList
				},
				{
					path: 'chufangxinxiDetail',
					component: chufangxinxiDetail
				},
				{
					path: 'chufangxinxiAdd',
					component: chufangxinxiAdd
				},
				{
					path: 'zaixianzixun',
					component: zaixianzixunList
				},
				{
					path: 'zaixianzixunDetail',
					component: zaixianzixunDetail
				},
				{
					path: 'zaixianzixunAdd',
					component: zaixianzixunAdd
				},
				{
					path: 'peiyaoxinxi',
					component: peiyaoxinxiList
				},
				{
					path: 'peiyaoxinxiDetail',
					component: peiyaoxinxiDetail
				},
				{
					path: 'peiyaoxinxiAdd',
					component: peiyaoxinxiAdd
				},
				{
					path: 'yaopinzixun',
					component: yaopinzixunList
				},
				{
					path: 'yaopinzixunDetail',
					component: yaopinzixunDetail
				},
				{
					path: 'yaopinzixunAdd',
					component: yaopinzixunAdd
				},
				{
					path: 'zhenduanjilu',
					component: zhenduanjiluList
				},
				{
					path: 'zhenduanjiluDetail',
					component: zhenduanjiluDetail
				},
				{
					path: 'zhenduanjiluAdd',
					component: zhenduanjiluAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
				{
					path: 'discussyaowuxinxi',
					component: discussyaowuxinxiList
				},
				{
					path: 'discussyaowuxinxiDetail',
					component: discussyaowuxinxiDetail
				},
				{
					path: 'discussyaowuxinxiAdd',
					component: discussyaowuxinxiAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
