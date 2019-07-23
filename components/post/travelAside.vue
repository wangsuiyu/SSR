<template>
  <div class="aside">
    <div class="strategy">
      <h4 class="aside-title">相关攻略</h4>

      <div class="recommend-list">
        <nuxt-link
          :to="`/post/detail?id=${item.id}`"
          class="recommend-item"
          v-for="(item,index) in dataList"
          :key="index"
          @click="changeRouter(item.id)"
        >
          <el-row type="flex" class="post-imgText">
            <div class="post-img">
              <img :src="item.images[0]" alt />
            </div>x
            <div class="post-text">
              <div class="text-title">{{item.title}}</div>
              <p>{{item.updated_at|formatDate}} 阅读 {{item.watch}}</p>
            </div>
          </el-row>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      dataList: []
    };
  },
  mounted() {
    // 请求推荐文章数据
    this.$axios({
      url: "/posts/recommend",
      method: "GET"
    }).then(res => {
      this.dataList = res.data.data;
      console.log(this.dataList);
    });
    // this.history =  JSON.parse( localStorage.getItem("airs") || `[]` );
  },

  filters: {
    formatDate: function(value) {
      return moment(value).format("YYYY-MM-DD hh:mm ");
    }
  },

};
</script>

<style scoped lang="less">
.aside {
  width: 280px;
  .aside-title {
    font-weight: 400;
    font-size: 18px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
  }
  .recommend-item {
    display: block;
    padding: 20px 0;
    border-bottom: 1px solid #ddd;
    .post-img {
      width: 100px;
      height: 80px;
      flex-shrink: 0;
      background: #ddd;
      overflow: hidden;
      margin-right: 10px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .post-text {
      flex: 1;
      position: relative;
      div {
        position: relative;
        line-height: 1.4em;
        height: 2.8em;
        overflow: hidden;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        display: -webkit-box;
        overflow: hidden;
        white-space: normal !important;
        text-overflow: ellipsis;
        word-wrap: break-word;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      p {
        position: absolute;
        bottom: 0;
        left: 0;
        font-size: 12px;
        color: #999;
      }
    }
  }
}
</style>