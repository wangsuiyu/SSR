<template>
  <!-- 旅游攻略主页 -->
  <section class="postContainer">
    <el-row type="flex" justify="space-between">
      <!-- 侧边栏 -->
      <div class="aside">
        <NavsItem @getData = 'getData' />
      </div>
      <!-- 主要内容 -->
      <div class="main">
        <!-- 过滤搜索栏 -->
        <FilterSearch @getData = 'getData'  />

        <!-- 攻略内容 -->
        <PostMain v-for="(item,index) in postsList" :key="index" :data='item' />

        <!-- 分页器 -->
        <div class="paging">
          <el-pagination 
          @size-change="handleSizeChange" 
          @current-change="handleCurrentChange" 
          :current-page="pageIndex" :page-sizes="[1, 2, 3, 4]" 
          :page-size="pageSize" 
          layout="total, sizes, prev, pager, next, jumper" 
          :total="total">
          </el-pagination>
        </div>
      </div>
    </el-row>
    </el-row>
  </section>

</template>

<script>
import NavsItem from "@/components/post/navsItem";
import FilterSearch from "@/components/post/filterSearch";
import PostMain from "@/components/post/postMain";
export default {
  data() {
    return {
      //获取所有文章数据
      postsList: [],
      //当前页面的条数
      pageSize: 2,

      //当前页数
      pageIndex: 1,
      //总条数
      total: 0,
    }
  },
  methods: {
    getData(params) {        
            this.$axios({
            url:'/posts',
            params
        })
        .then(res=>{
            // console.log(res);
            this.postsList = res.data.data
            if(this.total ===0){
                this.total = res.data.data.length
                this.postsList = res.data.data.slice(0,2)
                return
            }
            this.total = res.data.data.length
        }) 
    },
 
    handleSizeChange(v) {
        this.pageSize = v
        const params = {
            _start:(this.pageIndex-1) * this.pageSize,
            _limit:this.pageSize
        }
        this.getData(params)    
    },
    handleCurrentChange(v) {
        // console.log();
        
        this.pageIndex = v
        const params = {
            _start:(this.pageIndex-1) * this.pageSize,
            _limit:this.pageSize
        }
        this.getData(params)
    },
  },
  mounted() {
      this.getData()
  },
  components: {
    NavsItem,
    PostMain,
    FilterSearch
  },
}
</script>

<style lang="less" scoped>
.postContainer {
  min-width: 1000px;
  margin: 0 auto;
  margin-top: 20px;
  max-width: 1000px;

  .aside {
    width: 200px;
    // height: 1000px;
  }

  .main {
    width: 700px;
    margin-bottom: 20px;
  }
}
</style>


