// miniprogram/pages/rentDetail/rentDetail.js
const app = getApp()
const utils = require('../../utils/utils')
Page({
  data: {
    lat: 23.11229,
    long: 113.3245211,
    allowstart: null,
    allowend: null,
    price: null,
    markers: [
    { // 车位地点
      iconPath:"../../images/location.png",
      id: 0,
      latitude: 23.11229,
      longitude:113.3245211,
      width: 50,
      height: 50
    },
    // {
    //   // 自己所在地点
    //   iconPath: "../../images/location.png",
    //   id: 0,
    //   latitude: 23.11229,
    //   longitude:113.3245211,
    //   width: 50,
    //   height: 50
    // },
  ],
    // 路线
    polyline: [
    //   {
    //   points: [{
    //     longitude: 113.3245211,
    //     latitude: 23.10229
    //   }, {
    //     longitude: 113.324520,
    //     latitude: 23.11229
    //   }],
    //   color:"#FF0000DD",
    //   width: 2,
    //   dottedLine: true
    // }
  ],
  },
  things:{
    lockid: null
  },

  onLoad: function (options) {
    console.log('[rentDetail]')
    console.log(JSON.parse([options.p]))
    const ps = JSON.parse([options.p])

    this.data.markers[0].latitude= ps.lat,
    this.data.markers[0].longitude= ps.long,
    // this.data.markers[1].latitude= app.globalData.address.lat
    // this.data.markers[1].longitude= app.globalData.address.long,

    console.log(app.globalData.address)

    this.setData({
      lat: ps.lat,
      long: ps.long,
      markers: this.data.markers,
      allowstart:ps.allowstart,
      allowend:ps.allowend,
      price: ps.price
    })
    this.things.lockid = ps.lockid

  },
  rent: function(){
    var now = new Date();
    var starttime = utils.gettime(now);
    const d = {
      lockid:this.things.lockid,
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