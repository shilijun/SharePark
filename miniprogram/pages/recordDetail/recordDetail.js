Page({
  data: {
    id: null
  },

  onLoad: function (options) {
    //console.log(options.id)
    this.setData({
      id: options.id,
      record:null
    })

    var that = this

    // 做一个假数据先替代一下
    this.setData({
      record: {
        type:0,  // 0 表示出租，1表示租
        start:'2020-5-5 16:00',
        end: '2020-5-5 20:00',
        money: 50
      },
    })
    // wx.request({
    //   url: "https://liudongtushuguan.cn/v2/movie/subject/" + options.id,
    //   header: {
    //     "content-type": "json"
    //   },
    //   success: function (res) {
    //     console.log(res)
    //     if(res.statusCode==200){

    //       that.setData({
    //         movie: res.data
    //       })

    //       wx.setNavigationBarTitle({
    //         title: res.data.rating.average + "分: " + res.data.title,
    //       })

    //       wx.hideNavigationBarLoading()
    //     }
    //   }
    // })
    
    // wx.showNavigationBarLoading()
  },

  onShareAppMessage: function () {
    return {
      title: "向你推荐：" + this.data.movie.title
    }
  }



})