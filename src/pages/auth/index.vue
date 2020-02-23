<template>
  <view>
    <button type="primary"
    @getuserinfo="getInfo"
    open-type="getUserInfo">微信登录</button>
  </view>
</template>

<script>
  export default {
    methods:{
     async getMsg(){
        const [err,res] =  await uni.getUserInfo();
        // console.log(res);

        //!undefined证明没授权信息 == true
        if(!res){
          return
        }

        //有信息 就请求token
        this.getToken(res)
      },
    getInfo(result){//用户主动点击后 得到信息

    //此时就可以获取token console.log(result.detail)
     this.getToken(result.datail)
    },
   async getToken(res){
      //对个人信息进行解构

      const {encryptedData,iv,rawData,signature} = res

      //获取code
      //因为uni对promise的封装 所以第一个是错误对象

      const [err,code] = await uni.login()

      //正式请求token console.log(code)
        const { message } = await this.request({
        url:'api/public/v1/user/wxlogin',
        method:'post',
        data:{
          code,
          encryptedData,
          iv,rawData,
          signature
        }
      })
      //console.log(message) 报错了？
      //正常appid是相同的 所以返回的code相同才能获取token
      //此处假设得到token 存至本地

      //uni.setStorageSync('token'.message.token)

      //此时证明从没有token => 登陆 =>  一路验证拿到token => 所以返回至原来的页面
      uni.navigatorBack()

      //此时也证明验证成功 结算
      //由于没有数据支撑 所以获取token 结算生成订单 支付 都需要脑补！！

    }
    },
    onLoad(){
      //页面一进来现获取一次信息
      //因为不排除用户已授权
      this.getMsg()
    }
  }
</script>

<style lang="less" scoped>
  button {
    width: 600rpx;
    margin: 200rpx auto 0;
  }
</style>