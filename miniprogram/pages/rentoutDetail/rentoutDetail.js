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
    myparking: [],
    address: [],
    currentParking: null
  },

  onLoad: function (options) {
  },
  onShow: function () {
    // 找到自己的车位
    this.findMyPark();
    console.log(this.data.myparking);
        // 时间初始化
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
            addr: app.globalData.address
          };
    app.globalData.rendRecordsTable.push(d);
    
    wx.switchTab({
      url: '/pages/home/home',
    })
    // console.log(app.globalData)
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },

  // 查找属于自己的车位
  findMyPark: function(){
    // 暂时使用本地数据
    var parkings = [];
    var addresses = [];
    for(var ps of app.globalData.parkingTable){
      // console.log(ps)
      if (ps.openid == app.globalData.openid){
        parkings.push(ps.lockid)
        addresses.push(ps.addr)
      }
    }
    this.setData({
      myparking: parkings,
      address:addresses
    })
    console.log(this.data.address)
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

  // 跳转到 newParking
  newParking: function(){
    wx.navigateTo({
      url: '/pages/newParking/newParking',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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