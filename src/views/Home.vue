<template>
  <div class="home">

    <el-container style="height: 709px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">

      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>商品管理</template>
        <el-menu-item-group>
          <router-link to="/productinfo" class="r1">
            <el-menu-item index="1-1">商品档案</el-menu-item>
          </router-link>
          <router-link to="/productstock" class="r1">
            <el-menu-item index="1-2">商品库存</el-menu-item>
          </router-link>
          <router-link to="/productlabel" class="r1">
            <el-menu-item index="1-3">商品标签</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>订单管理</template>
        <el-menu-item-group>
          <el-menu-item index="2-1">订单查询</el-menu-item>
         <!-- <el-menu-item index="2-2">选项2</el-menu-item>-->
         </el-menu-item-group>
      </el-submenu>


      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>报表中心</template>
        <el-menu-item-group>
          <el-menu-item index="3-1">销量排行</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

    </el-menu>
  </el-aside>
  
  <el-container>
    
    <el-header style="text-align: right; font-size: 12px">
      <h2>无人售货后台管理</h2>
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
          
        </el-dropdown-menu>
        
      </el-dropdown>

      <span>Cherry</span>
      
    </el-header>
    
    <el-main>
      <!--<productinfo></productinfo>-->
      <router-view></router-view>
      
    </el-main>

  </el-container>
  </el-container>
  </div>
</template>

<script>
//import productinfo from '../components/GoodsManagement/productinfo.vue'
export default {
  name: 'home',
  component: {
    //productinfo
  },
  mounted() {
			this.$router.push({ path: '/home' });
	},
  data() {
      return {
        sysUserName: '',
				sysUserAvatar: ''
      }
    },
    methods: {
      //退出登录
			logout: function () {
				var _this = this;
				this.$confirm('确认退出吗?', '提示', {
					//type: 'warning'
				}).then(() => {
					sessionStorage.removeItem('user');
					_this.$router.push('/login');
				}).catch(() => {

				});
      }
    },
    mounted() {
			var user = sessionStorage.getItem('user');
			if (user) {
				user = JSON.parse(user);
				this.sysUserName = user.name || '';
				this.sysUserAvatar = user.avatar || '';
			}

		}
}
</script>



<style scoped>

.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }

  .el-header h2{
    float: left;
  }

  .r1{
    text-decoration: none;
  }
</style>
