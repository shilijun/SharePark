// pages/records/records.js
Page({

  data: {
    records:[
      {
        type:0,  // 0 表示出租，1表示租
        start:'2020-5-5 16:00',
        end: '2020-5-5 20:00',
        money: 50
      },
      {
        type:0,  // 0 表示出租，1表示租
        start:'2020-5-4 16:00',
        end: '2020-5-5 20:00',
        money: 500
      },
      {
        type:1,  // 0 表示出租，1表示租
        start:'2020-5-3 16:00',
        end: '2020-5-5 20:00',
        money: 900
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  seeDetail: function(event){
    console.log(event);
    wx.navigateTo({
      url: '/pages/recordDetail/recordDetail?id='+event.currentTarget.dataset.id
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