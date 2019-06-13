<template>
  
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="商品信息" name="first">
      商品信息
    </el-tab-pane>

    <el-tab-pane label="新增商品" name="second">
      新增商品
      </el-tab-pane>

    <el-tab-pane label="打印标签" name="third">
      <el-steps :active="active" finish-status="success" space='280px'>
      <el-step title="输入SKU"></el-step>
      <el-step title="选择生产日期">
        
      </el-step>
      <el-step title="设置打印个数"></el-step>
      <el-step title="读取RFID"></el-step>
      </el-steps>

       <el-col :span="3" style="margin-top=314px;">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </el-col>
    

      <p style="margin-top: 12px; cursor: pointer;" @click="next">下一步</p>

      </el-tab-pane>

  </el-tabs>
   
</template>

<script>
export default {
  name: 'productinfo',
  data() {
      return {
        activeName: 'first',
        active: 0,
        input: ''
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
}
</script>

<style scoped>

</style>
