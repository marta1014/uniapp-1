<template>
  <view class="wrapper" v-if="detail">
    <!-- 商品图片 -->
    <swiper class="pics" indicator-dots
    indicator-color="rgba(255, 255, 255, 0.6)" indicator-active-color="#fff">
      <swiper-item v-for="(item,index) of detail.pics" :key="index">
        <image :src="item.pics_big"></image>
      </swiper-item>
    </swiper>
    <!-- 基本信息 -->
    <view class="meta">
      <view class="price">{{detail.goods_price}}</view>
      <view class="name">{{detail.goods_name}}</view>
      <view class="shipment">快递: 免运费</view>
      <text class="collect icon-star">收藏</text>
    </view>
    <!-- 商品详情 -->
    <view class="detail">
      <rich-text :nodes="detail.goods_introduce"></rich-text>
    </view>
    <!-- 操作 -->
    <view class="action">
      <button open-type="contact" class="icon-handset">联系客服</button>
      <text class="cart icon-cart" @click="goCart">购物车</text>
      <text class="add" @click="addCars">加入购物车</text>
      <text class="buy" @click="createOrder">立即购买</text>
    </view>
  </view>
</template>

<script>
  export default {
    data(){
      return {
        itemId:'',
        detail:null,
        //获取本地购物车数据
        car:uni.getStorageSync('car') || []
      }
    },
    methods: {
      goCart () {//路由至tab购物车
        uni.switchTab({
          url: '/pages/cart/index'
        })
      },
      createOrder () {
        uni.navigateTo({
          url: '/pages/order/index'
        })
      },
      addCars(){
        let ready = {}
        // const {goods_name,goods_price,goods_small_logo,goods_number} = this.detail
        ready.goods_name = this.detail.goods_name
        ready.goods_price = this.detail.goods_price
        ready.goods_small_logo = this.detail.goods_small_logo
        ready.goods_id = this.detail.goods_id
        ready.goods_number = 1
        //草 解构赋值不会用

        var has = false  //默认无重复

        this.car.filter(item => {//筛选
            if(item.goods_id === ready.goods_id) {
                item.goods_number++
                has = true
                return
            }
        })
        if (has === false) {
          this.car.push(ready)//转存
        }

        uni.setStorageSync('car',this.car)//至本地

      },
     async getDetail(){//携带id获取详情
      const {message} = await this.request({
          url:'api/public/v1/goods/detail',
          data:{
            goods_id:this.itemId
          }
        })
        this.detail = message
        // console.log(this.detail)
      }
    },
    onLoad(res){
      //获取ID
      this.itemId = res.id
      this.getDetail()
    }
  }
</script>

<style scoped lang="less">
  .wrapper {
    margin-bottom: 100rpx;
    background-color: #f4f4f4;
  }

  .pics {
    height: 640rpx;
  }
  
  .meta {
    height: 250rpx;
    line-height: 1;
    padding: 30rpx 180rpx 30rpx 20rpx;
    box-sizing: border-box;
    background-color: #fff;
    position: relative;

    .price {
      font-size: 36rpx;
      color: #ea4451;
      margin-bottom: 20rpx;
    }

    .name {
      color: #333;
      line-height: 1.4;
      font-size: 33rpx;

      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }

    .shipment {
      font-size: 27rpx;
      color: #999;
      position: absolute;
      bottom: 30rpx;
    }

    .collect {
      width: 140rpx;
      height: 88rpx;
      text-align: center;
      box-sizing: border-box;
      border-left: 1rpx solid #ddd;
      font-size: 24rpx;
      color: #999;

      position: absolute;
      right: 10rpx;
      top: 91rpx;
    }

    [class*="icon-"]::before {
      display: block;
      font-size: 45rpx;
      margin-bottom: 10rpx;
    }
  }

  .detail image {
    width: 100%;
    height: 480rpx;
    margin-top: 20rpx;
  }

  .action {
    width: 100%;
    height: 98rpx;
    background-color: #fff;

    position: fixed;
    left: 0;
    bottom: 0;

    display: flex;
    align-items: center;

    text {
      display: block;
    }

    .add, .buy {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 210rpx;
      text-align: center;
      font-size: 27rpx;
      color: #fff;
    }

    .add {
      background-color: #f4b73f;
    }

    .buy {
      background-color: #ea4451;
    }

    button {
      padding: 0;
      border-radius: 0;
      background-color: #fff;

      &::after {
        border: none;
      }
    }

    button, .cart {
      flex: 1;
      text-align: center;
      color: #989898;
      font-size: 24rpx;
      box-sizing: border-box;
    }

    [class*="icon"]::before {
      display: block;
      font-size: 45rpx;
      margin-bottom: 2rpx;
    }
  }
</style>
