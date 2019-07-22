<template>
  <div class="container">
    <el-row type='flex' class="hoteldetail">
      <el-col :span='8'>
        <img
          style="width:320px;height:210px;"
          src="http://qcloud.dpfile.com/pc/wQ2ejOSmhB4OoEq1LYPHp_2RhNciyW026YiQFr_EEZsQrI_ZB6abZPwgKDOmI03U3dWYFEM5hoslgWXTJDjSPA.jpg"
          alt=""
        >
      </el-col>
      <el-col :span='10' class="detail">
        <el-row>
          <h2>好来阁商务宾馆</h2>
          <span>hao lai ge</span>
          <i
            class="iconfont"
            style="color:#f90;fontSize:4px "
          >&#xe60e;</i>
          <i
            class="iconfont"
            style="color:#f90;fontSize:4px "
          >&#xe60e;</i>
          <i
            class="iconfont"
            style="color:#f90;fontSize:4px "
          >&#xe60e;</i>
          <span>经济型</span>
        </el-row>
        <el-row>
            <el-col :span='10'>
          <el-rate
            v-model="rate"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}"
          >
          </el-rate>
          </el-col>
          <el-col :span='6'>
          <span>76条评价</span>
          </el-col>
          <el-col :span='8'>
          <span>4篇游记</span>
          </el-col>
        </el-row>
        <el-row>
            <i class="el-icon-location"></i>
            <span>位于：高淳县xxxx</span>
        </el-row>
      </el-col>
      <el-col :span='6'>
          <el-row class="hotelweb">
              <a href="#"><span>携程</span><span>￥120起</span></a>
          </el-row>
          <el-row class="hotelweb">
              <a href="#"><span>艺龙</span><span>￥120起</span></a>
          </el-row>
          <el-row class="hotelweb">
              <a href="#"><span>Hotels.com</span><span>￥120起</span></a>
          </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
data () {
    return {
        rate:3.7
    }
}
}
</script>
<style lang="less" scoped>
.container{
    width: 1000px;
    margin: 0 auto;
    .hoteldetail{
        border-bottom: 1px solid #ddd;
        >div{
           &:last-child{
               padding-top: 20px;
           }
        }
    }
    .detail{
        >div{
            padding: 5px
        }
    }
    .hotelweb{
        border-bottom: 1px solid #ddd;
        height: 50px;
        a span:last-child{
            float: right;
        }
    }
}
</style>
