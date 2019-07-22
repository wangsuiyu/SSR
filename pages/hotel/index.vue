<template>
<div class="container">
        <!-- 头部城市搜索过滤器 -->
    <cityHotelFilter/>
    <!-- 搜索区域，攻略，地图 -->
    <div></div>
    <!-- 酒店详情搜索过滤器 -->
    <HotelFilter/>
    <!-- 酒店分页 -->
    <HotelItem/>
    <div class="pagination">
     <el-pagination
    layout="prev, pager, next"
    :total="1000" 
    >
  </el-pagination>
  </div>
</div>
</template>
<script>
import cityHotelFilter from '@/components/hotel/cityHotelFilter.vue'
import HotelFilter from '@/components/hotel/hotelfilter.vue'
import HotelItem from '@/components/hotel/hotelitem.vue'
export default {
    components: {
        cityHotelFilter,
        HotelFilter,
        HotelItem
    },
    
}
</script>
<style lang="less" scoped>
.container{
    width: 1000px;
    margin:0 auto;
    .pagination{
       position: relative;
       height: 40px;
       >div{
           position: absolute;
           right: 0px;
       }
    }
}
</style>

