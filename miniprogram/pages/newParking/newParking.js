// miniprogram/pages/newParking/newParking.js
const app = getApp();
const paringutil = require('../../utils/lock-utils')
const utils = require('../../utils/utils')
Page({
  data: {
    address: null,
    addname: null,
  },
  things:{
    long:null,
    lat:null,
    name:null
  },
  onLoad: function (options) {

  },


  formSubmit: function (e) {
    if(e.detail.value.lockid=="" || e.detail.value.price=="" || this.things.long==null){
      utils.showToast("请填写完整",0)
      return 
    }
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    const d = {lockid:e.detail.value.lockid,
            openid: app.globalData.openid,
            address: this.data.address,
            lat: this.things.lat,
            long: this.things.long,
            addname: this.things.name,
            price: e.detail.value.price,
          };
    // console.log(d)
    paringutil.addParking(d)
    wx.navigateTo({
      url: '/pages/rentoutDetail/rentoutDetail',
    })
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },

  // 选择车位地址
  chooseLoc: function(){
    wx.chooseLocation({
      success: (res) => {
        this.things.long = res.longitude
        this.things.lat = res.latitude
        this.things.name = res.name
        this.setData({
          address:res.address,
          addname: res.name
        })
      },
    })
  },

  onReady: function () { },
  onShow: function () { },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})