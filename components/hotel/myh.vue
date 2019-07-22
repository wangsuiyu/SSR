<template>
<div class="box">
<el-row class="hotls"  id="niu">
    <el-col :span="8">
      <div class="grid-content bg-purple">
        <span>价格来源</span>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content bg-purple-light">
        <span>低价房型</span>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content bg-purple">
        <span>最低价格/每晚</span>
      </div>
    </el-col>
    <el-row class="hotls">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <span>艺龙</span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light">
          <span>高级大床A</span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <span>￥103起</span>
        </div>
      </el-col>
    </el-row>
    <el-row class="hotls">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <span>携程</span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light">
          <span>高级大床A</span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <span>￥103起</span>
        </div>
      </el-col>
    </el-row>
    <el-row class="hotls">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <span>Htoels.com</span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light">
          <span>高级大床A</span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <span>￥75起</span>
        </div>
      </el-col>
    </el-row>
  </el-row>
</div>  
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.box {
  width: 1000px;
  margin: 0 auto;
}
.hotls{
    padding: 30px  0px;
    border-bottom: 1px solid pink
}
#niu:hover{
   background-color: aquamarine
}
</style>
