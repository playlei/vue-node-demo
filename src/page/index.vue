<template>
  <div id="index">
  	<div class='title'>
  		<ul>
  			<li @click='go("child1")'>child1</li>
  			<li @click='go("child2")'>child2</li>
  		</ul>
  		<span @click='go("message")'>
					消息
  		</span>
  	</div>
  	<div class='content'>
  		<keep-alive>
  			<router-view></router-view>
  		</keep-alive>
  	</div>
  </div>
</template>

<script>
 export default{
 	name:'index',
 	data(){
 		return{
 		}
 	},
 	mounted(){
 		this.go('child1');
 	},
 	methods:{
 		go(key){
 			if(key=='message'){
 				this.$router.push({path:'/'+key})
 			}else{
 				this.$router.push({path:'/index/'+key})
 			}
 		}
 	},
 	components:{
 	}
 }
</script>

<style lang='less' scoped>
@import '../assets/css/variables.less';
#index{
	background:@b0;
	ul{
		overflow: hidden;
		margin-bottom:3rem;
		>li{float:left;margin-right:2rem;background:#e20000;}
	}
	span{
		position:absolute;top:1rem;right:1rem;
	}
}
</style>
