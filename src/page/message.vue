<template>
  <div id="message">
  	<button @click='get'>使用node获取消息</button>
  	<p v-for='v,k in arr'>
  		<span>获取次数：{{v.times}}</span>
  		<span>{{v.name}}</span>
  		<br />
  		<span>{{v.message}}</span>
  	</p>
  </div>
</template>

<script>
 export default{
 	name:'message',
 	data(){
 		return{
 			arr:[],
 			times:0
 		}
 	},
 	methods:{
 		get(){
 			this.$http.post('/getjson',{times:this.times},{emulateJSON:true})
 			.then((response)=>{
 				console.log(response);
 				this.times+=1;
 				this.arr.push({times:response.body.times,name:response.body.name,message:response.body.message})
 			},(err)=>{
 				
 			})
 		}
 	},
 	components:{
 	}
 }
</script>

<style lang='less' scoped>
@import '../assets/css/variables.less';

</style>
