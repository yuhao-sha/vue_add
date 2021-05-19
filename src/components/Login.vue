<template>
  <div class="login_container">
    
      <div class="login_box">
      <!-- 头像 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="">
      </div>
      <!-- 登录 -->
      <el-form  
      class="form_index" 
      label-width="0px"
      :model="loginFrom"
      :rules="loginFromRules"
      ref="loginFromRef"
      >
        <!-- 账户 -->
        <el-form-item prop="name">
          <el-input 
          prefix-icon="el-icon-name"
          v-model="loginFrom.name"
          placeholder="请输入账户"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="passwd">
          <el-input 
          prefix-icon="el-icon-unlock"
          show-passwd
          v-model="loginFrom.passwd"
          placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btns">
         <el-button type="primary" @click="login">登录</el-button>
         <el-button type="info" @click="resetLoginFrom">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      // 登录双向绑定
      goodsLists:"",
      loginFrom: {
        name:'',
        passwd:''
      },
      // 登录验证
      loginFromRules:{
        // 用户是否合法
        name: [
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
        ],
        // 密码是否合法
        passwd: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    
    }
  },
  methods:{
    // 重置登录表单
    resetLoginFrom(){
      // console.log(this);
      this.$refs.loginFromRef.resetFields();
    },
    // 登录验证
    login(){
      this.$refs.loginFromRef.validate(async valid => {
      if(!valid) return
      const { data:res } =await this.$http.post("login", this.loginFrom)
      console.log(res)
      if(res.code !== 200) return this.$message.error("登录失败")
      console.log('登录成功')
      });

    },
    
  },
  
}
</script>

<style lang="less" scoped>
.login_container{
  background-color: #2b4b6b;
  height: 100%;
}
.login_box{
  width: 450px;
  height: 300px;
  background-color: #fff;
  position:absolute;
  left : 50%;
  top:50%;
  transform: translate(-50%,-50%);
  border-radius: 5%;
  &:hover{
    box-shadow: 0 2 10px #eee;
  }
  .avatar_box{
    height: 130px;
    width: 130px;
    background-color: #fff;
    left : 50%;
    top:50%;
    transform: translate(-50%,-150%);
    position: relative;
    border-radius:50%;
    box-shadow: 0 0 10px #eee;
    padding: 10px;
    img{
      height: 100%;
      width: 100%;
      border-radius:50%;
      background-color: #eee;
      box-shadow: 0 0 10px #eee;
    }
 }
 .form_index{
   margin: -40px 20px 0 20px;
   
 }
}
.btns{
  display:flex;
  justify-content:flex-end;
}
// .btns,
// .form_admin,
// .form_paw{
//   padding:0  20px;
// }
</style> 