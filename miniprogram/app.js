//app.js
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }

    this.globalData = {
      userInfo: null,
      openid: "oR6fd4v520A5p902RsWBx4xjrpS4",
      address: null,
      // 待出租的车位
      // parkingSpaces : [
      //   {
      //     lockid: "lock000",
      //     openid: "oR6fd4v520A5p902RsWBx4xjrpS4",
      //     addr: {address: "成都市龙泉驿区人民政府(东街东)", lat: 30.55663, long:"104.27471"},
      //     price: "5",
      //     endtime: "11:32",
      //     starttime: "11:32",
      //     everyday: true
      //   }
      // ],
      // 所有车位
      // parkingTable:[
      //   {
      //     lockid: "lock000",
      //     openid: "oR6fd4v520A5p902RsWBx4xjrpS4",
      //     address: {addr: "成都市龙泉驿区人民政府(东街东)", lat: 30.55663, long:"104.27471"},
      //     price: 5
      //   }
      // ],
      // 出租状态的车位记录
      // rendRecordsTable: [
      //   { 
      //     lockid: "lock000",
      //     renderid: "oR6fd4v520A5p902RsWBx4xjrpS4",
      //     tenantid: "oR6fd4v520A5p902RsWBx4xjrpS4",
      //     // startdate: "05-01",
      //     starttime: "00:00",
      //     unitPrice: 5,
      //     endtime: null,
      //     // enddate:null,
      //   }
      // ],
      //用户信息
      // usersTable: [
      //   {
      //     openid:  "oR6fd4v520A5p902RsWBx4xjrpS4",
      //     avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/H9O9fay6boqnxImHaqM1DXr7s4RChTIGibGQd0Rey9dkK4wibOwN8u3LBgOshTFnbpA7F8dnU0OXBqJcMUiaSX8ZQ/132",
      //     nickName: "GgYy"
      //   }
      // ],
    }
  }
})
