<template>
  <div class="container">
    <!-- 头部城市搜索过滤器 -->
    <cityHotelFilter @getCity='getCity' />
    <!-- 搜索区域，攻略，地图 -->
    <div></div>
    <!-- 酒店详情搜索过滤器 -->
    <HotelFilter />
    <!-- 酒店分页 -->
    <HotelItem v-for="(item,index) in dataList" :key="index" :data='item'/>
    <div class="pagination">
      <el-pagination
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="pageSize"
      layout="total, prev, pager, next"
      :total="this.hoteldata.length">
    </el-pagination>
    </div>
  </div>
</template>
<script>
import cityHotelFilter from '@/components/hotel/cityHotelFilter.vue'
import HotelFilter from '@/components/hotel/hotelfilter.vue'
import HotelItem from '@/components/hotel/hotelitem.vue'
export default {
  data() {
    return {
      hoteldata: [ {
          hoteltype: {},
          product: [],
          hotellevel: {}
        }]
      ,
      currentPage:1,
      pageSize:4
    }
  },
  components: {
    cityHotelFilter,
    HotelFilter,
    HotelItem
  },
  methods: {
      handleCurrentChange(val) {
        // console.log(`当前页: ${val}`);
        this.currentPage=val
      },
    getCity(city) {
      console.log(city)
      this.$axios({
        url: 'hotels',
        params: {
          city: city
        }
      }).then(res => {
        console.log(res)
        const { data } = res.data
        this.hoteldata = data
      })
    }
  },
  computed: {
      dataList(){
          return  this.hoteldata.slice(
              this.pageSize*(this.currentPage-1),this.pageSize*this.currentPage
          )
      }
  }
}
</script>
<style lang="less" scoped>
.container {
  width: 1000px;
  margin: 0 auto;
  .pagination {
    position: relative;
    height: 40px;
    > div {
      position: absolute;
      right: 0px;
    }
  }
}
</style>

