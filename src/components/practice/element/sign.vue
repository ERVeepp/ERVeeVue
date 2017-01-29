<template lang="html">
	<div class="sign">
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="账号" prop="account">
				<el-input v-model="ruleForm.account" auto-complete="off"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="pass">
				<el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="handleSubmit">登陆</el-button>
					<router-link to="/register" class="registerbutton fr">
						<el-button type="primary">注册</el-button>
					</router-link>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			//验证账号
			var validateaccount=(rules,value,callback)=>{
				if(value === '') {
					callback(new Error('请输入账号'));
				} else {
					if(this.ruleForm.account !== '') {
						console.log("此处每次输入都验证")
					}
					callback();
				}
			};
			//验证密码
			var validatePass = (rules, value, callback) => {
				if(value === '') {
					callback(new Error('请输入密码'));
				} else {
					if(this.ruleForm.pass !== '') {
						console.log("此处每次输入都验证")
					}
					callback();
				}
			};
			//
			return {
				ruleForm: {
					//账号
					account:'',
					//密码
					pass: ''
				},
				//验证规则
				rules: {
					account:[{
						validator: validateaccount,
						trigger: 'blur'
					}],
					pass: [{
						validator: validatePass,
						trigger: 'blur'
					}]
				}
			};
		},
		methods: {
			handleSubmit(ev) {
				this.$refs.ruleForm.validate((valid) => {
					if(valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			}
		}
	}
</script>

<style lang="css">
	.sign {
		width: 50%;
		margin: 0 auto;
	}
	.registerbutton{
		color:#fff;
	}
</style>
