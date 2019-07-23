<template>
  <div class="detail">
    <!-- 面包屑 -->
    <div class="detail-crumbs">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '#' }">{{hotelInfo.big_cate}}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '#' }">{{hotelInfo.real_city}}{{hotelInfo.big_cate}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{hotelInfo.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 详情信息 -->
    <div class="detail-info">
      <span class="name">{{hotelInfo.name}}</span>
      <i class="iconfont iconhuangguan"></i>
      <i class="iconfont iconhuangguan"></i>
      <i class="iconfont iconhuangguan"></i>
      <i class="iconfont iconhuangguan"></i>
      <i class="iconfont iconhuangguan"></i>
      <p>{{hotelInfo.alias}}</p>
      <i class="el-icon-location icon"></i>
      <span>{{hotelInfo.address}}</span>
    </div>
    <!-- 图片详情 -->
    <div class="detail-img">
      <el-row>
        <el-col :span="16">
          <div class="img-left">
            <img :src="displayUrl" alt />
          </div>
        </el-col>
        <el-col :span="8">
          <div class="img-right">
            <el-row type="flex" justify="center">
              <el-col :span="24">
                <div
                  class="img-item"
                  v-for="(item,index) in imgList"
                  :key="index"
                  @click="changeImg(item.url)"
                >
                  <img :src="item.url" alt />
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 地图组件 -->
    <Hotelmap />
    <!-- 基本信息 -->
    <div class="baseinfo">
      <el-row class="base-item">
        <el-col :span="4">基本信息</el-col>
        <el-col :span="5">入住时间: 14:00之后</el-col>
        <el-col :span="5">离店时间: 12:00之前</el-col>
        <el-col :span="5">{{hotelInfo.creation_time}} / {{hotelInfo.renovat_time}}</el-col>
        <el-col :span="5">酒店规模: {{hotelInfo.roomCount}}间客房</el-col>
      </el-row>
      <el-row class="base-item">
        <el-col :span="4">主要设施</el-col>
        <el-col :span="20" class="facility">
          <span>吹风机</span>
          <span>外币兑换服务</span>
          <span>wifi</span>
          <span>电梯</span>
          <span>洗衣服务</span>
        </el-col>
      </el-row>
      <el-row class="base-item">
        <el-col :span="4">停车服务</el-col>
        <el-col :span="20">免费：提供免费停车位，酒店停车场</el-col>
      </el-row>
      <el-row class="base-item">
        <el-col :span="4">品牌信息</el-col>
        <el-col :span="20">希尔顿</el-col>
      </el-row>
    </div>
    <!-- 评论 -->
    <div class="comment">
      <div class="com-haed">
        <p>10条真实用户评论</p>
        <el-row>
          <el-col :span="4">
            <el-row :span="8">总评数：{{hotelInfo.all_remarks}}</el-row>
            <el-row :span="8">好评数：{{hotelInfo.common_remarks}}</el-row>
            <el-row :span="8">差评数：{{hotelInfo.bad_remarks}}</el-row>
          </el-col>
          <el-col :span="20">
            <el-row class="server">
              <el-col :span="6">
                <div class="recommend">
                  <div class="star">推荐</div>
                  <el-rate
                    v-model="value"
                    disabled
                    show-score
                    text-color="#ff9900"
                    :score-template="hotelInfo.star"
                    class="good"
                  ></el-rate>
                </div>
              </el-col>
              <el-col :span="6" class="circle">
                <span class="circle-item">
                  环境
                  <p>7.3</p>
                </span>
                <el-progress
                  type="circle"
                  :width="80"
                  :text-inside="true"
                  :stroke-width="3"
                  :percentage="25"
                  color="#f90"
                ></el-progress>
              </el-col>
              <el-col :span="6" class="circle">
                <span class="circle-item">
                  产品
                  <p>7.5</p>
                </span>
                <el-progress
                  type="circle"
                  :width="80"
                  :text-inside="true"
                  :stroke-width="3"
                  :percentage="50"
                  color="#f90"
                ></el-progress>
              </el-col>
              <el-col :span="6" class="circle">
                <span class="circle-item">
                  服务
                  <p>7.8</p>
                </span>
                <el-progress
                  type="circle"
                  :width="80"
                  :text-inside="true"
                  :stroke-width="3"
                  :percentage="75"
                  color="#f90"
                ></el-progress>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <Comment v-for="(item,index) in commentList" :key="index" :data="item" />
    </div>
  </div>
</template>
<script>
import Hotelmap from "@/components/hotel/hotelMap";
import Comment from "@/components/hotel/comment";
export default {
  components: {
    Hotelmap,
    Comment
  },
  data() {
    return {
      imgList: [
        { id: 1, url: "http://157.122.54.189:9093/images/hotel-pics/1.jpeg" },
        { id: 2, url: "http://157.122.54.189:9093/images/hotel-pics/2.jpeg" },
        { id: 3, url: "http://157.122.54.189:9093/images/hotel-pics/3.jpeg" },
        { id: 4, url: "http://157.122.54.189:9093/images/hotel-pics/4.jpeg" },
        { id: 5, url: "http://157.122.54.189:9093/images/hotel-pics/5.jpeg" },
        { id: 6, url: "http://157.122.54.189:9093/images/hotel-pics/6.jpeg" }
      ],
      displayUrl: "http://157.122.54.189:9093/images/hotel-pics/1.jpeg",
      value: 3.5,
      hotelInfo: {},
      commentList:[],
      hotelId:1,
    };
  },
  methods: {
    changeImg(url) {
      this.displayUrl = url;
    },
    getHotelDetail() {
      this.$axios({
        url: "/hotels",
        params: {
          id: this.hotelId
        }
      }).then(res => {
        this.hotelInfo = res.data.data[0];
        this.$store.commit("hotel/getHotelInfo", res.data.data[0]);
      });
    },
    getCommentInfo() {
      this.$axios({
        url: "/hotels/comments",
        params: {
          hotel: this.hotelId
        }
      }).then(res => {
        this.commentList = res.data.data;
      });
    }
  },
  mounted() {
    let {id} = this.$route.query
    this.hotelId =id
    this.getHotelDetail();
    this.getCommentInfo()
  }
};
</script>


<style lang="less" scoped>
.detail {
  width: 1000px;
  margin: 0 auto;
  .detail-crumbs {
    padding: 20px 0;
  }
  .detail-info {
    padding-bottom: 30px;
    .name {
      font-size: 25px;
      font-weight: 600;
    }
    i {
      color: #f90;
      font-size: 20px;
    }
    .icon {
      color: #409eff;
      font-size: 16px;
    }
  }
  .detail-img {
    img {
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
    .img-left {
      width: 640px;
      height: 360px;
    }
    .img-right {
      width: 360px;
      .img-item {
        float: left;
        width: 160px;
        height: 110px;
        padding: 0 14px 14px 0;
      }
    }
  }
  .baseinfo {
    .base-item {
      padding: 20px 0;
      border-bottom: 1px solid #ccc;
    }
    .facility {
      span {
        display: inline-block;
        padding: 0 8px 0 0;
      }
    }
  }
  .comment {
    .com-haed {
      padding: 30px 0;
      p {
        font-size: 16px;
        font-weight: bold;
        padding-bottom: 15px;
      }
      .server {
        color: #f90;
        .recommend {
          position: relative;
          .star {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            border: 2px solid #f90;
            opacity: 0.3;
            text-align: center;
            line-height: 70px;
            font-size: 24px;
            transform: rotate(-30deg);
          }
          .good {
            position: absolute;
            top: 26px;
            left: -22px;
          }
        }
        .circle {
          position: relative;
          .circle-item {
            position: absolute;
            top: 18px;
            left: 25px;
          }
        }
      }
    }
  }
}
</style>
