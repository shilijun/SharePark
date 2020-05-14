// miniprogram/pages/findParking/findParking.js

const rentutil = require('../../utils/rent-utils')

const app = getApp()
Page({
  data: {
    avaliabelParkings: [
      // {
      //   lockid:null,
      //   allowstart:null,
      //   allowend:null,
      //   address: null,
      // }
    ]
  },

  onLoad: function (options) {
    rentutil.findRenting((res)=>{
      console.log("callback")
      this.setData({
        avaliabelParkings: res
      })
    })
  },

  rent: function(e){
    console.log("rend id chosen ")
    // console.log(e)
    const choose = this.data.avaliabelParkings[e.currentTarget.dataset.index];

    console.log("租")
    console.log(choose)
    // 出租记录
    const d = {
      lockid:choose.lockid,
      tenantid: app.globalData.openid,
    }

    wx.cloud.callFunction({
      name: 'rent',
      data: d
    })
    console.log("租车位信息");
    console.log(d);

    wx.switchTab({
      url: '/pages/records/records',
    })
  },

})