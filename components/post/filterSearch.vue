<template>
  <div class="postFilter">
    <div class="searchBar">
      <el-input v-model="input" placeholder="请输入想去的地方,比如:'广州'"></el-input>
      <i class="el-icon-search" @click="searchCity(input)"></i>
      <div class="recommendCity">
        <span>推荐:</span>
        <span @click="getCity($event)">广州</span>
        <span @click="getCity($event)">上海</span>
        <span @click="getCity($event)">北京</span>
      </div>
      <div class="strategy">
        <p>推荐攻略</p>
        <a href="/post/create">
          <el-button type="primary" icon="el-icon-edit">写游记</el-button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
    }
  },
  methods: {
    getCity(e) {
      // console.log(e.target.innerText);
      const city = e.target.innerText
      this.input = city
      var obj = { ...this.$route.query }
      // console.log(this.$route);

      obj.city = city;
      this.$router.replace({
        query: obj,
        // name:this.$route.name
      })
      // console.log(obj);

      this.$emit('getData', obj)
    },
    searchCity(city) {
      var obj = { ...this.$route.query }
      obj.city = city;
      this.$router.replace({
        query: obj,
        // name:this.$route.name
      })
      // console.log(obj);

      this.$emit('getData', obj)
    }
  }
}
</script>

<style lang="less" scoped>
.postFilter {
  .searchBar {
    position: relative;

    /deep/.el-input__inner {
      border: 3px solid orange;
    }

    i {
      position: absolute;
      right: 8px;
      top: 8px;
      color: orange;
      font-size: 26px;
      font-weight: 600;

      &:hover {
        cursor: pointer;
      }
    }

    .recommendCity {
      margin-top: 8px;
      font-size: 12px;
      color: #666;

      span {
        padding: 0 6px;

        &:nth-child(2),
        &:nth-child(3),
        &:last-child {
          cursor: pointer;

          &:hover {
            color: orange;
            text-decoration: orange underline;
          }
        }
      }
    }

    .strategy {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      padding-bottom: 10px;
      font-size: 20px;
      margin-top: 10px;
      position: relative;

      p {
        color: orange;
        // border-bottom: 3px solid orange;
        padding-bottom: 6px;
        &::after {
          content: "";
          display: block;
          width: 74px;
          height: 2px;
          background-color: orange;
          position: absolute;
          left: 0;
          bottom: 0;
        }
      }
    }
  }
}
</style>

