<template>
  <view>
    <!-- 筛选 -->
    <view class="filter">
      <text class="active">综合</text>
      <text>销量</text>
      <text>价格</text>
    </view>
    <!-- 商品列表 区域滚动 触底行为需监听区域滚动的行为 若是页面滚动则监听页面滚动-->
    <scroll-view class="goods" scroll-y @scrolltolower="getBottom">
      <view class="item" @click="goDetail" v-for="item of list" :key="item.goods_id">
        <!-- 商品图片 -->
        <image class="pic" :src="item.goods_small_logo"></image>
        <!-- 商品信息 -->
        <view class="meta">
          <view class="name">{{item.goods_name}}</view>
          <view class="price">
            <text>￥</text>{{item.goods_price}}<text>.00</text>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
  export default {
      
    data(){
          return {
                query:'',
                list:[],
                page:{
                      pagenum:1,
                      pagesize:6
                },
                loadOver:true
          }
    },
    methods: {
      goDetail () {
        uni.navigateTo({//页面转跳至详情
          url: '/pages/goods/index'
        })
      },
      async getBottom(){//区域滚动触底 该api支持分页（scrolltolower）
            //设置防频触发 或在loading里开启mask
            if(this.loadOver){
                  this.loadOver = false

                  this.page.pagenum++

                  await this.getList()

                  this.loadOver = true
            }
       },
      async getList(){//通过参数请求相关数据展示
          const {message} =await this.request({
                url:'api/public/v1/goods/search',
                data:{
                      query:this.query,
                      pagenum:this.page.pagenum,
                      pagesize:this.page.pagesize
                }
          })

          //数据拼接展示
          this.list = this.list.concat(message.goods)
          console.log(this.list)
       }
    },
    onLoad(e){//接收页面传参
          this.query = e.query
          this.getList()
    }
  }
</script>

<style scoped lang="less">
  .filter {
    display: flex;
    height: 96rpx;
    line-height: 96rpx;
    border-bottom: 1rpx solid #ddd;

    /* #ifdef H5 */
    position: relative;
    z-index: 99;
    /* #endif */

    text {
      flex: 1;
      text-align: center;
      font-size: 30rpx;
      color: #333;

      &.active {
        color: #ea4451;
      }
    }
  }
  
  .goods {
    position: absolute;
    width: 100%;
    top: 97rpx;
    bottom: 0;
  }

  .item {
    display: flex;
    padding: 30rpx 20rpx 30rpx 0;
    margin-left: 20rpx;
    border-bottom: 1rpx solid #eee;

    &:last-child {
      border-bottom: none;
    }

    .pic {
      width: 200rpx;
      height: 200rpx;
      margin-right: 30rpx;
    }

    .meta {
      flex: 1;
      font-size: 27rpx;
      color: #333;
      position: relative;
    }

    .name {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .price {
      position: absolute;
      bottom: 0;

      color: #ea4451;
      font-size: 33rpx;

      text {
        font-size: 22rpx;
      }
    }
  }
</style>
