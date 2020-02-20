<template>
	<view class="search" :class="{focus}">
      <view class="search-box">
        <input type="text" @focus="onFocus" :placeholder="leadMsg" />
        <text class="cancel" @click="onCancel">取消</text>
        <view class="search-icon icon-m">sousuo</view>
        <view class="search-icon icon-l"></view>
      </view>
	  <!-- 搜索 / -->
	  <view class="record">123</view>
	</view>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
		focus: false,
      leadMsg: null
	};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
	  onFocus() {
      this.focus = true;
	  this.leadMsg = "请输入你的需要";
	  
	   //获取设备系统信息
	  let highly = uni.getSystemInfoSync()
	  //拿到 设备可用窗口高度(就是被历史占据的整个部分)
	  //给父组件
	  this.$emit('sendHeight',highly.windowHeight)
    },
    onCancel() {
	  this.focus = false;
	  this.leadMsg = null;
    }
  },
  watch: {}
};
</script>

<style scoped lang="less">
.search {
  background-color: #ff2d4a;
  box-sizing: border-box;
  padding: 20rpx 16rpx;
  font-size: 26rpx;
  line-height: 60rpx;
  position: relative;
  color: #7a7676;
  input {
    flex: 1;
    height: 60rpx;
    border-radius: 10rpx;
    margin-right: 8rpx;
  }
  .search-icon {
    height: 32rpx;
    line-height: 32rpx;
    background: url("https://marta1014.github.io/vx-pro1//static/images/icon_search@2x.png") no-repeat;
    background-size: 32rpx;
    padding-left: 36rpx;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .search-box {
    display: flex;
    input {
      background-color: #fff;
    }
    .cancel {
      display: none;
    }
  }
  .icon-m {
    display: block;
    left: 50%;
  }
  .icon-l {
    display: none;
  }
  .record{
	  display: none;
  }
}
.focus {
  background-color: rgb(243, 214, 214);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 5;
  .search-box {
    input {
      padding-left: 60rpx;
    }
    .cancel {
      display: block;
    }
    .icon-m {
      display: none;
    }
    .icon-l {
      display: block;
      left: 5%;
    }
  }
  .record{
	  display: block;
	  position: absolute;
	  top: 92rpx;
	  bottom: 0;
	  left: 0;
	  right: 0;
	  background-color: #000;
  }
}
</style>