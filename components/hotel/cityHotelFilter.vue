<template>
  <div class="container">
    <el-breadcrumb
      separator-class="el-icon-arrow-right"
      class='top'
    >
      <el-breadcrumb-item :to="{ path: '/hotel' }">酒店</el-breadcrumb-item>
      <el-breadcrumb-item>酒店预订</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form :inline='true'>
      <el-form-item>
        <!-- fetch-suggestions: 当输入框输入值时候触发搜索建议事件 -->
        <!-- select：选中下拉框时候触发，参数是选中的参数对象 -->
        <el-autocomplete
          :fetch-suggestions="queryCitySearch"
          placeholder="请搜索出发城市"
          @select="handleCitySelect"
          class="el-autocomplete"
          v-model="form.City"
        ></el-autocomplete>
      </el-form-item>
      <el-form-item>
        <el-date-picker
          v-model="form.date"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="-"
          start-placeholder="入住日期"
          end-placeholder="离店日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-popover
          placement="bottom"
          width="300"
          trigger="click"
        >
          <div class="popoverBox">
            <!-- <el-row
              type='flex'
              alignContent='space-around'
            > -->
            <el-row
              type='flex'
              justify='flex-end'
            >
              <el-col :span='8'>每间</el-col>
              <el-col :span='8'>
                <el-select
                  v-model="value"
                  placeholder="请选择"
                  size='mini'
                >
                  <el-option
                    v-for="item in people"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span='8'>
                <el-select
                  v-model="value"
                  placeholder="请选择"
                  size='mini'
                  autocomplete="成人"
                >
                  <el-option
                    v-for="item in children"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-col>
            </el-row>
            <!-- </el-row> -->
            <hr style='margin:10px 0;' />
            <el-row
              type='flex'
              justify='flex-end'
            >
              <el-col>
                <el-button
                  class="confirm"
                  type="primary"
                  size='mini'
                >确定</el-button>
              </el-col>
            </el-row>
          </div>
          <el-input
            slot="reference"
            placeholder='人数未定'
          ></el-input>
        </el-popover>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">查看价格</el-button>
      </el-form-item>
    </el-form>
    <div>
      <el-row type='flex'>
        <el-col :span='12'>
          <el-row>
            <el-col :span='4'>区域：</el-col>
            <el-col :span='20'>
              <div class="scenics-box">
                <a href="javascript:;">全部</a>
                <a href="javascript:;">铜山镇</a>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span='4'>攻略：</el-col>
            <el-col :span='20'>北京，你想要的都能在这找到。
              博古通今，兼容并蓄，天下一城，如是帝都
              。 景点以故宫为中心向四处辐射；地铁便宜通畅，而且覆盖绝大多数景点。 
              由于早上有天安门升旗仪式，所以大多数人选择在天安门附近住宿。</el-col>
          </el-row>
          <el-row>
            <el-col  :span='4'>均价:</el-col>
            <el-col :span='6'>
              <i class="iconfont" style="color:#f90;fontSize:4px ">&#xe60e;</i>
              <i class="iconfont" style="color:#f90;fontSize:4px ">&#xe60e;</i>
              <i class="iconfont" style="color:#f90;fontSize:4px ">&#xe60e;</i>
              <span>￥332</span>
            </el-col>
            <el-col :span='6'>
              <i class="iconfont" style="color:#f90; fontSize:4px">&#xe60e;</i>
              <i class="iconfont" style="color:#f90;fontSize:4px ">&#xe60e;</i>
              <i class="iconfont" style="color:#f90;fontSize:4px ">&#xe60e;</i>
              <i class="iconfont" style="color:#f90;fontSize:4px ">&#xe60e;</i>
              <span>￥521</span>
            </el-col>
            <el-col :span='8'>
              <i class="iconfont" style="color:#f90; fontSize:4px">&#xe60e;</i>
              <i class="iconfont" style="color:#f90; fontSize:4px">&#xe60e;</i>
              <i class="iconfont" style="color:#f90;fontSize:4px ">&#xe60e;</i>
              <i class="iconfont" style="color:#f90;fontSize:4px ">&#xe60e;</i>
              <i class="iconfont" style="color:#f90; fontSize:4px">&#xe60e;</i>
              <span>￥768</span>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span='12' id="map">
         
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        city: '',
        date: ''
      },
      value: '',
      people: [{
        value: 1,
        label: 1
      }, {
        value: 2,
        label: 2
      },
      {
        value: 3,
        label: 3
      }, {
        value: 4,
        label: 4
      }, {
        value: 5,
        label: 5
      }, {
        value: 6,
        label: 6
      }, {
        value: 7,
        label: 7
      }],
      children: [{ value: 0, label: 0 }, { value: 1, label: 1 }, { value: 2, label: 2 }, { value: 3, label: 3 }, { value: 4, label: 4 }]
    }
  },
  methods: {
    queryCitySearch() { },
    handleCitySelect() { }
  },
   mounted(){

      // 页面加加载之后执行
    window.onLoad  = function(){
        // 生成地图.container是显示地图的div的id
        var map = new AMap.Map('map', {
            zoom:11,//放大级别
            center: [118.8718107, 31.32846821],//中心点坐标，经纬度
            viewMode:'3D'//使用3D视图
        });

        // 创建一个 Marker 实例：
        var marker = new AMap.Marker({
            //content: "<div style='width:20px; height:20px; background:red;'>1</div>",
            position: new AMap.LngLat(118.8718107, 31.32846821),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            title: '北京'
        });

        map.add(marker);
    }

    // 地图的链接
    var key = "fc349821166279b8365299d22d7cf202"
    var url =  `https://webapi.amap.com/maps?v=1.4.15&key=${ key}&callback=onLoad`;
    var jsapi = document.createElement('script');
    jsapi.charset = 'utf-8';
    jsapi.src = url;
    document.head.appendChild(jsapi);
  }

}
</script>
<style lang="less" scoped>
.container {
  padding-bottom:50px;
  width: 1000px;
  margin: 0 auto;
  .top {
    height: 50px;
    line-height: 50px;
  }
  .confirm {
    margin-top: 20px;
  }
}
#map{
  width: 500px;
  height: 200px;
}
.popoverBox {
  .el-row {
    .el-col {
      text-align: center;
      line-height: 28px;
    }
    button {
      float: right;
    }
  }
}
</style>
