<template>
  <div class="cmt-floor" v-if="data.parent">
    <!-- 递归 -->
    <Cmtfloor :data="data.parent" />

    <div class="cmt-content">
      <div class="cmt-info">
        {{data.parent.account.nickname}}
        <i>{{data.parent.account.created_at|formatDate}}</i>
        <span>{{data.parent.level}}</span>
      </div>
      <p class="cmt-message">{{data.parent.content}}</p>
      <el-row type="flex" v-if="data.parent.pics.length">
        <div v-for="(item,index) in data.parent.pics" :key="index" class="cmt-pic">
          <img :src="$axios.defaults.baseURL+item.url" />
        </div>
      </el-row>
      <div class="cmt-ctrl">
        <a href="javascript:;">回复</a>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "Cmtfloor",
  props: ["data"],
  filters: {
    formatDate: function(value) {
      return moment(value).format("YYYY-MM-DD hh:mm ");
    }
  },
  mounted() {
    // console.log(this.data.parent);
  }
  // data(){
  //   return{
  //     // 重新赋值一份
  //     dataList=[

  //     ],
  //   }
  // }
};
</script>

<style lang="less" scoped>
.cmt-floor {
  background: #f9f9f9;
  border: 1px solid #ddd;
  padding: 2px;
  .cmt-content {
    padding: 5px 10px 0;
    .cmt-info {
      font-size: 12px;
      color: #666;
      i {
        color: #999;
      }
      span{
        float: right;
      }
    }
    .cmt-message {
      margin-top: 10px;
    }
    .cmt-pic {
      width: 80px;
      height: 80px;
      border-radius: 6px;
      overflow: hidden;
      margin-right: 5px;
      margin-top: 10px;
      padding: 5px;
      border: 1px dashed #ddd;
      img {
        display: block;
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
        cursor: pointer;
      }
    }
    .cmt-ctrl {
      height: 20px;
      line-height: 20px;
      font-size: 12px;
      color: #1e50a2;
      text-align: right;
    }
  }
}
</style>
