<template>
    <div class="contains">
        <el-steps :active="active" finish-status="success" space='280px'>
        <el-step title="输入SKU"></el-step>
        <el-step title="选择生产日期">
          
        </el-step>
        <el-step title="设置打印个数"></el-step>
        <el-step title="读取RFID"></el-step>
        </el-steps>

      
        <el-col :span="3">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </el-col>
    

        <p style="margin-top: 86px; margin-left: 13px; cursor: pointer;" @click="next">下一步</p>

        <div id="product-label-card">
          <div>
              <span class="product-label-price">产品名称：</span>
          </div>
          <br/>
          
          <div class="product-label-div">
              <span class="product-label-content">生产商：佛山市楷博食品有限公司</span>
          </div>

          <div class="product-label-div">
            <span class="product-label-content">食品经营许可证：JY24406060163781</span>
          </div>

          <div class="product-label-div">
            <span class="product-label-content">地址：佛山市顺德区乐从镇腾兴路A76-78</span>
          </div>

          <div class="product-label-div">
            <span class="product-label-content">拎包加盟热线：4000-5566-08</span>
          </div>

          <div class="product-label-div">
            <span class="product-label-content">保质期：48小时</span>
          </div>

          <div class="product-label-div">
            <span class="product-label-content">生产日期: </span>
          </div>

          <div class="product-label-price">
              <span>售价￥</span>
          </div>
        </div>


      </div>
</template>

<script>
export default {
  name: 'productlabel'
 
}
</script>

<style scoped>
.contains{
  margin-top: 20px;
  margin-left: 33px;
}

.el-col .el-input {
  margin-top: 29px;
}

.product-label-price {
    padding-left: 15px;
    padding-top: 5px;
    height: 50px;
    font-size: 40px;
}

.product-label-div {
    font-size: 20px;
    padding-left: 15px;
    padding-top: 10px;
    height: 40px;
    width: 100%;
    
}

#product-label-card{
  width: 600px;
  height: 480px;
  box-shadow: 1px 1px 4px darkgrey;
  border-bottom: 2px solid #eee;
  margin-left: 250px;
  margin-top: 80px;
}
</style>

