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
             <el-select size="mini" v-model="levelname"  placeholder="不限" @change="handlelevels">
                    <el-option
                     v-for="(item, index) in levels"
                    :key="index"
                    :label="item.name"
                    :value="item.name"
                    >
                    </el-option>
                </el-select>
        </el-row>
      </el-col>
      <el-col :span='4'>
        <el-row><span>住宿类型</span></el-row>
        <el-row>
          <el-select size="mini" v-model="typename"  placeholder="不限" @change="handlelevels">
                    <el-option
                     v-for="(item, index) in types"
                    :key="index"
                    :label="item.name"
                    :value="item.name"
                    >
                    </el-option>
                </el-select>
        </el-row>
      </el-col>
      <el-col :span='4'>
          <el-row><span>酒店设施</span></el-row>
        <el-row>
          <el-select size="mini" v-model="assetname"  placeholder="不限" @change="handlelevels">
                    <el-option
                     v-for="(item, index) in assets"
                    :key="index"
                    :label="item.name"
                    :value="item.name"
                    >
                    </el-option>
                </el-select>
        </el-row>
      </el-col>
      <el-col :span='4'>
          <el-row><span>酒店品牌</span></el-row>
        <el-row>
         <el-select size="mini" v-model="brandname"  placeholder="不限" @change="handlelevels">
                    <el-option
                     v-for="(item, index) in brands"
                    :key="index"
                    :label="item.name"
                    :value="item.name"
                    >
                    </el-option>
                </el-select>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      assets:[],
      brands:[],
      levels:[],
      types:[],
      value: 2970,
      levelname:'不限',
      typename:'不限',
      brandname:'不限',
      assetname:'不限',
      hotellevel:0,
      hoteltype:0,
      hotelbrand:0,
      hotelasset:0
    }
  },
  methods: {
    handlelevels(){}
  },
  mounted () {
      this.$axios({
        url:'hotels/options'
      })
      .then(res=>{
        console.log(res)
        const {data}=res.data
        this.assets=data.assets
        this.brands=data.brands
        this.levels=data.levels
        this.types=data.types
      })
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

