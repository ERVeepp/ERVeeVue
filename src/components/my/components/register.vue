<template lang="html">
	<div class="sign">
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="账号" prop="account">
				<el-input v-model="ruleForm.account" auto-complete="off"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="pass">
				<el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
			</el-form-item>
			<el-form-item label="确认密码" prop="checkPass">
				<el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
			</el-form-item>
			<el-form-item label="年龄" prop="age">
			    <el-input v-model.number="ruleForm.age"></el-input>
		  	</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="handleSubmit">提交</el-button>
				<el-button @click="handleReset" class="fr">重置</el-button>
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
					if(this.ruleForm.checkPass !== '') {
						this.$refs.ruleForm.validateField('checkPass');
					}
					callback();
				}
			};
			//验证再次输入密码
			var validatePass2 = (rules, value, callback) => {
				if(value === '') {
					callback(new Error('请再次输入密码'));
				} else if(value !== this.ruleForm.pass) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			//验证年龄
			var checkAge = (rule, value, callback) => {
	        if (!value) {
		          return callback(new Error('年龄不能为空'));
		        }
		        setTimeout(() => {
		          if (!Number.isInteger(value)) {
		            callback(new Error('请输入数字值'));
		          } else {
		            if (value < 18) {
		              callback(new Error('必须年满18岁'));
		            } else {
		              callback();
		            }
		          }
		        },100);
		    };
			//
			return {
				ruleForm: {
					//账号
					account:'',
					//密码
					pass: '',
					//再次输入密码
					checkPass: '',
					//年龄
					age:'',
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
					}],
					checkPass: [{
						validator: validatePass2,
						trigger: 'blur'
					}],
					age: [{
						validator: checkAge,
						trigger: 'blur'
					}]
				}
			};
		},
		methods: {
			handleReset() {
				this.$refs.ruleForm.resetFields();
			},
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
</style>
