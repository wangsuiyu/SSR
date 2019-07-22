<template>
    <div class="flights-content">
            <!-- 旅游攻略面包屑 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">旅游攻略</el-breadcrumb-item>
        <el-breadcrumb-item>攻略详情</el-breadcrumb-item>
      </el-breadcrumb>
      <!-- 2. 大标题 -->
      <h1>{{strategy.title}}</h1>
      <!-- 3. 旅游攻略时间 -->
      <div class="post-info">
        <span>攻略：{{strategy.created_at|formatDate}}</span>
        <span>阅读：{{strategy.watch}}</span>
      </div>
      <!-- 4. 旅游攻略内容 -->
      <!-- <div class="post-content" v-html="strategy.content"> </div> -->
      <!-- 5. 旅游攻略 -->
           <!-- 分页布局 -->
      <!-- size-change：切换条数时候触发 -->
      <!-- current-change: 切换页数时候触发 -->
      <!-- page-size: 默认一页多少条数据 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageIndex"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>

    </div>
</template>

<script>
import moment from "moment";
export default {
  mounted () {
    this.$axios({
      url:"/posts/"+this.$route.query.id,
    }).then(res=>{
      // 获取攻略数据
      this.strategy=res.data
    })
  },
  methods: {
    // 条数切换, value是当前选中的条数
    handleSizeChange(value) {
      this.pageSize = value;
    },

    // 页数的切换，value是选中的页数
    handleCurrentChange(value) {
      this.pageIndex = value;
    }
  },
  data () {
    return {
      strategy:{},
      pageIndex: 1, // 当前页数
      pageSize: 5, // 当前页面的条数
      total: 0 // 总条数
    }
  },  
  filters: {
    formatDate: function(value) {
      return moment(value).format("YYYY-MM-DD hh:mm ");
    }
  }
};
</script>

<style scoped lang="less">
.flights-content {
  width: 700px;  
  font-size: 14px;
    h1{
      font-size: 2em;
      padding: 20px 0;
      border-bottom: 1px solid #ddd;
    };
    .post-info{
      color: #999;
      padding: 20px;
      text-align: right;
          
    };
    .post-content{
      line-height: 1.5;
    }
}
</style>
