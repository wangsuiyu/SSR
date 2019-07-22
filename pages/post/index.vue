<template>
  <!-- 旅游攻略主页 -->
  <section class="postContainer">
      <el-row type="flex" justify="space-between">
          <!-- 侧边栏 -->
          <div class="aside">
              <NavsItem /> 
          </div>
          <!-- 主要内容 -->
          <div class="main">
              <!-- 过滤搜索栏 -->
              <FilterSearch />

              <!-- 攻略内容 -->
              <PostMain />
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
    components: {
        NavsItem,
        PostMain,
        FilterSearch
    }
}
</script>

<style lang="less" scoped>
.postContainer{
    min-width: 1000px;
    margin: 0 auto;
    margin-top: 20px;
    max-width: 1000px;
    

    .aside{
        width: 200px;
        height: 1000px;
    }

    .main{
        width: 700px;
    }
}
</style>


