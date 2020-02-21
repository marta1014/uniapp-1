<template>
  <view>
    <!-- 搜索 -->
    <search />
    <!-- 分类 -->
    <view class="category" v-if="category.length">
      <!-- 顶级分类 -->
      <view class="sup">
        <scroll-view scroll-y>
              <!-- 动态绑定active类名 -->
          <text :class="{'active':index === active_index ? true : false}"
          @click="changeCat(index)"
          v-for="(item,index) of category" 
          :key="item.cat_id">{{item.cat_name}}</text>
        </scroll-view>
      </view>
      
      <!-- 子级分类 -->
      <view class="sub">
        <scroll-view scroll-y>
          <!-- 封面图 -->
          <image src="http://static.botue.com/ugo/uploads/category.png" class="thumb"></image>     
          <view class="children" 
          v-for="child in category[active_index].children" :key="child.cat_id">
            <view class="title">{{child.cat_name}}</view>
            
            <!-- 三级品牌分类 -->
            <view class="brands">
              <navigator url="/pages/list/index" 
              v-for="brand of child.children" :key="brand.cat_id">
                <image :src="brand.cat_icon"></image>
                <text>{{brand.cat_name}}</text>
              </navigator> 
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<script>
  import search from '@/components/search';

  export default {
    
    components: {
      search
    },
    data(){
          return {
                category:[],
                active_index:0
          }
    },
    methods:{
         async getCategory(){//获取商品分类
                const {message} =await this.request({
                      url:'api/public/v1/categories'
                })
                this.category = message               
          },
          changeCat(index){ //切换分类               
                this.active_index = index
          },          
          onLoad(){
                this.getCategory()
          }
    }
  }
</script>

<style scoped lang="less">
  scroll-view {
    height: 100%;
  }

  .category {
    display: flex;
    width: 100%;
    position: absolute;
    top: 100rpx;
    bottom: 0;

    .sup {
      width: 196rpx;
      background-color: #f4f4f4;

      text {
        display: block;
        height: 100rpx;
        text-align: center;
        line-height: 100rpx;
        font-size: 27rpx;
        color: #333;
        border-bottom: 1rpx solid #eee;

        &:last-child {
          border-bottom: none;
        }
        
        &.active {
          background-color: #FFF;
          color: #ea4451;
          position: relative;

          &::before {
            content: '';
            display: block;
            width: 8rpx;
            height: 60rpx;
            transform: translateY(-50%);
            background-color: #ea4451;

            position: absolute;
            left: 0;
            top: 50%;
          }
        }
      }
    }

    .sub {
      flex: 1;
      padding: 20rpx 18rpx;

      .thumb {
        width: 100%;
        height: 180rpx;
      }

      .children {
        text-align: center;
        color: #333;

        .title {
          display: inline-block;
          margin: 40rpx 0 20rpx;
          font-size: 30rpx;

          &::before {
            content: '/';
            margin-right: 20rpx;
            color: #666;
          }

          &::after {
            content: '/';
            margin-left: 20rpx;
            color: #666;
          }
        }
      }

      .brands {
        display: flex;
        flex-wrap: wrap;

        navigator {
          width: 33%;
          margin-bottom: 20rpx;
        }

        image {
          width: 120rpx;
          height: 120rpx;
        }

        text {
          display: block;
          font-size: 24rpx;
        }
      }
    }
  }
</style>
