<template lang="html">
	<div class="nav">
		<el-row :gutter="20">
			<el-col :span="3">
				<div class="grid-content bg-purple">
					<router-link to="/">
						<a href="#">1</a>
					</router-link>
				</div>
			</el-col>
			<el-col :span="3">
				<div class="grid-content bg-purple">
					<router-link to="/a">
				        <a href="#">2</a>
				    </router-link>
				</div>
			</el-col>
			<el-col :span="3">
				<div class="grid-content bg-purple">
					<router-link to="/b">
				        <a href="#">3</a>
				    </router-link>
				</div>
			</el-col>
			<el-col :span="3">
				<div class="grid-content bg-purple">
					<router-link to="/c">
				        <a href="#">4</a>
				    </router-link>
				</div>
			</el-col>
			<el-col :span="3">
				<div class="grid-content bg-purple">
					<router-link to="/d">
				        <a href="#">5</a>
				    </router-link>
				</div>
			</el-col>
			<el-col :span="3">
				<div class="grid-content bg-purple">
					<router-link to="/e">
				        <a href="#">6</a>
				    </router-link>
				</div>
			</el-col>
			<el-col :span="3">
				<div class="grid-content bg-purple">
					<router-link to="/f">
				        <a href="#">7</a>
				    </router-link>
				</div>
			</el-col>
			<el-col :span="3">
				<div class="grid-content bg-purple">
					<router-link to="/g">
				        <a href="#">8</a>
				    </router-link>
				</div>
			</el-col>
		</el-row>
	</div>
</template>
<script>
export default {
    data() {
      return {
        activeName: 'home'
      };
    }
  };
</script>
<style>
	.el-row {
		background: #d3dce6;
		margin-bottom: 20px;
		&:last-child {
			margin-bottom: 0;
		}
	}
	
	.el-col {
		border-radius: 4px;
	}
	
	.bg-purple-dark {
		background: #99a9bf;
	}
	
	.bg-purple {
		background: #d3dce6;
	}
	
	.bg-purple-light {
		background: #e5e9f2;
	}
	
	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}
	
	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}
	.nav{
		text-align: center;
		overflow: hidden;
	}
	.nav a{
		display: block;
		height:36px;
		line-height: 36px;
	}
</style>