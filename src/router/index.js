import Vue from 'vue'
import Router from 'vue-router'

import index from '../page/index.vue';
import child1 from '../components/child1.vue';//圈子
import child2 from '../components/child2.vue';//群组
import message from '../page/message.vue';//消息

Vue.use(Router)

export default new Router({
	mode:'history',
	base:__dirname,
  routes: [
    {path:'/',component:index},
	{path:'/index',component:index,
		children:[
			{path:'/index/child1',component:child1},
			{path:'/index/child2',component:child2}
		]
	},
	{path:'/message',component:message},
	{path:'*',component:index},
  ]
})
