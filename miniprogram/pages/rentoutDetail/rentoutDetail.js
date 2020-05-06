// miniprogram/pages/rentoutDetail/rentoutDetail.js
var util = require('../../utils/utils')
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    starttime:null,
    endtime:null,
    myparking: ['lock000', 'lock001'],
    currentParking: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var time = util.gettime(new Date());
    console.log("time now")
    console.log(time)
    this.setData({
      starttime: time,
      endtime: time
    });
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    const d = {lockid:e.detail.value.parking,
            endtime: e.detail.value.endtime,
            starttime: e.detail.value.starttime,
            price: e.detail.value.price,
            openid: app.globalData.openid,
            addr: app.globalData.address};
    app.globalData.parkingSpaces.push(d);
    // console.log(app.globalData)
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },

  // 查找属于自己的车位
  findMyPark: function(){
    // 暂时使用本地数据
    for(ps of app.globalData.parkingSpaces){
      if (ps.openid === app.globalData.openid){
        this.setData({
          myparking: this.data.myparking.push(ps.openid)
        })
      }
    }
  },

  bindParkingChange: function(e){
    console.log(e.detail)
    this.setData({
      currentParking: e.detail.value
    })
  },
  // 
  bindStartTimeChange: function(e){
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      starttime: e.detail.value
    })
  },
  bindEndTimeChange: function(e){
    this.setData({
      endtime: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

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