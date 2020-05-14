// miniprogram/pages/rentoutDetail/rentoutDetail.js
var util = require('../../utils/utils')
const parkingutil = require('../../utils/lock-utils')
const rentutil = require('../../utils/rent-utils')

const app = getApp();
Page({

  data: {
    starttime:null,
    endtime:null,
    paringids:[],
    currentParking: null
  },
  things:{
    myparking: [
      // {
      //   lockid: null,
      //   address: null ,
      //   lat: null,
      //   long: null,
      //   price: null
      // }
    ],
  },

  onLoad: function (options) {
  },
  onShow: function () {
    // 找到自己的车位, 
    parkingutil.findMyPark((res)=>{
      console.log("callback")
      for (var item of res){
        this.data.paringids.push(item.lockid)
      }
      this.setData({
        paringids: this.data.paringids
      })
      this.things.myparking = res
    });

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
    // 表单验证
    if(e.detail.value.price=="" || this.data.currentParking===null ||      this.data.currentParking===undefined){
      util.showToast("请完善信息",0)
      return
    }
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    // 准备提交的数据
    var ind = Number.parseInt(this.data.currentParking)
    let choose = this.things.myparking[ind]
    const d = {lockid:e.detail.value.parking,
              // renderid
              price: e.detail.value.price,
              allowstart: e.detail.value.endtime,
              allowend: e.detail.value.starttime,
            address: choose.address,
            lat: choose.lat,
            long: choose.long,
            everyday: (e.detail.value.everyday.length===1)?true:false,
          };
    rentutil.addRenting(d)
    console.log("submit 车位设置")

    wx.switchTab({
      url: '/pages/home/home',
    })
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },

  bindParkingChange: function(e){
    this.setData({
      myparking:this.data.myparking
    })
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