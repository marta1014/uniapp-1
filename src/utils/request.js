//封装uni.request 此处竟是闭包～

export default function (obj) {

    //解构baseUrl
    const { baseUrl } = obj
	
    //导出的函数被vue.use调用
    return function (vue) {
        vue.prototype.request = async function (params) {

            uni.showLoading({
                title:'数据加载中。。。'
            })

            const { url } = params

            const [err, res] = await uni.request({
                url: baseUrl + url
            })

            uni.hideLoading()

            return res.data
        }
    }
}