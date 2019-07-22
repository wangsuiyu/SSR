<template>
  <div class="container">
    <el-row type='flex' class="list-filter">
          <el-col :span='8'>
        <el-row class="price">
          <span>价格</span>
          <span >0-2970</span>
        </el-row>
        <el-row>
          <el-slider
            v-model="value"
            :min='0'
            :max='2970'
          ></el-slider>
        </el-row>
      </el-col>
      <el-col :span='4'>
            <el-row><span>住宿等级</span></el-row>
        <el-row>
          <el-dropdown :hide-on-click="false" ref="dropdown">
            <span class="el-dropdown-link" >
              不限<i class="el-icon-arrow-down el-icon--right" ></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>1星</el-dropdown-item>
              <el-dropdown-item>2星</el-dropdown-item>
              <el-dropdown-item>3星</el-dropdown-item>
              <el-dropdown-item>4星</el-dropdown-item>
              <el-dropdown-item>5星</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-row>
      </el-col>
      <el-col :span='4'>
        <el-row><span>住宿类型</span></el-row>
        <el-row>
          <el-dropdown>
            <span class="el-dropdown-link">
              不限<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item> 经济型</el-dropdown-item>
              <el-dropdown-item>舒适型</el-dropdown-item>
              <el-dropdown-item>高档型</el-dropdown-item>
              <el-dropdown-item>豪华型</el-dropdown-item>
              <el-dropdown-item>度假村</el-dropdown-item>
              <el-dropdown-item>公寓式酒店</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-row>
      </el-col>
      <el-col :span='4'>
          <el-row><span>酒店设施</span></el-row>
        <el-row>
          <el-dropdown class="dropdown">
            <span class="el-dropdown-link">
              不限<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item> wifi</el-dropdown-item>
              <el-dropdown-item>热水壶</el-dropdown-item>
              <el-dropdown-item>吹风机</el-dropdown-item>
              <el-dropdown-item>外币兑换服务</el-dropdown-item>
              <el-dropdown-item>洗衣服务</el-dropdown-item>
              <el-dropdown-item>电梯</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-row>
      </el-col>
      <el-col :span='4'>
          <el-row><span>酒店设施</span></el-row>
        <el-row>
          <el-dropdown>
            <span class="el-dropdown-link">
              不限<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item> wifi</el-dropdown-item>
              <el-dropdown-item>热水壶</el-dropdown-item>
              <el-dropdown-item>吹风机</el-dropdown-item>
              <el-dropdown-item>外币兑换服务</el-dropdown-item>
              <el-dropdown-item>洗衣服务</el-dropdown-item>
              <el-dropdown-item>电梯</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 100
    }
  }
}
</script>
<style lang="less" scoped>
.container{
    width: 1000px;
    margin: 0 auto;
.list-filter{
    border: 1px solid #ddd;
    margin:15px 0;
    height: 80px;
    padding: 10px 0;
    box-sizing: border-box;
    >div{
        padding:10px;
        border-right: 1px solid #ddd;
        &:last-child{
            border-right: none;
        }
         .price{
        span:last-child{
            float: right;
        }
    }
    }
   
}
}
</style>

