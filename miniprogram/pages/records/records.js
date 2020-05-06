// pages/records/records.js
const app = getApp();
Page({  
  data: {
    // 我的出租记录
    rendRecords:[      
    ],
    // 我的租车位记录
    mrendRecords:[
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const myid = app.globalData.openid;
    console.log("myid")
    // console.log(myid)
    // console.log(app.globalData.rendRecordsTable)
    var records= [];
    var records2=[];
    for(var r of app.globalData.rendRecordsTable){
      console.log(r);
      if(r.renterid===myid){
        console.log("find a record as render");
        records.push(r)
      }
      if(r.tenantid===myid){
        console.log("find a record as render");
        records2.push(r)
      }
    }
    this.setData({
      rendRecords:records,
      mrendRecords: records2,
    })
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