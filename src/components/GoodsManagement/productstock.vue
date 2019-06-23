<template>
    <div class="productstock">
        <div class="col-xl-12">
            <h3><i class="el-icon-s-shop"></i> 商品库存信息</h3>
        </div>
        <div class="card">
            <div class="card-header">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">

                    <el-form-item>
                        <el-input v-model="formInline.user" placeholder="SKU"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-input v-model="formInline.user1" placeholder="商品名称"></el-input>
                    </el-form-item>
                    
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">查询</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <el-divider></el-divider>
            <div class="formtable">
                <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="date" label="ID" width="180">
                </el-table-column>

                <el-table-column prop="name" label="SKU" width="180">
                </el-table-column>

                <el-table-column prop="address" label="商品名称">
                </el-table-column>

                <el-table-column prop="address" label="售价">
                </el-table-column>

                <el-table-column prop="address" label="生产日期">
                </el-table-column>

                <el-table-column prop="address" label="状态">
                </el-table-column>

                </el-table>
            </div>
            <div class="block">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" 
                    :current-page="currentPage1"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'productstock',
  data() {
      return {
        formInline: {
          user: '',
          user1:''
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
         }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
         }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
         }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
 
}
</script>

<style scoped>
.col-xl-12{
    background: #e9ecef;
    color: #868e96;
    border-radius: 0.25rem;
    padding: 0.3rem 1rem;
    
    font-size: 13px;
}
.card-header{
    background-color: rgba(0, 0, 0, 0.03);
    padding-top: 19px;
    padding-left: 5px;
}
.block{
  margin-left: 650px;
  margin-top: 20px;
}


</style>
