<template>
  <div class="container">
    <el-row
      type='flex'
      class="hoteldetail"
    >
      <el-col :span='8'>
        <nuxt-link :to="`/hotel/detail?id=${data.id}`">
        <img
          style="width:320px;height:210px;"
          :src='data.photos'
          alt=""
        >
</nuxt-link>
      </el-col>
      <el-col
        :span='10'
        class="detail"
      >
        <el-row>
          <h2><nuxt-link :to="`/hotel/detail?id=${data.id}`">{{data.name}}</nuxt-link></h2>
          <span style="color:#999">{{data.alias}}</span>
          <template v-if="data.hotellevel">
            <i
              v-for="(v,i) in data.hotellevel.level"
              :key='i'
              class="iconfont"
              style="color:#f90;fontSize:4px "
            >&#xe60e;</i>
          </template>

          <span style="color:#999">{{data.hoteltype.name||''}}</span>
        </el-row>
        <el-row>
          <el-col :span='10'>
            <el-rate
              v-model="data.stars"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
            >
            </el-rate>
          </el-col>
          <el-col :span='6'>
            <span>{{data.all_remarks}}条评价</span>
          </el-col>
          <el-col :span='8'>
            <span>4篇游记</span>
          </el-col>
        </el-row>
        <el-row>
          <i class="el-icon-location"></i>
          <span style="color:#666; fontSize:14px">位于：{{data.address}}</span>
        </el-row>
      </el-col>
      <el-col :span='6'>
        <el-row
          class="hotelweb"
          v-for="(value,index) in data.products"
          :key="index"
        >
          <a target="_blank" href="https://hotels.ctrip.com/hotel"><span>{{value.name}}</span><span>￥{{value.price}}起</span></a>
        </el-row>
        <!-- <el-row class="hotelweb">
              <a href="#"><span>艺龙</span><span>￥120起</span></a>
          </el-row>
          <el-row class="hotelweb">
              <a href="#"><span>Hotels.com</span><span>￥120起</span></a>
          </el-row> -->
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rate: 3.7
    }
  },
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
.container {
  width: 1000px;
  margin: 0 auto;
  padding: 10px;
  .hoteldetail {
    padding-bottom: 5px;
    border-bottom: 1px solid #ddd;
    > div {
      &:last-child {
        padding-top: 20px;
      }
    }
  }
  .detail {
    > div {
      padding: 5px;
    }
  }
  .hotelweb {
    border-bottom: 1px solid #ddd;
    height: 50px;
    a{
       color: #606266;
      font-size: 14px;
        span:last-child {
      float: right;
      color: #f90;
    }
    }
  }
}
</style>
