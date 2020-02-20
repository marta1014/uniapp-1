<template>
  <view class="content" :style="{'height':windowHighly}">

    <search @sendHeight="getHeight"/>

   <swiper indicator-dots class="swiper" autoplay>
	  <swiper-item class="item">
		  <navigator src="" class="navigator">
			  <image src="https://marta1014.github.io/vx-pro1//static/uploads/banner1.png"></image>
		  </navigator>
	  </swiper-item>
	  <swiper-item class="item">
		  <navigator src="" class="navigator">
			  <image src="https://marta1014.github.io/vx-pro1//static/uploads/banner2.png"></image>
		  </navigator>
	  </swiper-item>
	  <swiper-item class="item">
		   <navigator src="" class="navigator">
			  <image src="https://marta1014.github.io/vx-pro1//static/uploads/banner3.png"></image>
		  </navigator>
	  </swiper-item>
	  </swiper>
  <!-- banner区 / -->

  <view class="nav">
	  <navigator class="item">
		  <image src="https://marta1014.github.io/vx-pro1//static/uploads/icon_index_nav_1@2x.png"></image>
	  </navigator>
	   <navigator class="item">
		  <image src="https://marta1014.github.io/vx-pro1//static/uploads/icon_index_nav_2@2x.png"></image>
	  </navigator>
	   <navigator class="item">
		  <image src="https://marta1014.github.io/vx-pro1//static/uploads/icon_index_nav_3@2x.png"></image>
	  </navigator>
	   <navigator class="item">
		  <image src="https://marta1014.github.io/vx-pro1//static/uploads/icon_index_nav_4@2x.png"></image>
	  </navigator>
  </view>
  <!-- nav区 /-->

  <view class="floor">
	      <view class="title">
		  <image src="https://marta1014.github.io/vx-pro1//static/uploads/pic_floor02_title.png"/>
	      </view>
          <view class="imgs">
			<view class="left">
		  <navigator class="item">
		  <image src="https://marta1014.github.io/vx-pro1//static/uploads/pic_floor02_1@2x.png"/>
	      </navigator>
		  </view>
		  <view class="right">
	      <navigator class="item">
		  <image src="https://marta1014.github.io/vx-pro1//static/uploads/pic_floor02_2@2x.png"/>
	      </navigator>
	      <navigator class="item">
		  <image src="https://marta1014.github.io/vx-pro1//static/uploads/pic_floor02_3@2x.png"/>
	      </navigator>
	      <navigator class="item">
		  <image src="https://marta1014.github.io/vx-pro1//static/uploads/pic_floor02_4@2x.png"/>
	      </navigator>
	      <navigator class="item">
		  <image src="https://marta1014.github.io/vx-pro1//static/uploads/pic_floor02_5@2x.png"/>
	      </navigator>
		  </view>
          </view>
  </view>
  <!-- <view class="floor">
	      <view class="title">
		  <image src="https://marta1014.github.io/vx-pro1//static/uploads/pic_floor02_title.png"/>
	      </view>
          <view class="imgs">
			<view class="left">
		  <navigator class="item">
		  <image src="https://marta1014.github.io/vx-pro1//static/uploads/pic_floor02_1@2x.png"/>
	      </navigator>
		  </view>
		  <view class="right">
	      <navigator class="item">
		  <image src="https://marta1014.github.io/vx-pro1//static/uploads/pic_floor02_2@2x.png"/>
	      </navigator>
	      <navigator class="item">
		  <image src="https://marta1014.github.io/vx-pro1//static/uploads/pic_floor02_3@2x.png"/>
	      </navigator>
	      <navigator class="item">
		  <image src="https://marta1014.github.io/vx-pro1//static/uploads/pic_floor02_4@2x.png"/>
	      </navigator>
	      <navigator class="item">
		  <image src="https://marta1014.github.io/vx-pro1//static/uploads/pic_floor02_5@2x.png"/>
	      </navigator>
		  </view>
          </view>
  </view> -->
  <!-- <view class="floor">
	      <view class="title">
		  <image src="https://marta1014.github.io/vx-pro1//static/uploads/pic_floor02_title.png"/>
	      </view>
          <view class="imgs">
			<view class="left">
		  <navigator class="item">
		  <image src="https://marta1014.github.io/vx-pro1//static/uploads/pic_floor02_1@2x.png"/>
	      </navigator>
		  </view>
		  <view class="right">
	      <navigator class="item">
		  <image src="https://marta1014.github.io/vx-pro1//static/uploads/pic_floor02_2@2x.png"/>
	      </navigator>
	      <navigator class="item">
		  <image src="https://marta1014.github.io/vx-pro1//static/uploads/pic_floor02_3@2x.png"/>
	      </navigator>
	      <navigator class="item">
		  <image src="https://marta1014.github.io/vx-pro1//static/uploads/pic_floor02_4@2x.png"/>
	      </navigator>
	      <navigator class="item">
		  <image src="https://marta1014.github.io/vx-pro1//static/uploads/pic_floor02_5@2x.png"/>
	      </navigator>
		  </view>
          </view>
  </view> -->
  </view>
</template>

<script>
import search from '@/components/search'
export default {
  components:{search},
  data() {
    return {
      windowHighly:"native"
    };
  },
  methods:{
    getHeight(height){
		//   设置样式页面高度为接收值
		  this.windowHighly = `${height}rpx`
	  }
  }
};
</script>

<style lang="less">
.content{
  overflow: hidden;
  .swiper {//banner区
		height: 340rpx;
			.navigator{
				height: 100%;
				image{
				height: 100%;
				width: 100%;
			}
			}
  }
  .nav {//nav区域
		display: flex;
		margin-bottom: 4rpx;
		.item {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 128rpx;
			height: 140rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
  }
  .floor{
    .title{
			padding-top: 16rpx;
			padding-left: 20rpx;
			height: 60rpx;
			box-sizing: border-box;
			image{
				height: 100%;
				width: 100%;
				// vertical-align: middle;
			}
    }
    .imgs{
      box-sizing: border-box;
		padding: 20rpx 16rpx;
    display: flex;
    .left{
			margin-right: 4rpx;
			image{
			width: 232rpx;
			height: 386rpx;
			vertical-align: middle;
			}
    }
    .right{
      overflow: hidden;
      height: 386rpx;
      .item {
				float: left;
			}
			:nth-child(1),:nth-child(3){
				margin-right: 4rpx;
			}
			:nth-child(3),:nth-child(4){
				margin-top: 10rpx;
			}
			:nth-child(1),:nth-child(4){
				image{
				width: 272rpx;
				height: 188rpx;
				vertical-align: middle;
				}
      }
      :nth-child(2),:nth-child(3){
				image{
				width: 202rpx;
				height: 188rpx;
				vertical-align: middle;
				}
			}
    }
    }
  }
}
</style>
