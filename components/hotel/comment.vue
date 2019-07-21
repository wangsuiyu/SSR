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
        <p>2019-6-26</p>
      </el-col>
      <el-col :span="21">
        <p>我真的不想再骗你了，我想吃火锅，变态辣的那种</p>
        <div class="content">
          <el-input type="textarea" :rows="isShow" placeholder="添加回复" 
          v-model="content" 
          @focus="changDis"
          @blur="changSh"
          ></el-input>
          <el-button type="primary" size="mini" class="btn" v-if="isShow==3">回复</el-button>
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
      isShow: 1
    };
  },
  methods: {
    changDis(){
        this.isShow = 3
    },
    changSh(){
        this.isShow = 1
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

