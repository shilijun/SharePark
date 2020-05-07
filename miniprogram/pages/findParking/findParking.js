// miniprogram/pages/findParking/findParking.js
const app = getApp()
Page({
  data: {
    avaliabelParkings: []
  },

  onLoad: function (options) {
    console.log( app.globalData.parkingSpaces)
    console.log(this.data)
    this.setData({
      avaliabelParkings: app.globalData.parkingSpaces
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
      renderid: choose.openid,
      tenantid: app.globalData.openid,
      starttime: choose.starttime,
      endtime: choose.endtime,
      unitPrice: choose.price,
    }
    app.globalData.rendRecordsTable.push(d);
    console.log("租车位信息");
    console.log(d);

    wx.switchTab({
      url: '/pages/records/records',
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