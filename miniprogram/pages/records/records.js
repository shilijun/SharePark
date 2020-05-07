// pages/records/records.js
const app = getApp();
const userUtils = require('../../utils/user-utils')
const lockUtils = require('../../utils/lock-utils')
Page({  
  data: {
    // 我的出租记录
    rendRecords:[      
    ],
  },


  onLoad: function (options) {
  },

  seeDetail: function(event){
    console.log(event);
    wx.navigateTo({
      url: '/pages/recordDetail/recordDetail?id='+event.currentTarget.dataset.id
    })
  },

  onShow: function () {
    const myid = app.globalData.openid;
    var records= [];
    console.log("myid", myid)
    for(var r of app.globalData.rendRecordsTable){
      r['addr'] = lockUtils.getAddr(r.lockid);

      var avatarName = null;

      // 如果我是租车位者
      if(r.tenantid===myid){
        console.log("find a record as render");
        r['type']=1
        avatarName = userUtils.getAvatarNickname(r.renderid);
      }
      // 我是出租者
      if(r.renderid===myid){
        console.log("find a record as render");
        r['type']=0;
        avatarName = userUtils.getAvatarNickname(r.tenantid);
      }

      r['avatarUrl'] = avatarName[0];
      r['nickName'] = avatarName[1];
      records.push(r)
    }
    // console.log(records)
    this.setData({
      rendRecords:records,
    })
  },

  
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