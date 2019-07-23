<template>
  <div class="comment">
    <el-row>
      <el-col :span="3">
        <div>
          <span class="user">
            <img src="http://127.0.0.1:1337/assets/images/avatar.jpg" alt />
          </span>
          <span>LV.8</span>
          <p>地球发电机</p>
        </div>
        <p>{{ranTime}}</p>
      </el-col>
      <el-col :span="21">
        <p>{{data.content}}</p>
        <div class="content">
          <el-input
            type="textarea"
            :rows="isShow"
            placeholder="添加回复"
            v-model="content"
            @focus="changDis"
            @blur="changSh"
          ></el-input>
          <el-button type="primary" size="mini" class="btn" v-if="isShow==3">回复</el-button>
        </div>
        <div class="follow" v-for="(v,i) in data.followed" :key="i">
          <el-row v-if="data.followed.length>0">
            <el-col :span="3">
              <div>
                <span class="user">
                  <img src="http://127.0.0.1:1337/assets/images/avatar.jpg" alt />
                </span>
                <span>LV.8</span>
                <p>地球发电机</p>
              </div>
              <p>{{domTime}}</p>
            </el-col>
            <el-col :span="21">
              <p>{{v.content}}</p>
              <div class="content">
                <el-input
                  type="textarea"
                  :rows="isPlay"
                  placeholder="添加回复"
                  v-model="content"
                  @focus.prevent="changPly"
                  @blur.prevent="changOw"
                ></el-input>
                <el-button type="primary" size="mini" class="btn" v-if="isPlay==3">回复</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import moment from "moment";
export default {
  props: ["data"],
  data() {
    return {
      content: "",
      isShow: 1,
      isPlay: 1
    };
  },
  computed: {
    ranTime() {
      var timer = moment(this.data.created_at).format("YYYY-MM-DD");
      return timer;
    },
    domTime() {
      if (!this.data.followed.length > 0) {
        return;
      }
      var timel = moment(this.data.followed[0].created_at).format("YYYY-MM-DD");
      return timel;
    }
  },
  methods: {
    changDis() {
      this.isShow = 3;
    },
    changSh() {
      this.isShow = 1;
    },
    changPly() {
      this.isPlay = 3;
    },
    changOw() {
      this.isPlay = 1;
    }
  }
};
</script>
<style lang="less" scoped>
.comment {
  padding: 40px 0;
  .user {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 2px solid #f90;
    border-radius: 30px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 30px;
    }
  }
  p {
    padding-bottom: 5px;
  }
  span {
    color: red;
  }
  .content {
    position: relative;
    .btn {
      position: absolute;
      right: 0;
    }
  }
  .follow {
    padding: 20px 0;
  }
}
</style>

