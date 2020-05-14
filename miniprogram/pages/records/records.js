// pages/records/records.js
const app = getApp();
const rentutil = require('../../utils/rent-utils')

Page({  
  data: {
    // 我的出租记录
    rendRecords:[      
    ],
  },


  onLoad: function (options) {
  },

  onShow: function () {
    const myid = app.globalData.openid;
    console.log("myid", myid)

    rentutil.findMyRenting((res)=>{
      this.setData({
        rendRecords:this.data.rendRecords.concat(res),
      })
    })
  },

})