<template>
  <!-- <section class="travelcontianer"> -->
    <el-row type="flex" justify="space-between" class="travel">
      <!-- 旅游攻略详情 -->
      <Traveldetails/>
      <!-- 相关攻略侧边栏 -->
      <TravelAside />

    </el-row>
 
  <!-- </section> -->
</template>

<script>
import TravelAside from "@/components/post/travelAside.vue";
import Traveldetails from "@/components/post/traveldetails.vue";
export default {
  // 注册组件
  components: {
    TravelAside,
    Traveldetails
  },
  data() {
    return {
      pageIndex: 1, // 当前页数
      pageSize: 5, // 当前页面的条数
      total: 0 // 总条数
    };
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
  }
};
</script>

<style scoped lang="less">
.travel {
    width: 1000px;
    margin: 0 auto;
    padding-top: 20px;
}



</style>
