<template>
  <div class="postContent">
    <div class="postGuide"  v-if="data.images.length >=2"
      >
      <nuxt-link :to="`/post/detail?id=${data.id}`" ><h4>{{data.title}}</h4></nuxt-link>
      <nuxt-link :to="`/post/detail?id=${data.id}`" ><p>{{data.summary}}</p></nuxt-link>
      
      <div class="photo">
        <a :href="`/post/detail?id=${data.id}`">
          <img :src="data.images[0]" alt="">
        </a>
        <a :href="`/post/detail?id=${data.id}`">
          <img :src="data.images[1]" alt="">
        </a>
        <a :href="`/post/detail?id=${data.id}`">
          <img :src="data.images[2]" alt="">
        </a>
      </div>
      <div class="bottom">
        <div class="info">
          <div class="one">
            <i class="el-icon-location-outline"></i>
            <span>{{data.cityName}}</span>
          </div>
          <div class="two">
            by <img src="http://127.0.0.1:1337/assets/images/avatar.jpg" alt="">
            <span>{{data.account.nickname}}</span>
          </div>
          <div class="three">
            <i class="el-icon-view"></i>
            <span>{{data.watch}}</span>
          </div>
        </div>
        <div class="goods">
          <span>{{data.like || 0}}</span>&nbsp;赞
        </div>
      </div>
    </div>
    <div class="postGuide1"
    v-if="data.images.length < 2">
      <a :href="`/post/detail?id=${data.id}`">
        <img :src="data.images[0]" alt="">
      </a>
      <div class="postsContainer">
        <a :href="`/post/detail?id=${data.id}`"><h4>{{data.title}}</h4></a>
        <a :href="`/post/detail?id=${data.id}`"><p>{{data.summary}}</p></a>
        <div class="bottom">
          <div class="info">
            <div class="one">
              <i class="el-icon-location-outline"></i>
              <span>{{data.cityName}}</span>
            </div>
             <div class="two">
            by <img src="http://127.0.0.1:1337/assets/images/avatar.jpg" alt="">
            <span>{{data.account.nickname}}</span>
          </div>
            <div class="three">
              <i class="el-icon-view"></i>
              <span>{{data.watch}}</span>
            </div>
          </div>
          <div class="goods">
            <span>{{data.like || 0}}</span>&nbsp;赞
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
        data: {
            type: Object,   // 声明属性的类型
            default: {}     // 属性的默认值
        }
    },
  data() {
    return {
    
    }
  },

  mounted() {
    // this.$axios({
    //   url: '/posts',
    // })
    //   .then(res => {
    //     // console.log(res);
    //     this.postsList = res.data.data
    //     console.log(this.postsList);

    //   })
    console.log(this.data);
    
  }

}
</script>

<style lang="less" scoped>
.postContent {
  width: 700px;

  h4 {
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: 400;
    &:hover{
      cursor: pointer;
      color:orange;
    }
  }
  p {
    max-width: 700px;
    font-size: 14px;
    color: grey;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    &:hover{
      cursor: pointer;
    }
  }

  .postGuide {
    border-bottom: 1px solid #ccc;
    margin: 20px 0 10px 0;
    .photo {
      margin-top: 14px;
      width: 700px;
      display: flex;
      justify-content: space-between;

      img {
        max-width: 220px;
        height: 150px;
      }
    }
  }
  .postGuide1 {
    display: flex;
    justify-content: space-between;
    margin: 22px 0 16px 0;
    border-bottom: 1px solid #ccc;
    img {
      max-width: 220px;
      height: 150px;
      margin-right: 18px;
    }
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;

    .info {
      display: flex;
      font-size: 12px;
      color: grey;

      .two {
        margin: 0 8px;
        &:hover{
          cursor: pointer;
        }

        img{
          width: 18px;
          height: 18px;
          vertical-align: middle;
          margin-right: 0;
        }

        span {
          color: orange;
          padding: 0 4px;
        }
      }
    }
    .goods {
      color: orange;
    }
  }
}
</style>

