<template>
  <div class="container">
    <el-breadcrumb
      separator-class="el-icon-arrow-right"
      class='top'
    >
      <el-breadcrumb-item :to="{ path: '/hotel' }">酒店</el-breadcrumb-item>
      <el-breadcrumb-item>{{form.city||'南京'}}酒店预订</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form
      :inline='true'
      ref='form'
    >
      <el-form-item>
        <!-- fetch-suggestions: 当输入框输入值时候触发搜索建议事件 -->
        <!-- select：选中下拉框时候触发，参数是选中的参数对象 -->
        <el-autocomplete
          :fetch-suggestions="queryCitySearch"
          placeholder="请搜索城市"
          @select="handleCitySelect"
          class="el-autocomplete"
          v-model="form.city"
          v-focus
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
           :picker-options="pickerOptions"
            @change="handleDate"
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
        <el-button type="primary" @click="getDateCity">查看价格</el-button>
      </el-form-item>
    </el-form>
    <div>
      <el-row type='flex'>
        <el-col :span='12'>
          <el-row>
            <el-col :span='4'>区域：</el-col>
            <el-col :span='20'>
              <div  v-if="isHide">
                <!-- <a href="javascript:;">全部</a> -->
                <div class="scenics-box " >
                  <div class='hidebg'>
                <a href="#" v-for="(item,index) in data.scenics" :key='index'>
                  <span>{{item.name}}&nbsp;&nbsp;</span></a>
                  </div>
                  <div class="showBtn">
                    <a href="#"  @click.stop.prevent='onShow'>等个区域
                      <i class="iconfont">&#xe65e;</i>
                    </a>
                  </div>
                  </div>
              </div>
              <div  v-else>
               <div class="scenics-box " >
                 <div class="showbg">
                <a href="#" v-for="(item,index) in data.scenics" :key='index'>
                  <span>{{item.name}}&nbsp;&nbsp;</span></a>
                  </div>
                  <div class="hideBtn">
                    <a href="#"  @click.stop.prevent='onHide' >{{data.scenics.length}}等个区域
                      <i class="iconfont">&#xe65d;</i>
                    </a>
                  </div>
                  </div>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span='4'>攻略：</el-col>
            <el-col :span='20' class="posts">{{this.form.city}}，你想要的都能在这找到。
              博古通今，兼容并蓄，天下一城，如是帝都
              。 景点以故宫为中心向四处辐射；地铁便宜通畅，而且覆盖绝大多数景点。
              由于早上有天安门升旗仪式，所以大多数人选择在天安门附近住宿。</el-col>
          </el-row>
          <el-row>
            <el-col :span='4'>均价:</el-col>
            <el-col :span='6'>
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
              <span style="font-size:14px;color: #666;">￥332</span>
            </el-col>
            <el-col :span='6'>
              <i
                class="iconfont"
                style="color:#f90; fontSize:4px"
              >&#xe60e;</i>
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
              <span style="font-size:14px;color: #666;">￥521</span>
            </el-col>
            <el-col :span='8'>
              <i
                class="iconfont"
                style="color:#f90; fontSize:4px"
              >&#xe60e;</i>
              <i
                class="iconfont"
                style="color:#f90; fontSize:4px"
              >&#xe60e;</i>
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
                style="color:#f90; fontSize:4px"
              >&#xe60e;</i>
              <span style="font-size:14px;color: #666;">￥768</span>
            </el-col>
          </el-row>
        </el-col>
        <el-col
          :span='12'
          id="map"
        >

        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
export default {
  data() {
    return {
      pickerOptions:{
         disabledDate(time) {
            return time.getTime() < Date.now();
          }
      }, 
      mapdata:[{location:{longitude:118.8718107,latitude:31.32846821},city:{name:'南京'}},
      {location:{longitude:118.787727,latitude:32.057976},city:{name:'南京'}},
      {location:{longitude:118.732506,latitude:32.126942},city:{name:'南京'}},
      {location:{longitude:118.9213,latitude:31.75649},city:{name:'南京'}}],
      isprocess:false,
      date:'',
      locations:[],
      longitude:118.732506,
      latitude:32.126942,
      id:74,
      isHide:true,
      data:{},
      form: {
        city: '南京',
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
  directives: {
    // 注册一个局部的自定义指令 v-focus
  focus: {
    // 指令的定义
    inserted: function (el) {
      // 聚焦元素
      el.querySelector('input').focus()
    }
  }
  },
  methods: {
      handleDate(value){
          //  console.log(value)
            const start=moment(value[0]).format("YYYY-MM-DD")
            const end=moment(value[1]).format("YYYY-MM-DD")
           this.date =start+','+end
          //  console.log( this.form.date)
        },
        getDateCity(){
          const start=this.date.split(",")[0]
          const end=this.date.split(",")[1]
          this.$axios({
            url:'hotels',
            params:{
              city:this.id,
              enterTime:start,
              leftTime:end
            }
          })
          .then(res=>{
            // console.log(res,1111)
            const {data}=res.data
            if(data){
              this.isprocess=true
              this.$emit('changeDataList',data)
            }
          })
        },
    onShow(){
      this.isHide=false
    },
    onHide(){
      this.isHide=true
    },
  async  queryCitySearch(value, cb) {
      // await的结果是resolve的参数，也就是成功的结果
            const arr = await this.queryCity(value);
            if(arr.length > 0){
                // 设置到达城市的第一个为默认值
                this.form.city = arr[0].value;
                // this.form.destCode = arr[0].sort;
            }

            // 执行回调
            cb(arr);
    },
    handleCitySelect(item) {
      this.form.city=item.value
      // console.log(item, 111)
    },
    queryCity(queryString) {
       return new Promise((resolve, reject) => {
                // 如果是空就不发起请求
                if(!queryString){
                    resolve([])
                    return;
                }
                var reg = new RegExp("[\\u4E00-\\u9FFF]+","g");
                if(reg.test(queryString)){
                this.$axios({
                    url: "cities",
                    params: {
                        // 搜索关键字，输入框的值
                        name: queryString
                    }
                }).then(res => {
                    const {data} = res.data;
                    //  console.log(res)
                    
                    // 添加一个value属性，值等于name没有市字
                    const newData = data.map(v => {
                        return {
                            ...v,
                            value: v.name.replace("市", ""), 
                        }
                    });
                       this.data=newData[0]
                       this.id=newData[0].id
                       this.$emit('getCity',this.id)
                    // 默认选中第一个
                    resolve(newData);

                    // this.form.destCity = newData[0].value;
                    // this.form.destCode = newData[0].sort;

                    // 回调函数中的参数必须是一个数组
                    // 数组中每一项必须是一个对象，对象中必须包含value属性
                    //cb(newData);
                });
                }
            })
    },
    getMap(locations,longitude, latitude){
      // 页面加加载之后执行
     window.onLoad = function () {
      // 生成地图.container是显示地图的div的id
      var map = new AMap.Map('map', {
        zoom:9,//放大级别
        center: [longitude, latitude],//中心点坐标，经纬度
        viewMode: '3D'//使用3D视图
      });
    for(var i=0;i<locations.length;i++){
        // 创建一个 Marker 实例：
      var marker = new AMap.Marker({
        // content: "<i class='iconfont' style=' fontSize:6px'>&#xeb33;</i>",
        position: new AMap.LngLat(locations[i].location.longitude, locations[i].location.latitude),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: locations[i].city.name
      });

      map.add(marker);
    }
       }

      // 地图的链接
      var key = "fc349821166279b8365299d22d7cf202"
      var url = `https://webapi.amap.com/maps?v=1.4.15&key=${key}&callback=onLoad`;
      var jsapi = document.createElement('script');
      jsapi.charset = 'utf-8';
      jsapi.src = url;
      document.head.appendChild(jsapi);
      }
  },
 watch: {
      id() {
        this.$axios({
        url:'hotels',
        params:{
          city:this.id
        }
      }).then(res=>{
        const {data}=res.data
        this.longitude=data[2].location.longitude
        this.latitude=data[2].location.latitude
        // console.log(1)
        this.getMap(data,this.longitude, this.latitude)
      })
      }
      
  
  },
  mounted() {
   this.getMap(this.mapdata,this.longitude,this.latitude)
  }

}
</script>
<style lang="less" scoped>
.container {
  padding-bottom: 50px;
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
#map {
  width: 500px;
  height: 200px;
}
.scenics-box{
  // height: 50px;
  a{
    font-size:14px;
    color: #666;
    &:hover{
      color: #409eff;
      text-decoration: underline;
    }
  }
}
.hidebg{
   height: 40px;
      overflow: hidden;
  text-overflow: clip; 
    line-clamp:2;    /* 限制文本仅显示前三行 */
  .showBtn .hideBtn{
    width:4px;
    height: 4px;
    text-align: center;
  }
}
.showbg{
  //  height: 150px;
}
.posts{
  font-size:14px;
    color: #666;
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
