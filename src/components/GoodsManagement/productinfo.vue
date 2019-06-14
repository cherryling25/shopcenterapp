<template>
<div id="productinfo">
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="商品信息" name="first">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">

          <el-form-item>
            <el-input v-model="formInline.user" placeholder="SKU"></el-input>
          </el-form-item>

          <el-form-item>
            <el-input v-model="formInline.user" placeholder="商品名称"></el-input>
          </el-form-item>
          
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>

        <el-divider></el-divider>

        <div class="formtable">
            <el-table :data="tableData" stripe style="width: 100%" height="250">
              <el-table-column prop="date" label="日期" width="180">
              </el-table-column>

              <el-table-column prop="name" label="姓名" width="180">
              </el-table-column>

              <el-table-column prop="address" label="地址">
              </el-table-column>

            </el-table>
      </div>

    </el-tab-pane>


    <el-tab-pane label="新增商品" name="second">
      <div class="add-product-form">

      <div class="col-lg-6">

      <el-form>
        <label >&nbsp;SKU</label>
        <el-input v-model="input1"></el-input>
      
        <label >&nbsp;商品名称</label>
        <el-input v-model="input2"></el-input>
        
        <label >&nbsp;售价</label>
        <el-input v-model="input3"></el-input>

        <label >&nbsp;保质期</label>
        <el-input v-model="input4"></el-input>

        <label >&nbsp;生产商</label>
        <el-input v-model="input5"></el-input>

        <label >&nbsp;地址</label>
        <el-input v-model="input6"></el-input>

        <label >&nbsp;食品经营许可证</label>
        <el-input v-model="input7"></el-input>

        <label >&nbsp;加盟热线</label>
        <el-input v-model="input8"></el-input>
        
        <el-form-item class="twobutton">
          <el-button style="background: #ccc">提交</el-button>
          <el-button style="background: #ccc">重置</el-button>
        </el-form-item>
          
      </el-form>
  </div>
      </div>
      </el-tab-pane>

    <el-tab-pane label="打印标签" name="third">
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
    </el-tab-pane>
  </el-tabs>


</div>
</template>

<script>
export default {
  name: 'productinfo',
  data() {
      return {
        activeName: 'first',
        active: 0,
        input: '',
        input1: '',
        input2: '',
        input3: '',
        input4: '24小时',
        input5: '佛山市楷博食品有限公司',
        input6: '佛山市顺德区乐从镇腾兴路A76-78',
        input7: 'JY24406060163781',
        input8: '4000-5566-08',
        formInline: {
          user: '',
          region: ''
        },
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
         } , {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
          // 数据没有增加
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      next() {
        if (this.active++ > 2) this.active = 0;
      },
      onSubmit() {
        console.log('submit!');
      }
    }
}
</script>

<style scoped>
.formtable{
  width: 1175px;
  height: 450px;
}
.el-col .el-input {
  margin-top: 29px;
}

.contains{
  margin-top: 20px;
  margin-left: 33px;
}

#product-label-card{
  width: 600px;
  height: 480px;
  box-shadow: 1px 1px 4px darkgrey;
  border-bottom: 2px solid #eee;
  margin-left: 250px;
  margin-top: 80px;
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

.col-lg-6 {
  max-width: 50%;
  padding-left: 10px;
}
label {
    display: inline-block;
    margin-top: 1.5rem;
    margin-bottom: 5px;
}

.twobutton{
  margin-left: 445px;
  margin-top: 20px;
}


</style>
