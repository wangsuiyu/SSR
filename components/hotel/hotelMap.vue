<template>
  <div class="hotelmap">
    <el-row>
      <el-col :span="16">
        <div id="map"></div>
      </el-col>
      <el-col :span="8">
        <div class="info">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="风景" name="first">
              <ul>
                <li v-for="(item,index) in scenicList" :key="index">
                  <span>{{item.name}}</span>
                  <span>{{item.distance}}</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="交通" name="second">
              <ul>
                <li v-for="(item,index) in trafficList" :key="index">
                  <span>{{item.name}}</span>
                  <span>{{item.distance}}</span>
                </li>
              </ul>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      titleList: ["景点", "交通"],
      activeName: "first",
      scenicList: [
        { name: "高淳老街", distance: "0.60公里" },
        { name: "高淳老街", distance: "0.60公里" },
        { name: "高淳老街", distance: "0.60公里" },
        { name: "高淳老街", distance: "0.60公里" },
        { name: "高淳老街", distance: "0.60公里" },
        { name: "高淳老街", distance: "0.60公里" },
        { name: "高淳老街", distance: "0.60公里" },
        { name: "高淳老街", distance: "0.60公里" },
        { name: "高淳老街", distance: "0.60公里" },
        { name: "高淳老街", distance: "0.60公里" }
      ],
      trafficList: [
        { name: "甘霖路口(公交站)", distance: "0.90公里" },
        { name: "甘霖路口(公交站)", distance: "0.90公里" },
        { name: "甘霖路口(公交站)", distance: "0.90公里" },
        { name: "甘霖路口(公交站)", distance: "0.90公里" }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  mounted() {
    window.onLoad = function() {
      var map = new AMap.Map("map", {
        zoom: 13, //放大级别
        center: [116.39, 39.9], //中心点坐标，经纬度
        viewMode: "3D" //使用3D视图
      });
      // 创建一个 Marker 实例：
      var marker = new AMap.Marker({
        position: new AMap.LngLat(116.39, 39.9), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: "北京",
        icon:
          "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-1.png"
      });
      // 将创建的点标记添加到已有的地图实例：
      map.add(marker);
    };
    var url =
      "https://webapi.amap.com/maps?v=1.4.15&key=f36d75e91d581307315c4b0b4fb7cdb3&callback=onLoad";
    var jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);
  }
};
</script>
<style lang="less" scoped>
.hotelmap {
  padding: 30px 0;
  #map {
    width: 640px;
    height: 360px;
  }
  .info {
    width: 335px;
    height: 360px;
    ul {
      overflow-y: auto;
      overflow-x: hidden;
      max-height: 300px;
      li {
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
        color: #909399;
        span:last-child {
            padding-right: 20px;
        }
      }
    }
  }
}
</style>
