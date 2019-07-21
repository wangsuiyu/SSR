<template>
  <div class="comment">
    <el-row>
      <el-col :span="3">
        <div>
          <span class="user">
            <img src="http://127.0.0.1:1337/assets/images/avatar.jpg" alt />
          </span>
          <span>LV.8</span>
        </div>
        <p>2019-6-26</p>
      </el-col>
      <el-col :span="21">
        <p>我真的不想再骗你了，我想吃火锅，变态辣的那种</p>
        <el-input placeholder="添加回复" @focus="changeShow" v-if="isShow==0"></el-input>
        <div class="content" v-if="isShow==1">
          <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="content"></el-input>
          <el-button type="primary" size="mini" class="btn">回复</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: "",
      isShow: 0
    };
  },
  methods: {
    changeShow() {
      this.isShow = 1;
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
}
</style>

