<template>
	<div id="#app">
		<div class="querydocker" v-on:click.stop="clickquerybox">
			<div class="query-box">
				<span v-for="(item,index) in querylist" class="query">{{item.country_name}}<span 
					v-on:click="delquery($event,index,item)" 
					>×</span></span>
				<span class="query inputquerybox">
					<input class="inputquery"
						v-model="query" 
						v-on:keyup.enter="submitlist"
						v-on:keyup.down="downlist"
						v-on:keyup.up="uplist"
						>
				</span>
			</div>
			<div class="list-box" v-show="open">
				<transition-group 
					tag="ul"
					class="listbox"
					name="staggered-fade" 
					v-bind:css="false" 
					v-on:before-enter="beforeEnter" 
					v-on:enter="enter" 
					v-on:leave="leave"
					>
					<li class="list" 
						v-for="(item, index) in afterlist"
						v-bind:key="item.id" 
						v-bind:data-id="item.id"
						v-bind:data-index="index"
						v-bind:class="[{moveact:item.choice}]"
						v-on:click="clicklist($event,index,item)"
						>{{ item.country_name }}</li>
				</transition-group>
			</div>
		</div>
	</div>
</template>
<script>
	import Vue from 'vue';
	//import Velocity from '../../js/velocity.min.js';
	import list from '../../json/json.js';
	import querylist from '../../json/json1.js';
	var vm=new Vue({
		data:{
			//下拉菜单是否是打开状态，0是关闭，1是打开
			open:false,
			//当前选中的项的序号
			choice:-1,
			//输入框数据
			query:"",
			//输入框数据确认之后的数组
			querylist:querylist.data,
			//原始数组
			list:list.data
		},
		//计算属性
		computed: {
			//每次query添加之后就会比对，返回改变之后的list
			afterlist: function() {
				var vm = this;
				//console.log(this.list.length)
				return this.list.filter(function(item) {
					return item.country_name.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
				})
			}
		},
		//处理事件
		methods: {
			//点击选项执行，把选中的放入到querylist中，并从list中删除
			addquerylist: function() {
				var vm = this;
				vm.querylist.push(vm.afterlist[this.choice]);
				vm.list.splice(this.choice,1);
			},
			//点击列表项
			clicklist:function(event,index,item){
				this.choice=index;
				this.addquerylist(item.index);
			},
			//点击删除从querylist中删除
			delquery:function(event,index,item){
				var vm=this;
				this.list.push(item);
				//排序函数
				function compare(property){
				    return function(a,b){
				        var value1 = a[property];
				        var value2 = b[property];
				        return value1 - value2;
				    }
				}
				this.list.sort(compare("id"));
				this.querylist.splice(index,1);
			},
			//过渡前的状态
			beforeEnter: function(el) {
				//console.log(el.dataset)
				el.style.opacity = 0
				el.style.height = 0
			},
			//过渡的开始状态
			enter: function(el, done) {
				var delay = el.dataset.index * 5
				setTimeout(function() {
					Velocity(
						el, {
							opacity: 1,
							height: '26px'
						}, {
							complete: done
						}
					)
				}, delay)
			},
			//离开过渡的开始状态
			leave: function(el, done) {
				var delay = el.dataset.index * 5
				setTimeout(function() {
					Velocity(
						el, {
							opacity: 0,
							height: 0
						}, {
							complete: done
						}
					)
				}, delay)
			},
			//向下选择
			downlist:function(){
				this.choice++;
				if(this.choice>=this.afterlist.length){
					this.choice=this.afterlist.length
				}
				//此处执行展开下拉菜单功能
				this.openlist();
				this.movechoice();
			},
			//向上选择
			uplist:function(){
				this.choice--;
				if(this.choice<=-1){
					this.choice=-1;
					//此处执行收回下拉菜单功能
					this.closelist();
				}
				this.movechoice();
			},
			//提交选择
			submitlist:function(){
				var vm=this;
				if(this.choice>=0){
					vm.afterlist[this.choice].choice=false;
					this.addquerylist()
					this.query="";
				}
			},
			//展开下拉菜单
			openlist:function(){
				//console.log("展开下拉菜单")
				this.open=true;
			},
			//关闭下拉菜单
			closelist:function(){
				//console.log("关闭下拉菜单")
				this.open=false;
				this.choice=-1;
			},
			//点击querybox窗口时始终打开并聚焦
			clickquerybox:function(){
				var vm=this;
				var inputquery=document.getElementsByClassName("inputquery")[0];
				inputquery.focus();
				vm.open=true;
				
			},
			//up和down选中的项的效果
			movechoice:function(){
				var vm=this;
				this.addthischoice();
				//改变容器的scroll值
				var listbox=document.getElementsByClassName("list-box")[0];
				listbox.scrollTop=((this.choice+1)*26-300);
			},
			//给当前选中的列表添加特殊属性
			addthischoice:function(){
				var vm=this;
				if(vm.afterlist.length!=0&&vm.choice>=0){
					for (var i = 0; i < this.afterlist.length; i++) {
						vm.$set(this.afterlist[i],"choice",false);
					};
					vm.afterlist[this.choice].choice=true;
				}
			},
			//点击其他地方的时候关闭的事件写在这里
			otherclick:function(){
				var vm=this;
				//点击document的时候隐藏
				document.onclick=function(){
					vm.open=false;
				}
			},
			//list和querylist两个数组去重
			initlist:function(){
				if(querylist.length!=0){
					for (var i = 0; i < this.list.length; i++) {
						for (var j = 0; j < this.querylist.length; j++) {
							if(this.querylist[j].id==this.list[i].id){
								this.list.splice(i,1);
							}
						}
					};
				}
			}
		},
		//加载完成后执行
		mounted:function(){
			this.initlist();
			this.otherclick();
		}
	}).$mount('#app');
</script>
<style>
	ul,
	li {
		list-style: none;
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	.querydocker{
		width:100%;
		position: relative;
	}
	.query-box{
		width:100%;
		padding:5px 0;
		border:1px solid #aaa;
	}
	.query{
		display: inline-block;
		padding:1px 5px;
		margin:5px;
		border:1px solid #aaa;
		border-radius: 3px;
		cursor: pointer;
	}
	.inputquerybox{
		display:inline-block;
		border:0;
	}
	.inputquery{
		display: inline-block;
		width:100px;
		border:0;
		outline: none;
	}
	.list-box {
		width: 100%;
		height:300px;
		overflow-x: hidden;
		overflow-y: scroll;
		border:1px solid #aaa;
		border-top:0;
		position: absolute;
		bottom:-300px;
		left:0;
	}
	
	.list {
		width: 60%;
		height:26px;
		padding:0 10px;
		line-height: 26px;
		cursor: pointer;
	}
	.act{
		color: #ccc;
	}
	.moveact{
		background: #00A5FF;
		color:#fff;
	}
</style>