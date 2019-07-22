<template>
  <div class="navContainer">
    <el-row type="flex" align="middle" class="navMenu">
        <div class="hid"></div>
      <el-row type="flex" justify="space-between" align="middle" class="navList" v-for="(item,index) in navList" :key="index" @mouseover.native="handleShow(index)" @mouseout.native="handleHidden">
        <p>{{item.type}}</p>
        <span class="el-icon-arrow-right"></span>
        <el-row type="flex" class="menu" v-show="currentTab === index">
            <div class="hid"></div>
          <el-row type="flex" align="middle" class="menuList" v-for="(item,index) in item.children" :key="index">
            <span>{{index+1}}</span>
            <span>{{item.city}}</span>
            <span>{{item.desc}}</span>
          </el-row>
        </el-row>
      </el-row>
    </el-row>
    <div class="recommend">
        <p>推荐城市</p>
        <a href="#">
            <img src="http://157.122.54.189:9093/images/pic_sea.jpeg" alt="">
        </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [],
      currentTab: '',
    };
  },
  methods: {
    handleShow(index) {
      this.currentTab = index
    },
    handleHidden() {
      this.currentTab = -1
    }
  },
  mounted() {
    this.$axios({
      url: '/posts/cities',
      method: 'GET',
    })
      .then(res => {
        console.log(res);
        this.navList = res.data.data
      })
  }
}
</script>

<style lang="less" scoped>
.navMenu {
  border: 1px solid #ccc;
  width: 260px;
  height: 200px;
  flex-direction: column;
  position: relative;
  border-right: none;
  border-bottom: none;

  .navList {
    flex: 1;
    width: 100%;
    // border: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    padding: 0 20px;
    position: static !important;
    z-index: 3;
    &:hover {
      color: orange;
      border-right: 1px solid #fff;
    }

    .menu {
      width: 350px;
      height: 250px;
      background-color: #fff;
      border: 1px solid #ccc;
      border-left: none;
      position: absolute;
      z-index: 2;
      top: -1px;
      left: 259px;
      flex-direction: column;
      
     .hid{
      height: 50px;
      width: 200px;
    //   background: greenyellow;
      position: absolute;
      top: 198px;
      left: 0px;
      border-left: 1px solid #ccc;
    //   z-index: 99;
  }

      .menuList {
        flex: 1;

        span {
          padding-left: 10px;
          cursor: pointer;
        }

        span:first-child {
          color: orange;
          font-size: 26px;
          font-style: italic;
        }

        span:nth-child(2) {
          color: orange;
          &:hover {
            text-decoration: orange underline;
          }
        }

        span:last-child {
          color: #ccc;
          &:hover {
            text-decoration: #ccc underline;
          }
        }
      }
    }
  }
}
.recommend{
    margin-top: 20px;
    width: 260px;

    p{
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #ccc;
        font-size: 22px;
        margin-bottom: 16px;
    }

    img{
        width: 100%;
    }
}
</style>

