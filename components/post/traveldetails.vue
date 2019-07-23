<template>
  <div class="flights-content">
    <!-- 旅游攻略面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">旅游攻略</el-breadcrumb-item>
      <el-breadcrumb-item>攻略详情</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 2. 大标题 -->
    <h1>{{strategy.title}}</h1>
    <!-- 3. 旅游攻略时间 -->
    <div class="post-info">
      <span>攻略：{{strategy.created_at|formatDate}}</span>
      <span>阅读：{{strategy.watch}}</span>
    </div>
    <!-- 4. 旅游攻略内容 -->
    <div class="post-content" v-html="strategy.content"></div>
    <!-- 5. 点赞评论图标 -->
    <div class="post-ctrl">
      <el-row type="flex" justify="center">
        <div class="ctrl-item">
          <i class="iconfont iconpinglun"></i>
          <p>评论({{discussData.total||0}})</p>
        </div>
        <div class="ctrl-item">
          <i class="iconfont iconstar1"></i>
          <p>收藏</p>
        </div>
        <div class="ctrl-item">
          <i class="iconfont iconfenxiang"></i>
          <p>分享</p>
        </div>
        <div class="ctrl-item">
          <i class="iconfont iconding"></i>
          <p>点赞({{strategy.like||0}})</p>
        </div>
      </el-row>
    </div>
    <!-- 6. 评轮 -->
    <div class="cmt-wrapper">
      <h4 class="cmt-title">评论</h4>
      <div class="cmt-input">
        <!-- 输入框 -->
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="说点啥...."
          v-model="textarea1"
        ></el-input>
      </div>
      <el-row type="flex" justify="space-between" class="cmt-input-ctrls">
        <!-- 提交图片 -->
        <div>
          <el-upload
            ref="myupload"
            :action="$axios.defaults.baseURL+'/upload'"
            name="files"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-success="handleSuccess"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible" size="tiny">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </div>
        <!-- 按钮 -->
        <div>
          <el-button type="primary" size="mini" @click="submitComment">提交</el-button>
        </div>
      </el-row>
      <!-- 用户评论 -->
      <div class="cmt-list">
        <div v-for="(item,index) in discussData.data" :key="index" class="cmt-item">
          <div class="cmt-info">
            <img :src="$axios.defaults.baseURL+item.account.defaultAvatar" />
            {{item.account.nickname}}
            <i>{{item.account.created_at|formatDate}}</i>
            <span>{{item.level}}</span>
          </div>
          <div class="cmt-content">
            <!-- 递归组件 -->
            <Cmtfloor :data="item" />
            <div class="cmt-new">
              <p class="cmt-message">{{item.content}}</p>
              <el-row type="flex" v-if="item.pics.length">
                <div class="cmt-pic" v-for="(item1,index) in item.pics" :key="index">
                  <img :src="$axios.defaults.baseURL+item1.url" />
                </div>
              </el-row>
              <div class="cmt-ctrl">
                <a href="javascript:;"></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 分页布局 -->
      <!-- size-change：切换条数时候触发 -->
      <!-- current-change: 切换页数时候触发 -->
      <!-- page-size: 默认一页多少条数据 -->

      <el-row type="flex" justify="center" style="margin-top: 10px">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageIndex"
          :page-sizes="[1,2, 3, 4, 5]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="pagetotal"
        ></el-pagination>
      </el-row>
    </div>
  </div>
</template>

<script>
import Cmtfloor from "@/components/cmtfloor/cmtfloor.vue";
import moment from "moment";
export default {
  components: {
    Cmtfloor
  },
  mounted() {
    this.init();
  },

  methods: {
    init() {
      this.$axios({
        url: "/posts/" + this.$route.query.id
      }).then(res => {
        // 获取攻略数据
        this.strategy = res.data;
        // console.log(res);
      });
      this.queryDiscuss();
    },
    // 封装请求评论的方法
    queryDiscuss() {
      this.$axios({
        url: "/posts/comments",
        params: {
          post: this.$route.query.id,
          // 未知接口
          _start: this.start,
          _limit: this.limit
        }
      }).then(res => {
        // console.log(res.data);
        // 获取评论总数据
        this.discussData = res.data;
        // console.log(this.discussData);
        this.pagetotal = res.data.total;
      });
    },
    // 条数切换, value是当前选中的条数
    handleSizeChange(value) {
      this.pageSize = value;
      this.limit = value;
      this.queryDiscuss();
    },

    // 页数的切换，value是选中的页数
    handleCurrentChange(value) {
      this.pageIndex = value;
      this.start = value;
      this.queryDiscuss();
    },
    // 上传图片
    // 上传时触发
    handleSuccess(response, file, fileList) {
      this.imageData = response;
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 提交评论
    submitComment() {
      if (!this.textarea1.trim()) {
        this.$message({
          message: "请说点啥",
          type: "error"
        });
        return;
      }
      const data = {
        content: this.textarea1,
        pics: this.imageData,
        post: this.$route.query.id
      };
      // 发送提交请求
      this.$axios({
        url: "/comments",
        method: "POST",
        data,
        headers: {
          Authorization: `Bearer ${this.$store.state.user.userInfo.token}`
        }
      }).then(res => {
        this.$message({
          message: "提交成功",
          type: "success"
        });
        this.$refs["myupload"].clearFiles();
        this.textarea1 = "";
        this.queryDiscuss();
      });
    }
  },
  watch: {
    $route() {
      this.init();
    }
  },
  data() {
    return {
      strategy: {},
      pageIndex: 1, // 当前页数
      pageSize: 1, // 当前页面的条数
      pagetotal: 0, // 总条数
      // 评论总的数据
      discussData: {},
      textarea1: "", //文本域
      // 输入框
      dialogImageUrl: "",
      dialogVisible: false,
      // 图片数据
      imageData: [],
      start: 0,
      limit: 1,
    };
  },
  filters: {
    formatDate: function(value) {
      return moment(value).format("YYYY-MM-DD hh:mm ");
    }
  }
};
</script>

<style scoped lang="less">
.flights-content {
  width: 700px;
  font-size: 14px;
  // 2. 大标题
  h1 {
    font-size: 2em;
    padding: 20px 0;
    border-bottom: 1px solid #ddd;
  }
  // 3. 旅游攻略时间
  .post-info {
    color: #999;
    padding: 20px;
    text-align: right;
  }
  // 4. 旅游攻略内容
  .post-content {
    line-height: 1.5;
    // ！！！注意 设置图片大小最大值为700px 超过时就会最大图片为700px  没超过就会变为原来的大小图片
    /deep/img {
      max-width: 700px !important;
    }
  }
  // 5. 点赞评论图标
  .post-ctrl {
    padding: 50px 0 30px;
    .ctrl-item {
      margin: 0 20px;
      text-align: center;
      cursor: pointer;
      i {
        display: block;
        font-size: 28px;
        color: orange;
      }
      p {
        margin-top: 5px;
        font-size: 14px;
        color: #999;
      }
    }
  }
  // 6. 提交评价
  .cmt-wrapper {
    margin-bottom: 20px;
    .cmt-title {
      font-weight: 400;
      font-size: 18px;
      margin-bottom: 20px;
    }
    .cmt-input {
      margin-bottom: 10px;
    }
    .cmt-input-ctrls {
      margin-bottom: 30px;
      /deep/.el-upload--picture-card {
        width: 100px;
        height: 100px;
        line-height: 100px;
      }
      /deep/.el-upload-list--picture-card .el-upload-list__item {
        width: 100px;
        height: 100px;
      }
    }
    .cmt-list {
      border: 1px solid #ddd;
      .cmt-item {
        border-bottom: 1px dashed #ddd;
        padding: 20px 20px 5px;
        .cmt-info {
          margin-bottom: 10px;
          font-size: 12px;
          color: #666;
          img {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            vertical-align: top;
          }
          i {
            color: #999;
          }
          span {
            float: right;
          }
        }
        .cmt-content {
          padding: 0 0 0 30px;
          .cmt-pic {
            width: 80px;
            height: 80px;
            border-radius: 6px;
            overflow: hidden;
            margin-right: 5px;
            margin-top: 10px;
            padding: 5px;
            border: 1px dashed #ddd;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .cmt-message {
            margin-top: 10px;
          }
          .cmt-ctrl {
            height: 20px;
            line-height: 20px;
            font-size: 12px;
            color: #1e50a2;
            text-align: right;
            a {
              text-decoration: none;
              color: inherit;
            }
          }
        }
      }
    }
  }
}
</style>
