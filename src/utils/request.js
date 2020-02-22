//封装uni.request 此处竟是闭包～

export default function (obj) {

    //解构baseUrl
    const { baseUrl } = obj
	
    //导出的函数被vue.use调用
    return function (vue) {
        vue.prototype.request = async function (params) {

            uni.showLoading({
                title:'数据加载中。。。',
                mask:true //开启蒙层防频触发
            })

            const { url , data } = params

            const [err, res] = await uni.request({
                url: baseUrl + url,
                data
            })

            uni.hideLoading()

            return res.data
        }
    }
}