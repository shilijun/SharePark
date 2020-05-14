// miniprogram/pages/findParking/findParking.js

const rentutil = require('../../utils/rent-utils')
const utils = require('../../utils/utils')

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

  seeDetail: function(e){
    console.log("rend id chosen ")
    // console.log(e)
    const choose = this.data.avaliabelParkings[e.currentTarget.dataset.index];

    console.log("租")
    console.log(choose)

    const params = JSON.stringify(choose)
    wx.navigateTo({
      url: '/pages/rentDetail/rentDetail?p='+params,
    })
  },


  rent: function(e){
    console.log("rend id chosen ")
    const choose = this.data.avaliabelParkings[e.currentTarget.dataset.index];

    console.log("租")
    console.log(choose)
    var now = new Date();
    var starttime = utils.gettime(now);
    const d = {
      lockid: choose.lockid,
      tenantid: app.globalData.openid,
      starttime: starttime,
    }
    wx.cloud.callFunction({
      name: 'rent',
      data: d,      
    })
    console.log("租车位信息");
    console.log(d);

    wx.switchTab({
      url: '/pages/records/records',
    })
  }
})