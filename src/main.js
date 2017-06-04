// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import store from './store/index'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router';
Vue.use(VueResource);
Vue.use(VueRouter)
require('!style-loader!css-loader!less-loader!./assets/css/main.less');
import router from './router';
/* eslint-disable no-new */

var vm=new Vue({
	el:'#app',
  router,
  store,
  template:`
  	<div>
  		<transition :name='routename' mode='out-in'>
  			<keep-alive>
  				<router-view></router-view>
  			</keep-alive>
  		</transition>
  	</div>
  `,
  data(){
  	return{
  		routename:'fade',	
  	}
  },
  watch:{
  	'$route'(to,from){
  		/*前进后退的root动画*/
  		const toDepth = to.path.split('/').length
    	const fromDepth = from.path.split('/').length
    	this.routename=toDepth<fromDepth?'fade':'fade1'
  	}
  }
})
