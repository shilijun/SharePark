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
    currentParking: null,
    price: null
  },
  things:{
    myparking: [
      {
        lockid: null,
        address: null ,
        lat: null,
        long: null,
        price: null
      }
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

      // 如果车位已经设置了，则加载原来信息
      rentutil.findMyRenting((res)=>{
        console.log("[rentoutDetail -> callback(findMyRenting)]")
        console.log(res)
        for(var item of res){
          var ind = this.things.myparking.map(it=>it.lockid).indexOf(item.lockid)
          console.log(ind)
          this.things.myparking[ind].starttime = item.allowstart
          this.things.myparking[ind].endtime = item.allowend
          this.things.myparking[ind].price = item.price
        }
        console.log("[rentoutDetail -> callback(findMyRenting)]")
        console.log(this.things)
      },true)
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

  bindParkingChange: function(e){
    const ind = e.detail.value
    console.log(this.things.myparking[ind])
    this.setData({
      currentParking:ind
    })
    this.setData({
      starttime: this.things.myparking[ind].starttime,
      endtime: this.things.myparking[ind].endtime,
      price:this.things.myparking[ind].price
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

})