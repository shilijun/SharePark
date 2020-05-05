// pages/home/home.js
const app = getApp();
Page({

  data: {

  },

  onLoad: function (options) {
    // 如果没有登录，则重定向到个人中心登录
    if(app.globalData.userInfo === null){
      wx.redirectTo({
        url: '/pages/userCenter/userCenter',
      })
    }    
  },

  // 处理车位出租逻辑
  rentout: function(){
    // 假设有个锁的id
    

  },

  // 查找属于自己的车位
  findMyPark: function(){
    // 暂时使用本地数据
    var myParkingSpaces = []
    for(ps of app.globalData.parkingSpaces){
      if (ps.openid === app.globalData.openid){
        myParkingSpaces.push(ps)
      }
    }
  },
  // 添加车位
  addParking: function(){
    const lockid = "lock000";
    var myParkingSpaces = []
    
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