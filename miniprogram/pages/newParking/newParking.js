// miniprogram/pages/newParking/newParking.js
const app = getApp();

Page({
  data: {
    address: null
  },
  onLoad: function (options) {
    // console.log(app.globalData)
    this.setData({
      address: app.globalData.address.address 
    })
  },


  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    const d = {lockid:e.detail.value.lockid,
            price: e.detail.value.price,
            openid: app.globalData.openid,
            address: app.globalData.address};
    console.log(d)
    app.globalData.parkingTable.push(d);
    wx.navigateTo({
      url: '/pages/rentoutDetail/rentoutDetail',
    })
  },
  formReset: function () {
    console.log('form发生了reset事件')
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