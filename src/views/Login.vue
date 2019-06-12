<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm.account" placeholder="账号"></el-input>
    </el-form-item>

    <el-form-item prop="checkPass">
      <el-input type="password" v-model="ruleForm.checkPass" placeholder="密码" show-password></el-input>
    </el-form-item>

    <el-checkbox class="remember">记住密码</el-checkbox>

    <el-form-item style="width:100%;" class="twobutton">
      <el-button type="primary" style="width:42%;" @click.native.prevent="handleSubmit">登录</el-button>
      <el-button type="primary" style="width:42%;" @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>

  </el-form>
</template>

<script>

export default {
  name : 'login',
  data() {
      return {
        ruleForm: {
          account: '',
          checkPass: ''
        },
        rules: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
          ],
          checkPass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ]
        },
        checked: true
      };
    },
  methods:{
    resetForm(formName) {
        this.$refs['ruleForm'].resetFields();
    },
     handleSubmit(ev) {
        var _this = this;
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            this.$router.push({ path: '/home' });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }

  }
}
</script>

<style scoped>
.login-container {
    border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
    .twobutton{
      margin-left: 23px;
    }
</style>
